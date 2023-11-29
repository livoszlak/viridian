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

const slide1 = document.getElementById("bag1");
const slide2 = document.getElementById("bag2");
const slide3 = document.getElementById("bag3");
const slide4 = document.getElementById("bottle1");
const slide5 = document.getElementById("bottle3");
const slide6 = document.getElementById("bottle4");
const slide7 = document.getElementById("brillor3");
const slide8 = document.getElementById("brillor4");
const slide9 = document.getElementById("brillor5");
const slide10 = document.getElementById("brillor6");
const slide11 = document.getElementById("brillor7");
const slide12 = document.getElementById("bagEndImg");

const slideshowSrc = () => {
  slide1.setAttribute(
    "src",
    "./assets/product-images-500/Bag1_Medbakgrund_500px.png"
  );
  slide2.setAttribute(
    "src",
    "./assets/product-images-500/Bag2_Medbakgrund_500px.png"
  );
  slide3.setAttribute(
    "src",
    "./assets/product-images-500/Bag3_Medbakgrund_500px.png"
  );
  slide4.setAttribute(
    "src",
    "./assets/product-images-500/Bottle_1_MedBakgrund_500.png"
  );
  slide5.setAttribute(
    "src",
    "./assets/product-images-500/Bottle_3_MedBakgrund_500.png"
  );
  slide6.setAttribute(
    "src",
    "./assets/product-images-500/Bottle_4_MedBakgrund_500.png"
  );
  slide7.setAttribute(
    "src",
    "./assets/product-images-500/Brillor3_Flygande_500.png"
  );
  slide8.setAttribute(
    "src",
    "./assets/product-images-500/Brillor4_Flygande_500.png"
  );
  slide9.setAttribute(
    "src",
    "./assets/product-images-500/Brillor5_Flygande_MedFodral_500.png"
  );
  slide10.setAttribute(
    "src",
    "./assets/product-images-500/Brillor6_Flygande_MedFodral_500.png"
  );
  slide11.setAttribute(
    "src",
    "./assets/product-images-500/Brillor7_Sida_logga_500.png"
  );
  slide12.setAttribute(
    "src",
    "./assets/product-images-500/Bag1_Medbakgrund_500px.png"
  );
};

const engineImg = document.getElementById("engine-img");

let scrollPosition;
const getWindowWidth = function () {
  if (window.innerWidth > 1000) {
    scrollPosition = 2000;

    logo.setAttribute("src", "./assets/full logo.svg");
    bikeCity.setAttribute("src", "./assets/bike-images/City_Desktop.png");
    bikeForest.setAttribute(
      "src",
      "./assets/bike-images/Countryside_Desktop.png"
    );
    engineImg.setAttribute(
      "src",
      "./assets/product-images-500/PaketIsärVitBakgrund500_PEP.png"
    );
    slideshowSrc();
  } else {
    scrollPosition = 2300;
  }
  return scrollPosition;
};

getWindowWidth();

const heroVideo = document.getElementById("hero-bike");
const detailsVideo = document.getElementById("details-bike");
const width = window.matchMedia("(min-width: 1000px)");
const heroSource = document.createElement("source");
const detailsSource = document.createElement("source");
heroSource.setAttribute("type", "video/mp4");
detailsSource.setAttribute("type", "video/mp4");
heroVideo.appendChild(heroSource);
detailsVideo.appendChild(detailsSource);

if (width.matches) {
  heroVideo.pause();
  heroSource.removeAttribute("src");
  heroSource.setAttribute("src", "./assets/video/Hero_Turn_Desk_mp4.mp4");
  heroVideo.load();
  heroVideo.play();
  detailsVideo.pause();
  detailsSource.removeAttribute("src");
  detailsSource.setAttribute("src", "./assets/video/Details_Desktop.mp4");
  detailsVideo.load();
  detailsVideo.play();
} else {
  heroVideo.pause();
  heroSource.removeAttribute("src");
  heroSource.setAttribute("src", "./assets/video/Hero_Turn_Mobile_mp4.mp4");
  heroVideo.load();
  heroVideo.play();
  detailsVideo.pause();
  detailsSource.removeAttribute("src");
  detailsSource.setAttribute("src", "./assets/video/Details_Desktop.mp4");
  detailsVideo.load();
  detailsVideo.play();
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
