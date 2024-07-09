const buttonEconomy = document.querySelectorAll(".button_economy");
const ulRegione = document.querySelector(".ul_regione");
const ul_regioni = document.querySelector(".ul_regioni");
console.log(buttonEconomy);
console.log(ulRegione);


buttonEconomy[0].addEventListener('click', () => {
     ulRegione.classList.toggle("ul_show");
      ul_regioni.classList.remove("ul_show");
})
buttonEconomy[1].addEventListener("click", () => {
  ul_regioni.classList.toggle("ul_show");
  ulRegione.classList.remove("ul_show");
});
