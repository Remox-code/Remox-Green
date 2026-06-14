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
