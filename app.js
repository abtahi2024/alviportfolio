const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  nav.classList.toggle("active");
  hamburger.classList.toggle("active"); // X animation
});

// Click outside closes menu
document.addEventListener("click", (e) => {
  if (
    nav.classList.contains("active") &&
    !nav.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    nav.classList.remove("active");
    hamburger.classList.remove("active");
  }
});
