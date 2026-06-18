window.addEventListener("load", () => {
  document.querySelector(".header").classList.add("header-show");
});

const footer = document.querySelector(".premium-footer");

const footerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        footer.classList.add("footer-show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

footerObserver.observe(footer);

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");

  if (!searchInput) return;

  const goSearch = () => {
    const query = searchInput.value.trim();
    if (query) {
      localStorage.setItem("catalogSearchQuery", query);
      window.location.href = "../catalog/catalog.html";
    }
  };

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") goSearch();
  });
});
