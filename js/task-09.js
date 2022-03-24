function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector('body');
const btnEl = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
btnEl.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  bodyEl.setAttribute('style', `background-color:${randomColor}`);
  spanColor.textContent = randomColor;
});
