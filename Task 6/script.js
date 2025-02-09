document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("survey-form");

  form.addEventListener("submit", function (event) {
    let valid = true;
    let messages = [];

    // Validate name
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
      messages.push("Name is required.");
      valid = false;
    }

    // Validate email
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      messages.push("Invalid email address.");
      valid = false;
    }

    // Validate number (age)
    const number = document.getElementById("number").value;
    if (number < 12 || number > 80 || isNaN(number)) {
      messages.push("Age must be between 12 and 80.");
      valid = false;
    }

    // Validate gender
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
      messages.push("Gender is required.");
      valid = false;
    }

    // Validate how did you find us
    const dropdown = document.getElementById("dropdown").value;
    if (dropdown === "") {
      messages.push("Please select how you found us.");
      valid = false;
    }

    console.log("Validation messages:", messages);

    if (!valid) {
      event.preventDefault();
      alert(messages.join("\n"));
    }
  });
});
