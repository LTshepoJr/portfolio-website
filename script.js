// Hamburger Toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

// Carousel Slide
const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function showSlide(i) {
  // Wrap around for loop effect
  if (i < 0) {
    index = items.length - 1;
  } else if (i >= items.length) {
    index = 0;
  } else {
    index = i;
  }

  const offset = -index * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener("click", () => showSlide(index - 1));
nextBtn.addEventListener("click", () => showSlide(index + 1));

// Initialize the first slide
showSlide(0);
