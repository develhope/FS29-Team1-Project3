const buttonMenuKebab = document.querySelector(".button__menù-kebab");
const asideContainer = document.querySelector(".aside__container");
const asideButtonX = document.querySelector(".aside__button-x");
const navSingleButton = document.querySelectorAll(".nav__single__button");
const nav1Container = document.querySelectorAll(".nav1__container");
// const nav1FaQButtonContent = document.querySelector(
//   ".nav1__FaQ-button__content"
// );
// ------------------------------

buttonMenuKebab.addEventListener("click", () => {
  asideContainer.classList.add("df");
});
asideButtonX.addEventListener("click", () => {
  asideContainer.classList.remove("df");
});
// -------------------------------

for (let i = 0; i < navSingleButton.length; i++) {
  if (i === 0) {
    navSingleButton[i].addEventListener("click", () => {
      nav1Container[i].classList.add("df");
    });
  } else if (i === 1) {
    navSingleButton[i].addEventListener("click", () => {
      nav1Container[i].classList.add("df");
    });
  }
}
console.log(navSingleButton);
console.log(nav1Container);
// asideButtonX.addEventListener("click", () => {
//   nav1AccountButtonContent.classList.remove("df");
// });
//----------------------------------

// navSingleButton.addEventListener("click", () => {
//   nav1FaQButtonContent.classList.remove("df");
// });
