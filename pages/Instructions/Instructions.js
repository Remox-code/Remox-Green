document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        // Steps
        if (entry.target.classList.contains("instructions-steps")) {
          const cards = entry.target.querySelectorAll(".step-card");

          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("show");
            }, index * 250);
          });
        }

        // Care Tips
        if (entry.target.classList.contains("care-tips")) {
          const tips = entry.target.querySelectorAll(".tip-item");

          tips.forEach((tip, index) => {
            tip.classList.add(index % 2 ? "from-right" : "from-left");

            setTimeout(() => {
              tip.classList.add("show");
            }, index * 200);
          });
        }

        // FAQ
        if (entry.target.classList.contains("instructions-faq")) {
          const faqs = entry.target.querySelectorAll(".faq-card");

          faqs.forEach((faq, index) => {
            setTimeout(() => {
              faq.classList.add("show");
            }, index * 180);
          });
        }

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.25,
    },
  );

  observer.observe(document.querySelector(".instructions-steps"));
  observer.observe(document.querySelector(".care-tips"));
  observer.observe(document.querySelector(".instructions-faq"));
});
