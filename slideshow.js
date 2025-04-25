const slides = document.querySelectorAll(".carousel img");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function cycleSlides() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

if (slides.length) {
  showSlide(currentSlide);
  setInterval(cycleSlides, 3000); // 3 seconds
}
