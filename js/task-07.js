const inputControl = document.getElementById("font-size-control");
const fontSize = document.getElementById("text");
fontSize.style.fontSize = inputControl.value;
inputControl.addEventListener("input", (event) => {
  const currentSize = event.target.value;
  fontSize.style.fontSize = `${currentSize}px`;
});
