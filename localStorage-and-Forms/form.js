const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirmPassword");
const passwordError = document.querySelector("#passwordError");
const form = document.querySelector("#signupForm");

// Validate email AS the user types (input event)
emailInput.addEventListener("input", () => {
  const email = emailInput.value;
  const isValidEmail = email.includes("@") && email.includes(".");

  if (email === "") {
    emailError.textContent = "";
  } else if (!isValidEmail) {
    emailError.textContent = "Please enter a valid email address.";
    emailError.style.color = "red";
  } else {
    emailError.textContent = "Looks good!";
    emailError.style.color = "green";
  }
});

// Validate password match AS the user types
confirmInput.addEventListener("input", () => {
  if (confirmInput.value === "") {
    passwordError.textContent = "";
  } else if (passwordInput.value !== confirmInput.value) {
    passwordError.textContent = "Passwords do not match.";
    passwordError.style.color = "red";
  } else {
    passwordError.textContent = "Passwords match!";
    passwordError.style.color = "green";
  }
});

// FINAL validation on submit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const isValidEmail = email.includes("@") && email.includes(".");
  const passwordsMatch = passwordInput.value === confirmInput.value;

  if (!isValidEmail) {
    alert("Please enter a valid email.");
    return;
  }

  if (!passwordsMatch) {
    alert("Passwords do not match.");
    return;
  }

  alert("Form submitted successfully!");
});