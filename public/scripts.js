const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordtwo = document.getElementById("passwordtwo");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkinput();
});

function checkinput() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordtwoValue = passwordtwo.value.trim();

  if (usernameValue === "") {
    errorValidation(username, "Fill this field");
  } else {
    successValidation(username);
  }

  if (emailValue === "") {
    errorValidation(email, "Fill this field");
  } else {
    successValidation(email);
  }

  if (passwordValue === "") {
    errorValidation(password, "Fill this field");
  } else if (passwordValue.length < 6) {
    errorValidation(password, "Password must be more than 6 digits");
  } else {
    successValidation(password);
  }

  if (passwordtwoValue === "") {
    errorValidation(passwordtwo, "Fill this field");
  } else if (passwordValue !== passwordtwoValue) {
    errorValidation(passwordtwo, "Passwords are not the same");
  } else {
    successValidation(passwordtwo);
  }
}

function errorValidation(input, massage) {
  const formControl = input.parentElement; // Seleciona  o elemento pai
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = massage; // Recebe o parâmetro massage, assim substituindo o "Error massage"
}

function successValidation(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
