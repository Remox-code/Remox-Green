const aboutObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      if (entry.target.classList.contains("about-hero-content")) {
        entry.target.classList.add("show");
      }

      if (entry.target.classList.contains("about-intro")) {
        document.querySelector(".intro-text").classList.add("show");

        document.querySelector(".intro-image").classList.add("show");
      }

      if (entry.target.classList.contains("about-mission-vision")) {
        document.querySelector(".mission-item").classList.add("show");

        setTimeout(() => {
          document.querySelector(".vision-item").classList.add("show");
        }, 300);
      }

      if (entry.target.classList.contains("about-team")) {
        const members = entry.target.querySelectorAll(".member-card");

        members.forEach((member, index) => {
          setTimeout(() => {
            member.classList.add("show");
          }, index * 250);
        });
      }
    });
  },
  { threshold: 0.25 },
);

aboutObserver.observe(document.querySelector(".about-hero-content"));

aboutObserver.observe(document.querySelector(".about-intro"));

aboutObserver.observe(document.querySelector(".about-mission-vision"));

aboutObserver.observe(document.querySelector(".about-team"));
