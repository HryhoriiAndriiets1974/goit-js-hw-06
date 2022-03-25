// --------------- 1
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
// -------------- 2--
// const inputEl = document.querySelector("#validation-input");

// function inputFunction (e) {
//    e.target.value.length === length(inputEl.dataset.length)?
//    inputEl.classList.add("valid") : inputEl.classList.add("invalid");
//     if (!inputEl.value) inputEl.removeAttribute("class");
// };

// inputEl.addEventListener("blur", inputFunction);
