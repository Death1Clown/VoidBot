const storedHash = "3456756yg45u67az5k7sm56bue56uie567k8fc6b78t6nkog67inrf67ib7urf67m";

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
