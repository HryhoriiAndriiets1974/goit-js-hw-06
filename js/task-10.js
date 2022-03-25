function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxes = document.getElementById('boxes');
const inputEl = document.querySelector('[type="number"]');
const btn = document.querySelectorAll('button');
btn[0].addEventListener("click", () => {
  createBoxes(inputEl.value);
});
btn[1].addEventListener('click', () => {
  destroyBoxes();
});
function createBoxes(amount) {
  let height = 30;
  let width = 30;
  for (let i= 1; i <= amount; i += 1) {
    height += 10;
    width += 10;
    const div = document.createElement('div');
    boxes.append(div);
    div.setAttribute('style',
    `background-color:${getRandomHexColor()};
    width:${width}px;
    height:${height}px`);
  }
}
function destroyBoxes() {
  const clearBlock = document.getElementById('boxes');
  clearBlock.innerHTML = "";
}
