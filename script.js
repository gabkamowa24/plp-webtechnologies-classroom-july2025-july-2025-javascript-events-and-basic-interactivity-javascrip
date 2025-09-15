// ===================
// Dark Mode Toggle
// ===================
const toggleModeBtn = document.getElementById("toggleMode");
toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ===================
// Counter Game
// ===================
let count = 0;
const counterDisplay = document.getElementById("counter");
document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

// ===================
// FAQ Accordion
// ===================
document.querySelectorAll(".faq-question").forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// ===================
// Tabs
// ===================
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    const tabId = button.getAttribute("data-tab");

    tabContents.forEach(content => {
      content.classList.remove("active");
    });
    document.getElementById(`tab-${tabId}`).classList.add("active");
  });
});

// ===================
// Custom Form Validation
// ===================
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
  return password.length >= 6;
}

// Registration Form Validation
document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value.trim();

  // Name validation
  if (name === "") {
    document.getElementById("regNameError").textContent = "Name required";
    isValid = false;
  } else {
    document.getElementById("regNameError").textContent = "";
  }

  // Email validation
  if (!validateEmail(email)) {
    document.getElementById("regEmailError").textContent = "Invalid email";
    isValid = false;
  } else {
    document.getElementById("regEmailError").textContent = "";
  }

  // Password validation
  if (!validatePassword(password)) {
    document.getElementById("regPasswordError").textContent = "Password must be ≥6 chars";
    isValid = false;
  } else {
    document.getElementById("regPasswordError").textContent = "";
  }

  if (isValid) {
    alert("Registration successful!");
  }
});

// Login Form Validation
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!validateEmail(email)) {
    document.getElementById("loginEmailError").textContent = "Invalid email";
    isValid = false;
  } else {
    document.getElementById("loginEmailError").textContent = "";
  }

  if (!validatePassword(password)) {
    document.getElementById("loginPasswordError").textContent = "Password must be ≥6 chars";
    isValid = false;
  } else {
    document.getElementById("loginPasswordError").textContent = "";
  }

  if (isValid) {
    alert("Login successful!");
  }
});
