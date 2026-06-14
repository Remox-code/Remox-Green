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
