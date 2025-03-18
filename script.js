document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".fade-in").forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, index * 500);
  });
});
