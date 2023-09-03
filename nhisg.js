document.addEventListener("DOMContentLoaded", function () {
  var slides = document.querySelectorAll(".slide");
  var slides2 = document.querySelectorAll(".slide-2");
  var slides3 = document.querySelectorAll(".slide-3");
  var currentSlide = 0;
  var currentSlide2 = 0;
  var currentSlide3 = 0;

  function showSlide(slides, n) {
    slides.forEach(function (slide) {
      slide.classList.add("hidden");
      slide.classList.remove("animate-slide-left");
    });
    slides[n].classList.add("animate-slide-left");
    slides[n].classList.remove("hidden");
  }

  function nextSlide() {
    if (currentSlide++ >= slides.length) currentSlide = 1;
    showSlide(slides, currentSlide - 1);
  }
  function nextSlide2() {
    if (currentSlide2++ >= slides2.length) currentSlide2 = 1;
    showSlide(slides2, currentSlide2 - 1);
  }
  function nextSlide3() {
    if (window.innerWidth <= 600) {
      if (currentSlide3++ >= slides3.length) currentSlide3 = 1;
      showSlide(slides3, currentSlide3 - 1);
    }
  }

  setInterval(nextSlide, 3000);
  setInterval(nextSlide2, 4000);
  setInterval(nextSlide3, 3000);
});

// button scroll to top
const mybutton = document.getElementById("btn-back-to-top");

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.remove("hidden");
  } else {
    mybutton.classList.add("hidden");
  }
};
const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

mybutton.addEventListener("click", backToTop);
window.addEventListener("scroll", scrollFunction);

var darkThemeBtn = document.getElementById("dark-theme-btn");
var darkTheme = document.getElementById("dark-theme");
var darkMode = document.getElementById("dark-mode");
var darkThemeStatus = false;
darkThemeBtn.addEventListener("click", changeDarkTheme);
function changeDarkTheme() {
  if (darkThemeStatus == false) {
    darkTheme.classList.remove("fa-sun");
    darkTheme.classList.add("fa-moon");
    darkMode.classList.add("dark-theme");
    darkThemeStatus = true;
  } else {
    darkTheme.classList.add("fa-sun");
    darkTheme.classList.remove("fa-moon");
    darkMode.classList.remove("dark-theme");
    darkThemeStatus = false;
  }
}
