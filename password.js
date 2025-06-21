const storedHash = "e3b6c3f2f3c3b0c6a8f3a4b7c1e9f3a0c4d2e1f3a8b7c6d4e2f1a0b3c2d1e0f0";

function checkPassword() {
  const input = document.getElementById("password").value;
  const inputHash = CryptoJS.SHA256(input).toString();

  if (inputHash === storedHash) {
    document.getElementById("login").style.display = "none";
    document.getElementById("protected-content").style.display = "block";
  } else {
    alert("Incorrect password.");
  }
}
