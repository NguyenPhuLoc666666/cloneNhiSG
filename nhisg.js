tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow Condensed", "sans-serif"],
        arimo: ["Arimo", "sans-serif"],
      },
    },
  },
};

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const slides2 = document.querySelectorAll(".slide-2");
  const slides3 = document.querySelectorAll(".slide-3");
  let currentSlide = 0;
  let currentSlide2 = 0;
  let currentSlide3 = 0;
  const interval1 = 3000;
  const interval2 = 4000;

  function showSlide(slides, n) {
    slides.forEach(function (slide) {
      slide.classList.add("hidden");
      slide.classList.remove("animate-slide-left");
    });
    slides[n].classList.add("animate-slide-left");
    slides[n].classList.remove("hidden");
  }

  function nextSlide(slides, currentSlide) {
    if (++currentSlide >= slides.length) currentSlide = 0;
    showSlide(slides, currentSlide);
    return currentSlide;
  }

  function nextSlide3() {
    if (window.innerWidth > 600) return;
    currentSlide3 = nextSlide(slides3, currentSlide3);
  }

  setInterval(function () {
    currentSlide = nextSlide(slides, currentSlide);
  }, interval1);

  setInterval(function () {
    currentSlide2 = nextSlide(slides2, currentSlide2);
  }, interval2);

  setInterval(nextSlide3, interval1);
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
const darkThemeBtn = document.getElementById("dark-theme-btn");
const darkTheme = document.getElementById("dark-theme");
const darkModes = document.querySelectorAll(".dark-mode");
let darkThemeStatus = false;

darkThemeBtn.addEventListener("click", changeDarkTheme);

function changeDarkTheme() {
  darkThemeStatus = !darkThemeStatus;
  darkTheme.classList.toggle("fa-sun", !darkThemeStatus);
  darkTheme.classList.toggle("fa-moon", darkThemeStatus);
  darkTheme.classList.toggle("text-white", darkThemeStatus);

  darkModes.forEach(function (darkMode) {
    darkMode.classList.toggle("dark-theme", darkThemeStatus);
    darkMode.classList.toggle("light-theme", !darkThemeStatus);
  });
}

let valueDisplays = document.querySelectorAll(".value-display");
let interval = 1000;
let maxTargetValue = 0;

// Find the maximum target value among all value displays
valueDisplays.forEach((valueDisplay) => {
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  if (endValue > maxTargetValue) {
    maxTargetValue = endValue;
  }
});

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / maxTargetValue);
  let counter = setInterval(function () {
    startValue += Math.floor((endValue / maxTargetValue) * 4000);
    valueDisplay.textContent = startValue;
    if (startValue >= endValue) {
      clearInterval(counter);
      valueDisplay.textContent = endValue;
    }
  }, duration);
});

// side menu bar
let menuOtherServices = document.getElementById("menu-other-services");
let menuProjects = document.getElementById("menu-projects");
let menuAboutUs = document.getElementById("menu-about-us");

let menuOtherServicesHeading = document.getElementById(
  "menu-other-services__heading"
);
let menuProjectsHeading = document.getElementById("menu-projects__heading");
let menuAboutUsHeading = document.getElementById("menu-about-us__heading");

menuOtherServicesHeading.addEventListener("click", openSelection);
menuProjectsHeading.addEventListener("click", openSelection);
menuAboutUsHeading.addEventListener("click", openSelection);
// footer
let footerServices = document.getElementById("footer-services");
let footerOurPages = document.getElementById("footer-our-pages");
let footerSupport = document.getElementById("footer-support");
let footerRegister = document.getElementById("footer-register");

let footerServicesHeading = document.getElementById("footer-services__heading");
let footerOurPagesHeading = document.getElementById(
  "footer-our-pages__heading"
);
let footerSupportHeading = document.getElementById("footer-support__heading");
let footerRegisterHeading = document.getElementById("footer-register__heading");

footerServicesHeading.addEventListener("click", openSelection);
footerOurPagesHeading.addEventListener("click", openSelection);
footerSupportHeading.addEventListener("click", openSelection);
footerRegisterHeading.addEventListener("click", openSelection);

function openSelection() {
  if (window.innerWidth > 600) return;
  switch (this.id) {
    case "menu-other-services__heading":
      changeClassList(menuOtherServices);
      break;
    case "menu-projects__heading":
      changeClassList(menuProjects);
      break;
    case "menu-about-us__heading":
      changeClassList(menuAboutUs);
      break;
    case "footer-services__heading":
      changeClassList(footerServices);
      break;
    case "footer-our-pages__heading":
      changeClassList(footerOurPages);
      break;
    case "footer-support__heading":
      changeClassList(footerSupport);
      break;
    case "footer-register__heading":
      changeClassList(footerRegister);
      break;
  }
}

function changeClassList(elem) {
  if (elem.classList.contains("hidden")) {
    elem.classList.remove("hidden");
    elem.classList.add("block");
  } else {
    elem.classList.remove("block");
    elem.classList.add("hidden");
  }
}

let menuIcon = document.getElementById("menu-icon");
let sideMenuBar = document.getElementById("side-menu-bar");
let closeBtn = document.getElementById("close-btn");
menuIcon.addEventListener("click", openSideBar);
function openSideBar() {
  changeClassList(sideMenuBar);
}
closeBtn.addEventListener("click", openSideBar);
