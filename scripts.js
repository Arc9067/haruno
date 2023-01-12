const preload = document.querySelector(".pre-loader");
const number = document.querySelector(".number");
const mainTxt = document.querySelector(".main-txt");
const logo2 = document.querySelector(".logo2");

window.addEventListener("load", () => {
  preload.classList.add("stop-preloader");
  mainTxt.style.animationName = "maintxt";
  logo2.style.animationName = "logo2a"
});
