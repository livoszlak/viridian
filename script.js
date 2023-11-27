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

const langEn = document.querySelectorAll(".lang-en");
const langSv = document.querySelectorAll(".lang-sv");

langEn.forEach((item) => {
  item.addEventListener("click", () => {
    langSv.forEach((se) => {
      se.classList.remove("underline");
    });
    langEn.forEach((en) => {
      en.classList.add("underline");
    });
  });
});

langSv.forEach((item) => {
  item.addEventListener("click", () => {
    langEn.forEach((se) => {
      se.classList.remove("underline");
    });
    langSv.forEach((en) => {
      en.classList.add("underline");
    });
  });
});

const arrowRight = document.getElementById("slide-arrow-right");
const arrowLeft = document.getElementById("slide-arrow-left");
const bikeCity = document.getElementById("bike-city");
const bikeForest = document.getElementById("bike-forest");
const heroVideo = document.getElementById("hero-bike");

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
const logo = document.getElementById("logo");

let scrollPosition;

const getWindowWidth = function () {
  if (window.innerWidth > 1000) {
    scrollPosition = 2000;
    toTop.setAttribute("src", "./assets/to-top-web.svg");
    logo.setAttribute("src", "./assets/full logo.svg");
    bikeCity.setAttribute("src", "./assets/bike-images/City_Desktop.png");
    bikeForest.setAttribute(
      "src",
      "./assets/bike-images/Countryside_Desktop.png"
    );
  } else {
    scrollPosition = 2300;
  }
  return scrollPosition;
};

getWindowWidth();

const width = window.matchMedia("(min-width: 1000px)");
const source = document.createElement("source");
source.setAttribute("type", "video/mp4");
heroVideo.appendChild(source);

if (width.matches) {
  heroVideo.pause();
  source.removeAttribute("src");
  source.setAttribute("src", "./assets/video/Hero_Turn_Desk_mp4.mp4");
  heroVideo.load();
  heroVideo.play();
} else {
  heroVideo.pause();
  source.removeAttribute("src");
  source.setAttribute("src", "./assets/video/Hero_Turn_Mobile_mp4.mp4");
  heroVideo.load();
  heroVideo.play();
}
/*
const setAttribute = function () {
  if (window.innerWidth > 1000) {
    toTop.setAttribute("src", "./assets/to-top-web.svg");
    logo.setAttribute("src", "./assets/full logo.svg");
    bikeCity.setAttribute("src", "./assets/bike-images/City_Desktop.png");
    bikeForest.setAttribute(
      "src",
      "./assets/bike-images/Countryside_Desktop.png"
    );
    heroVideo.setAttribute("src", "./assets/video/Hero_Turn_Desk_mp4.mp4");
  }
};

setAttribute(); */

const toggleClassOnScroll = function () {
  if (window.scrollY > scrollPosition) {
    toTop.classList.remove("hidden");
  } else {
    toTop.classList.add("hidden");
  }
};

window.onscroll = toggleClassOnScroll;
