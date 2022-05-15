// import carousel, scroll library && tailwind css

import AOS from "aos";
import "aos/dist/aos.css";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import "./style.css";
// element selector

const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  }
  throw new Error(`Uverite se da li ovaj ${selector} postoji`);
};

// toggle menu

const icon = selectElement("#icon i");
const menuItem = selectElement('[role="menubar"]');

icon.addEventListener("click", () => {
  const isEspanded = JSON.parse(icon.getAttribute("aria-expanded"));
  icon.setAttribute("aria-expanded", !isEspanded);
  icon.classList.toggle("fa-xmark");
  menuItem.classList.toggle("-translate-x-full");
  menuItem.classList.toggle("translate-x-0");
});

// nav && to top -> on scroll

const nav = selectElement("#nav");
const top = selectElement("#to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.classList.add("shadow-md");
    top.classList.remove("hidden");
    top.classList.add("flex");
  } else {
    nav.classList.remove("shadow-md");
    top.classList.add("hidden");
    top.classList.remove("flex");
  }
});

// services slider

var slider = new KeenSlider(
  "#services-slide",
  {
    loop: true,
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  },
  [
    (slider) => {
      let timeout;
      let mouseOver = false;
      function clearNextTimeout() {
        clearTimeout(timeout);
      }
      function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
          slider.next();
        }, 2000);
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true;
          clearNextTimeout();
        });
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false;
          nextTimeout();
        });
        nextTimeout();
      });
      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);
    },
  ]
);
// video show-hide
const play = selectElement("#play");
const video = selectElement("#video");
const frame = selectElement("#frame").src;
const closeVideo = selectElement("#close-video");
play.addEventListener("click", () => {
  video.classList.remove("scale-0", "opacity-0");
  video.classList.add("scale-100", "opacity-100");
});
closeVideo.addEventListener("click", () => {
  video.classList.add("scale-0", "opacity-0");
  video.classList.remove("scale-100", "opacity-100");
  var newsrc = frame.replace("&autoplay=1", "");
  selectElement("#frame").src = newsrc;
});

// testemonial-slider

var sliderTwo = new KeenSlider(
  "#testemonial",
  {
    loop: true,

    slides: { perView: 1 },
  },
  [
    (slider) => {
      let timeout;
      let mouseOver = false;
      function clearNextTimeout() {
        clearTimeout(timeout);
      }
      function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
          slider.next();
        }, 4000);
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true;
          clearNextTimeout();
        });
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false;
          nextTimeout();
        });
        nextTimeout();
      });
      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);
    },
  ]
);
// date

const date = (selectElement("#date").innerText = new Date().getFullYear());

// scroll animation
AOS.init();

// preloader

const preloader = selectElement("#preloader");
console.log(preloader);
window.addEventListener("load", () => {
  preloader.classList.add("loaded");
});
