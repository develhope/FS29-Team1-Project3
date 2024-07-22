/*------------- DICHIARAZIONI VARIABILI -----------------*/
// html
const html = document.querySelector("html");
// Header
// Navbar 1
const navSingleButton = document.querySelectorAll(".nav__single__button");
const nav1Container = document.querySelectorAll(".nav1__container");
const nav1XButton = document.querySelectorAll(".nav1__x__button");

// Aside
const overlay = document.querySelector(".overlay");
const buttonMenuKebab = document.querySelector(".button__menù-kebab");
const asideContainer = document.querySelector(".aside__container");
const asideButtonX = document.querySelector(".aside__button-x");

// Aside menu Media Query
const buttonMenùHamburger = document.querySelector(".button__menù-hamburger");
const asideMQ = document.querySelector(".aside__MQ");
const asideInsideButtonGiochi = document.querySelectorAll(
  ".aside__inside-button-giochi"
);
const asideInsideButtonItems = document.querySelectorAll(
  ".aside__inside-button-items"
);
const asideButtonGiochi = document.querySelector(".aside__button-giochi");
const asideMqX = document.querySelector(".aside__MQ__X ");

// Footer

const buttonEconomy = document.querySelectorAll(".button_economy");
const ulRegione = document.querySelector(".ul_regione");
const ulRegioni = document.querySelector(".ul_lingua");
const arrayLiRegione = ulRegione.children;

/*--------------------- CODICE ---------------------------*/

// Header
// Nav2 sticky

window.onscroll = function () {
  if (window.pageYOffset >= sticky) {
    nav2[0].classList.add("sticky");
    nav1[0].classList.add("hidden");
  } else {
    nav2[0].classList.remove("sticky");
    nav1[0].classList.remove("hidden");
  }
};

// Dichiarazione variabili per Navbar 2 sticky
const nav1 = document.getElementsByClassName("nav1");
const nav2 = document.getElementsByClassName("nav2");
const sticky = nav2[0].offsetTop;

// Kebab menu
buttonMenuKebab.addEventListener("click", () => {
  asideContainer.classList.add("df");
  html.style.overflow = "hidden";
  // overlay.style.display = "block";
});
asideButtonX.addEventListener("click", () => {
  asideContainer.classList.remove("df");
  html.style.overflow = "scroll";
  // overlay.style.display = "none";
});

//Hamburger menù
buttonMenùHamburger.addEventListener("click", () => {
  asideMQ.classList.add("df");
  html.style.overflow = "hidden";
});
asideMqX.addEventListener("click", () => {
  asideMQ.classList.remove("df");
  html.style.overflow = "scroll";
});

// Aside menu Media Query
asideButtonGiochi.addEventListener("click", () => {
  asideInsideButtonGiochi.forEach((element) => {
    element.classList.toggle("df");
    element.addEventListener("click", () => {
      const ul = element.children[1];

      if (ul.style.display === "none") {
        ul.style.display = "flex";
      } else {
        ul.style.display = "none";
      }
    });
  });
});

asideInsideButtonItems.forEach((element) => {
  element.addEventListener("click", () => {
    const ul = element.children[1];

    if (ul.style.display === "none") {
      ul.style.display = "flex";
      // html.style.overflow = "hidden";
    } else {
      ul.style.display = "none";
      // html.style.overflow = "scroll";
    }
  });
});

// Bottoni Navbar 1
for (let i = 0; i < navSingleButton.length; i++) {
  if (i === 0) {
    navSingleButton[i].addEventListener("click", () => {
      nav1Container[i].classList.toggle("df");
      nav1Container[1].classList.remove("df");
      if (nav1Container[i].classList.contains("df")) {
        html.style.overflow = "hidden";
      } else {
        html.style.overflow = "scroll";
      }
    });
  } else if (i === 1) {
    navSingleButton[i].addEventListener("click", () => {
      nav1Container[i].classList.toggle("df");
      nav1Container[0].classList.remove("df");
      if (nav1Container[i].classList.contains("df")) {
        html.style.overflow = "hidden";
      } else {
        html.style.overflow = "scroll";
      }
    });
  }
}
nav1XButton.forEach((elem) => {
  elem.addEventListener("click", () => {
    nav1Container[0].classList.remove("df");
    nav1Container[1].classList.remove("df");
    html.style.overflow = "scroll";
  });
});

/*  -----------------------------------------------------------------------------------------------
  Main
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

// Footer

buttonEconomy[0].addEventListener("click", () => {
  if (ulRegione.style.display === "none") {
    ulRegione.style.display = "flex";
    ulRegioni.style.display = "none";
  } else {
    ulRegione.style.display = "none";
  }
});
buttonEconomy[1].addEventListener("click", () => {
  if (ulRegioni.style.display === "none") {
    ulRegioni.style.display = "flex";
    ulRegione.style.display = "none";
  } else {
    ulRegioni.style.display = "none";
  }
});

// Chiudere al click fuori da UlRegione

// Icona Spunta
localStorage.setItem(
  "check-dropbox",
  '<img src="./assets/icons/footer/Icona conferma ul.svg" alt="" class="check">'
);
for (let i = 0; i < arrayLiRegione.length; i++) {
  arrayLiRegione[i].addEventListener("click", () => {
    arrayLiRegione[i].innerHTML += localStorage.getItem("check-dropbox");
  });
}
/*
overlay 100vh
scroll su aside
*/
