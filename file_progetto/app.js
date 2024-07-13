// Footer

const buttonEconomy = document.querySelectorAll(".button_economy");
const ulRegione = document.querySelector(".ul_regione");
const ul_regioni = document.querySelector(".ul_lingua");
const arrayLiRegione = ulRegione.children;

// Header
const buttonMenuKebab = document.querySelector(".button__menù-kebab");
const asideContainer = document.querySelector(".aside__container");
const asideButtonX = document.querySelector(".aside__button-x");
const navSingleButton = document.querySelectorAll(".nav__single__button");
const nav1Container = document.querySelectorAll(".nav1__container");
const nav1XButton = document.querySelectorAll(".nav1__x__button");

// Kebab menu
buttonMenuKebab.addEventListener("click", () => {
  asideContainer.classList.add("ul_show");
});
asideButtonX.addEventListener("click", () => {
  asideContainer.classList.remove("ul_show");
});

// Bottoni Navbar 1

for (let i = 0; i < navSingleButton.length; i++) {
  if (i === 0) {
    navSingleButton[i].addEventListener("click", () => {
      nav1Container[i].classList.toggle("ul_show");
      nav1Container[1].classList.remove("ul_show");
    });
  } else if (i === 1) {
    navSingleButton[i].addEventListener("click", () => {
      nav1Container[i].classList.toggle("ul_show");
      nav1Container[0].classList.remove("ul_show");
    });
  }
}
nav1XButton.forEach((elem) => {
  elem.addEventListener("click", () => {
    nav1Container[0].classList.remove("ul_show");
    nav1Container[1].classList.remove("ul_show");
  });
});

// Footer

function addCheck() {
  // for (let i = 0; i < arrayLiRegione.length; i++) {
  //   if (arrayLiRegione[i].children.innerHTML === "Italy") {
  //     arrayLiRegione[i].innerHTML += localStorage.getItem("check-dropbox");
  //   }
  // }
  ulRegione.classList.toggle("ul_show");
  ul_regioni.classList.remove("ul_show");
  ulRegione.setAttribute("autofocus", "");
}
buttonEconomy[0].addEventListener("click", () => {
  ulRegione.addEventListener("focus", addCheck(), true);
});
buttonEconomy[1].addEventListener("click", () => {
  ul_regioni.classList.toggle("ul_show");
  ulRegione.classList.remove("ul_show");
});

localStorage.setItem("check-dropbox", '<img src="./assets/icons/footer/Icona conferma ul.svg" alt="" class="check">');
for (let i = 0; i < arrayLiRegione.length; i++) {
  arrayLiRegione[i].addEventListener("click", () => {
    arrayLiRegione[i].innerHTML += localStorage.getItem("check-dropbox");
  });
}
ulRegione.addEventListener(
  "blur",
  () => {
    ulRegione.classList.remove("ul_show");
  },
  true
);
buttonEconomy[1].addEventListener("blur", () => {
  ul_regioni.classList.remove("ul_show");
});

/*  -----------------------------------------------------------------------------------------------
  Tabs
--------------------------------------------------------------------------------------------------- */

const tabsCardsImg = document.querySelectorAll(".tabs__cards > img");
const tabsBtn = document.querySelectorAll(".tabs__btn");
const textRed = document.querySelectorAll(".text-red");

/* ----  Immagini Randomiche per ogni cards ----*/
async function getImg(element) {
  const imgResponse = await fetch("https://api.thecatapi.com/v1/images/search");
  const imgPexel = await imgResponse.json();
  element.src = imgPexel[0].url;
}

tabsCardsImg.forEach((element) => {
  getImg(element);
});

/* ---- Click On tabs button ---*/
tabsBtn.forEach((button) => {
  button.addEventListener("click", () => {
    tabsCardsImg.forEach((element) => {
      getImg(element);
      textRed.forEach((title) => {
        title.innerText = button.innerText;
      });
    });
  });
});
