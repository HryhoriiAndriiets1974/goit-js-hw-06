let counterValue = document.querySelector("#value");
const button = document.querySelectorAll("button");

button[0].addEventListener("click", () => {
  counterValue.textContent -= 1;

});
button[1].addEventListener("click", () => {
  counterValue.textContent =
  parseInt(document.querySelector("#value").textContent) + 1;
});
