const formController = (() => {
  const addClassName = (e) => {
    e.target.className = "field-selected";
  };

  const validateEmail = () => {
    const isEmailValid = document.getElementById("email").validity.valid;
    if (isEmailValid) {
      return true;
    }
    if (!isEmailValid) {
      return false;
    }
  };

  const addZipCodeRegex = () => {
    const country = document.getElementById("country").value;
    const zipCode = document.getElementById("zip-code");
    if (country === "US") {
      zipCode.pattern = "^d{5}(?:[-s]d{4})?$";
    }
    if (country === "UK") {
      zipCode.pattern = "^[A-Z]{1,2}[0-9R][0-9A-Z]? [0-9][A-Z]{2}$";
    }
    if (country === "FR") {
      zipCode.pattern =
        "^(?:(?:(?:0[1-9]|[1-8]d|9[0-4])(?:d{3})?)|97[1-8]|98[4-9]|‌​‌​2[abAB])$";
    }
  };

  const validateZipCode = () => {
    const isZipCodeValid = document.getElementById("zip-code").validity.valid;
    if (isZipCodeValid) {
      return true;
    }
    if (!isZipCodeValid) {
      return false;
    }
  };

  const validatePassword = () => {
    const isPasswordValid = document.getElementById("password").validity.valid;
    if (isPasswordValid) {
      return true;
    }
    if (!isPasswordValid) {
      return false;
    }
  };

  const checkPasswordsMatch = () => {
    const passwordValue = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password");
    const confirmPasswordValue = confirmPassword.value;
    if (passwordValue === confirmPasswordValue) {
      confirmPassword.setCustomValidity("");
      return true;
    }
    if (passwordValue !== confirmPasswordValue) {
      confirmPassword.setCustomValidity("Passwords do not match");
      return false;
    }
  };

  const clearFields = () => {
    const field = Array.from(form.elements);
    field.forEach((item) => {
      item.value = "";
      item.className = "field submitted";
    });
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
    addZipCodeRegex,
    validateZipCode,
    checkPasswordsMatch,
    checkAllFields,
  };
})();

const displayController = (() => {
  const form = document.getElementById("form");

  form.addEventListener("keyup", (e) => {
    if (e.target.id === "email") {
      formController.validateEmail();
      formController.addClassName(e);
    } else if (e.target.id === "zip-code") {
      formController.validateZipCode();
      formController.addClassName(e);
    } else if (e.target.id === "password") {
      formController.validatePassword();
      formController.addClassName(e);
    } else if (e.target.id === "confirm-password") {
      formController.checkPasswordsMatch();
      formController.addClassName(e);
    } else {
      // Do nothing as a form input element hasn't been selected
    }
  });

  form.addEventListener("click", (e) => {
    if (e.target.id === "country") {
      formController.addZipCodeRegex();
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formController.checkAllFields(e);
  });
})();
