const mobile = document.querySelector(".mobile-nav-btn");
const header = document.querySelector(".header");
const toggle = () => {
  header.classList.toggle("active");
};
mobile.addEventListener("click", () => toggle());
