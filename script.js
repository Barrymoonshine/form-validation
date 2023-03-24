const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const countryInput = document.getElementById("country");
const passwordInput = document.getElementById("password");
const confPasswordInput = document.getElementById("confirm-password");
const formFields = document.getElementsByClassName("form-fields");

const formController = (() => {
  const validateEmail = () => {
    console.log(emailInput.value);
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailInput.value.match(emailRegex)) {
      console.log("valid email address ");
    } else {
      console.log("invalid email address ");
    }
  };

  const validatePassword = () => {
    console.log(passwordInput.value);
    // Please enter a password that is between 8 and 20 characters long and contains at least one number
    // one capital letter and one special symbol(!@#$%^&*=+-_)
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$/;
    if (passwordInput.value.match(passwordRegex)) {
      console.log("valid password ");
    } else {
      console.log("invalid password ");
    }
  };
  return { validateEmail, validatePassword };
})();

const displayController = (() => {
  emailInput.addEventListener("blur", () => {
    formController.validateEmail();
  });
  passwordInput.addEventListener("blur", () => {
    formController.validatePassword();
  });
})();
