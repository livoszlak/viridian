const signup = document.querySelector(".signup");
const idBtn = document.getElementById("go-to-signup");

idBtn.addEventListener("click", () => {
  signup.classList.remove("hidden");
});

document.getElementById("exit").addEventListener("click", () => {
  signup.classList.add("hidden");
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
