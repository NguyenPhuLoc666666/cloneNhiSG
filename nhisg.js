document.addEventListener("DOMContentLoaded", function () {
  var slides = document.querySelectorAll(".slide");
  var slides2 = document.querySelectorAll(".slide-2");
  var currentSlide = 0;
  var currentSlide2 = 0;
  function showSlide(slides, n) {
    slides.forEach(function (slide) {
      slide.classList.add("hidden");
      slide.classList.remove("animate-slide-left");
    });
    slides[n].classList.add("animate-slide-left");
    slides[n].classList.remove("hidden");
  }

  function nextSlide() {
    if (currentSlide++ > slides.length) currentSlide = 1;
    showSlide(slides, currentSlide - 1);
  }
  function nextSlide2() {
    if (currentSlide2++ > slides2.length) currentSlide2 = 1;
    showSlide(slides2, currentSlide2 - 1);
  }

  setInterval(nextSlide, 3000);
  setInterval(nextSlide2, 4000);
});
