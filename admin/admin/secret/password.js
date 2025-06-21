const hash = "f3d5a1..."; // Precomputed hash of your password

function checkPassword() {
  const input = document.getElementById("password").value;
  const inputHash = CryptoJS.SHA256(input).toString();
  if (inputHash === hash) {
    // Show content
  } else {
    alert("Incorrect password.");
  }
}
