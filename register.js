const loginForm = document.getElementById("login-form");
const authSection = document.getElementById("auth-section");
const welcomeSection = document.getElementById("welcome-section");
const userNameSpan = document.getElementById("user-name");
const logoutBtn = document.getElementById("logout-btn");

// Check login state on page load
window.onload = () => {
  const user = localStorage.getItem("user");
  if (user) {
    showWelcome(user);
  }
};

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  // You can add real validation here
  localStorage.setItem("user", username);
  showWelcome(username);
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("user");
  authSection.style.display = "block";
  welcomeSection.style.display = "none";
});

function showWelcome(username) {
  userNameSpan.textContent = username;
  authSection.style.display = "none";
  welcomeSection.style.display = "block";
}
