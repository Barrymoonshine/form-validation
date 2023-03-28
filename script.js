const emailInput = document.getElementById("email");
const countryInput = document.getElementById("country");
const passwordInput = document.getElementById("password");
const confPasswordInput = document.getElementById("confirm-password");
const zipCode = document.getElementById("zip-code");

const formController = (() => {
  const addClassName = (e) => {
    e.target.className = "field-clicked";
  };

  const styleElement = (validity, targetElement) => {
    if (validity === true) {
      targetElement.classList.remove("invalid");
      targetElement.classList.add("valid");
    } else if (validity === false) {
      targetElement.classList.remove("valid");
      targetElement.classList.add("invalid");
    }
  };

  const validateEmail = () => {
    const isEmailValid = emailInput.validity;
    if (isEmailValid) {
      return true;
    }
    if (!isEmailValid) {
      return false;
    }
  };

  const validateZipCode = () => {
    const ukPostCodeRegex = /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/;
    const usZipCodeRegex = /^\d{5}(?:[-\s]\d{4})?$/;
    const frenchZipCodeRegex =
      /^(?:(?:(?:0[1-9]|[1-8]\d|9[0-4])(?:\d{3})?)|97[1-8]|98[4-9]|‌​‌​2[abAB])$/;
    const country = countryInput.value;
    const zipCodeValue = zipCode.value;
    let isZipCodeValue = false;
    if (country === "America" && zipCodeValue.matches(usZipCodeRegex)) {
      isZipCodeValue = true;
      return true;
    }
    if (country === "United Kingdom" && zipCodeValue.matches(ukPostCodeRegex)) {
      isZipCodeValue = true;
      return true;
    }
    if (country === "France" && zipCodeValue.matches(frenchZipCodeRegex)) {
      isZipCodeValue = true;
      return true;
    }
    styleElement(isZipCodeValue, zipCode);
    return false;
  };

  const validatePassword = (targetElement) => {
    const isPasswordValid = targetElement.valid;
    if (isPasswordValid) {
      return true;
    }
    if (!isPasswordValid) {
      return false;
    }
  };

  const checkPasswordsMatch = (targetElement) => {
    const passwordValue = document.getElementById("password").value;
    const confirmPasswordValue = targetElement.value;
    console.log(`passwordValue: ${passwordValue}`);
    console.log(`confirmPasswordValue: ${confirmPasswordValue}`);
    if (passwordValue === confirmPasswordValue) {
      targetElement.setCustomValidity("");
      return true;
    }
    if (passwordValue !== confirmPasswordValue) {
      targetElement.setCustomValidity("Passwords do not match");
      return false;
    }
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
      console.log("Some fields have not been completed correctly!! ");
    }
  };
  return {
    addClassName,
    validateEmail,
    validatePassword,
    validateZipCode,
    checkPasswordsMatch,
    checkAllFields,
  };
})();

const displayController = (() => {
  const form = document.getElementById("form");

  form.addEventListener("keyup", (e) => {
    const target = e.target.id;
    const targetElement = document.getElementById(`${target}`);
    if (target === "email") {
      formController.validateEmail(e);
      formController.addClassName(e);
    } else if (target === "zip-code") {
      formController.validateZipCode();
      formController.addClassName(e);
    } else if (target === "password") {
      formController.validatePassword(targetElement);
      formController.addClassName(e);
    } else if (target === "confirm-password") {
      formController.checkPasswordsMatch(targetElement);
      formController.addClassName(e);
    } else {
      // Do nothing as a form input element hasn't been selected
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formController.checkAllFields();
  });
})();
