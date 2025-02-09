document.getElementById("myForm").addEventListener("submit", function (event) {
  let isValid = true;
  clearErrors();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;
  let gender = document.getElementById("gender").value;
  let address = document.getElementById("address").value;

  if (name.trim() === "") {
    isValid = false;
    displayError("name", "Name is required");
  }

  if (email.trim() === "" || !validateEmail(email)) {
    isValid = false;
    displayError("email", "Valid email is required");
  }

  if (age !== "" && (age < 0 || age > 150)) {
    isValid = false;
    displayError("age", "Age must be between 0 and 150");
  }

  if (gender.trim() === "") {
    isValid = false;
    displayError("gender", "Gender is required");
  }

  if (address.trim() === "") {
    isValid = false;
    displayError("address", "Address is required");
  }

  if (!isValid) {
    event.preventDefault();
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function displayError(fieldId, message) {
  let field = document.getElementById(fieldId);
  let errorDiv = document.createElement("div");
  errorDiv.className = "error";
  errorDiv.innerText = message;
  field.parentNode.insertBefore(errorDiv, field.nextSibling);
}

function clearErrors() {
  let errors = document.querySelectorAll(".error");
  errors.forEach((error) => error.remove());
}
