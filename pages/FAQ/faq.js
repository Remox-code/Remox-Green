const faqObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    if (entry.target.classList.contains("sidebar")) {
      entry.target.classList.add("show");
    }

    if (entry.target.classList.contains("hero-card")) {
      entry.target.classList.add("show");
    }

    if (entry.target.classList.contains("faq-grid")) {
      const items = entry.target.querySelectorAll(".faq-item");

      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("show");
        }, index * 180);
      });
    }
  });
});

faqObserver.observe(document.querySelector(".sidebar"));
faqObserver.observe(document.querySelector(".hero-card"));
faqObserver.observe(document.querySelector(".faq-grid"));

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    item.classList.toggle("open");
  });
});
