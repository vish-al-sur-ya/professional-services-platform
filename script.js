// Mock data
let professionals = [
  { id: 1, name: "John Doe", service: "Plumbing", location: "New York", rating: 4.5 },
  { id: 2, name: "Jane Smith", service: "Electrician", location: "Los Angeles", rating: 4.8 },
  { id: 3, name: "Mike Johnson", service: "Carpenter", location: "Chicago", rating: 4.2 }
];

let services = [
  { id: 1, name: "Plumbing", description: "Fix leaks and pipes" },
  { id: 2, name: "Electrician", description: "Wiring and repairs" },
  { id: 3, name: "Carpenter", description: "Woodwork and furniture" }
];

let users = JSON.parse(localStorage.getItem('users')) || [];

// Sign In
document.getElementById("signinForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value;
  const password = this.querySelector('input[type="password"]').value;
  
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    alert("Signed in successfully!");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials!");
  }
});

// Sign Up
document.getElementById("signupForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = this.querySelector('input[placeholder="Full Name"]').value;
  const email = this.querySelector('input[placeholder="Email"]').value;
  const password = this.querySelector('input[placeholder="Password"]').value;
  const confirmPassword = this.querySelector('input[placeholder="Confirm Password"]').value;
  const role = this.querySelector('#role').value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }
  if (!role) {
    alert("Please select a role!");
    return;
  }

  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    alert("Email already registered!");
    return;
  }

  const newUser = { name, email, password, role };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('currentUser', JSON.stringify(newUser));
  alert("Account created successfully!");
  window.location.href = "dashboard.html";
});

// Logout
document.getElementById("logoutBtn")?.addEventListener("click", function() {
  localStorage.removeItem('currentUser');
  alert("Logged out successfully!");
  window.location.href = "index.html";
});

// Show/hide logout based on login status
function checkLoginStatus() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.style.display = currentUser ? 'block' : 'none';
  }
  if (currentUser) {
    // Hide nav links if needed based on role, but for now show all
  }
}

checkLoginStatus();
