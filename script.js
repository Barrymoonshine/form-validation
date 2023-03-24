const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const countryInput = document.getElementById("country");
const passwordInput = document.getElementById("password");
const confPasswordInput = document.getElementById("confirm-password");
const formFields = document.getElementsByClassName("form-fields");

const validateFormFields = () => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailInput.value.match(emailRegex)) {
    console.log("valid email address ");
  } else {
    console.log("invalid email address ");
  }
};

emailInput.addEventListener("blur", () => {
  validateFormFields();
});
