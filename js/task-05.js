const inputEl = document.querySelector("#name-input");
let outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (name) => {
  if (inputEl.value === "") {
    outputEl.textContent = "Anonymous";
  } else {
    outputEl.textContent = name.target.value;
  }
});
