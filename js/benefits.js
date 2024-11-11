document.addEventListener("DOMContentLoaded", () => {
  const imgTextElements = document.querySelectorAll(".img-text");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelector(".benefits-text").classList.add("visible");
        }
      });
    },
    { threshold: 0.5 }
  );

  imgTextElements.forEach((el) => observer.observe(el));
});
