// Sign In
document.getElementById("signinForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Signed in successfully!");
});

// Sign Up
document.getElementById("signupForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const inputs = this.querySelectorAll("input");
  const password = inputs[2].value;
  const confirmPassword = inputs[3].value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
  } else {
    alert("Account created successfully!");
    window.location.href = "index.html"; // redirect to Sign In
  }
});
