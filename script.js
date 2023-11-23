const signup = document.querySelector(".signup");
const idBtn = document.getElementById("go-to-signup");

idBtn.addEventListener("click", () => {
  signup.classList.remove("hidden");
});

document.getElementById("exit").addEventListener("click", () => {
  signup.classList.add("hidden");
});

const burger = document.getElementById("burger");
const popout = document.querySelector(".menu-popout");

burger.addEventListener("click", () => {
  popout.classList.remove("hidden");
});

document.getElementById("exit-popout").addEventListener("click", () => {
  popout.classList.add("hidden");
});

const arrowRight = document.getElementById("slide-arrow-right");
const arrowLeft = document.getElementById("slide-arrow-left");
const bikeCity = document.getElementById("bike-city");
const bikeForest = document.getElementById("bike-forest");

const changeSlide = () => {
  arrowLeft.classList.toggle("hidden");
  arrowRight.classList.toggle("hidden");
  bikeForest.classList.toggle("hidden");
  bikeCity.classList.toggle("hidden");
};

arrowRight.addEventListener("click", changeSlide);
arrowLeft.addEventListener("click", changeSlide);

const toTop = document.getElementById("to-top-mobile");
toTop.addEventListener("click", () => {
  scrollTo({ top: 0, behavior: "smooth" });
});

let scrollPosition;

const getWindowWidth = function () {
  if (window.innerWidth > 1000) {
    scrollPosition = 2000;
    toTop.setAttribute("src", "./assets/to-top-web.svg");
  } else {
    scrollPosition = 2300;
  }
  return scrollPosition;
};

getWindowWidth();

const toggleClassOnScroll = function () {
  if (window.scrollY > scrollPosition) {
    toTop.classList.remove("hidden");
  } else {
    toTop.classList.add("hidden");
  }
};

window.onscroll = toggleClassOnScroll;
