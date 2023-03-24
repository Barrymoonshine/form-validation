const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const countryInput = document.getElementById("country");
const passwordInput = document.getElementById("password");
const confPasswordInput = document.getElementById("confirm-password");
const formFields = document.getElementsByClassName("form-fields");

const formController = (() => {
  const validateEmail = () => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailInput.value.match(emailRegex)) {
      console.log("valid email address ");
      return true;
    }
    console.log("invalid email address ");
    return false;
  };

  const validatePassword = () => {
    // Please enter a password that is between 8 and 20 characters long and contains at least one number
    // one capital letter and one special symbol(!@#$%^&*=+-_)
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$/;
    if (passwordInput.value.match(passwordRegex)) {
      console.log("valid password ");
      return true;
    }
    console.log("invalid password ");
    return false;
  };

  const checkPasswordsMatch = () => {
    if (confPasswordInput.value === passwordInput.value) {
      console.log("Password match ");
      return true;
    }
    console.log("Passwords don't match");
    return false;
  };

  const clearFields = () => {
    passwordInput.value = "";
    emailInput.value = "";
    confPasswordInput.value = "";
    countryInput.value = "America";
  };

  const checkAllFields = () => {
    if (validateEmail() && validatePassword() && checkPasswordsMatch()) {
      console.log("All fields have been completed correctly, form submitted");
      clearFields();
    } else {
      console.log("Some fields have not been completed correctly ");
    }
  };
  return {
    validateEmail,
    validatePassword,
    checkPasswordsMatch,
    checkAllFields,
  };
})();

const displayController = (() => {
  emailInput.addEventListener("blur", () => {
    formController.validateEmail();
  });
  passwordInput.addEventListener("blur", () => {
    formController.validatePassword();
  });
  confPasswordInput.addEventListener("blur", () => {
    formController.checkPasswordsMatch();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formController.checkAllFields();
  });
})();
