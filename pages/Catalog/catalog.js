const catalogObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      if (entry.target.classList.contains("sidebar")) {
        entry.target.classList.add("show");
      }

      if (entry.target.classList.contains("product-grid")) {
        const cards = entry.target.querySelectorAll(".item-card");

        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("show");
          }, index * 150);
        });
      }
    });
  },
  { threshold: 0.2 },
);

catalogObserver.observe(document.querySelector(".sidebar"));
catalogObserver.observe(document.querySelector(".product-grid"));

document.querySelectorAll(".Add").forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.closest(".item-card");
    const name = card.querySelector("h2").innerText;
    const price = card.querySelector(".price").innerText;
    const img = card.querySelector("img").src;

    const product = { name, price, img, quantity: 1 };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find((item) => item.name === name);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    showToast("Added");
  });
});
let toastTimer;

function showToast(message = "Added") {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

document.addEventListener("DOMContentLoaded", () => {
  const cards = Array.from(document.querySelectorAll(".item-card"));
  const query = (localStorage.getItem("catalogSearchQuery") || "")
    .toLowerCase()
    .trim();

  const searchInput = document.getElementById("search");

  function filterCards(term) {
    let visibleCount = 0;

    cards.forEach((card) => {
      const title = card.querySelector("h2")?.textContent.toLowerCase() || "";
      const desc = card.querySelector("p")?.textContent.toLowerCase() || "";
      const price =
        card.querySelector(".price")?.textContent.toLowerCase() || "";

      const match =
        title.includes(term) || desc.includes(term) || price.includes(term);

      card.style.display = match ? "flex" : "none";
      if (match) visibleCount++;
    });

    const emptyState = document.getElementById("no-results");
    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? "block" : "none";
    }
  }

  if (query) {
    if (searchInput) searchInput.value = query;
    filterCards(query);
    localStorage.removeItem("catalogSearchQuery");
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      filterCards(e.target.value.toLowerCase().trim());
    });
  }
});
