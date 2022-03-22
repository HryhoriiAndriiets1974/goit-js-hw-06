const inputEl = document.querySelector("#validation-input");
const length = parseInt(inputEl.dataset.length);

inputEl.addEventListener("blur", (n) => {
  const inputText = n.target.value;
  console.log(inputText.length);
  if (inputText.length > length ||
    (inputText.length < length && inputText.length > 0)) {
    inputEl.classList.add("invalid");
  } else if (inputText.length === length) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.remove("invalid");
  }
});
