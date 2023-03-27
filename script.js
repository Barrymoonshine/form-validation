const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const countryInput = document.getElementById("country");
const passwordInput = document.getElementById("password");
const confPasswordInput = document.getElementById("confirm-password");
const zipCode = document.getElementById("zip-code");

form.noValidate = true;

const formController = (() => {
  const addClassName = (e) => {
    e.target.className = "field-clicked";
  };

  const styleElement = (validity, target) => {
    if (validity === true) {
      target.classList.remove("invalid");
      target.classList.add("valid");
    } else if (validity === false) {
      target.classList.remove("invalid");
      target.classList.add("valid");
    }
  };

  const validateEmail = (e) => {
    const target = document.getElementById(e.target.id);
    const emailValidity = emailInput.validity;
    if (emailValidity.valid) {
      return true;
    }
    if (!emailValidity.valid) {
      return false;
    }
    styleElement(emailValidity.valid, target);
  };

  const validateZipCode = () => {};

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
    const field = Array.from(form.elements);
    field.forEach((item) => (item.value = ""));
  };

  const checkAllFields = (e) => {
    if (validateEmail() && validatePassword() && checkPasswordsMatch()) {
      console.log("All fields have been completed correctly, form submitted");
      clearFields();
    } else {
      e.stopImmediatePropagation();
      console.log("Some fields have not been completed correctly ");
    }
  };
  return {
    addClassName,
    validateEmail,
    validatePassword,
    checkPasswordsMatch,
    checkAllFields,
  };
})();

const displayController = (() => {
  emailInput.addEventListener("blur", (e) => {
    formController.addClassName(e);
    formController.validateEmail(e);
  });
  zipCode.addEventListener("blur", (e) => {
    formController.addClassName(e);
    formController.validateZipCode();
  });
  passwordInput.addEventListener("blur", (e) => {
    formController.addClassName(e);
    formController.validatePassword();
  });
  confPasswordInput.addEventListener("blur", (e) => {
    formController.addClassName(e);
    formController.checkPasswordsMatch();
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formController.checkAllFields();
  });
})();
