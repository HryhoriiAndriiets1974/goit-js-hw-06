const inputForm = document.querySelector(".login-form");
const inputField = inputForm.querySelectorAll("input");
inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;
  if (email === "" || password === "") {
    alert("Заповніть всі поля для введення !!!");
  } else {let fillingForm = {email, password,};
          console.log(fillingForm);}
  inputForm.reset();
});
