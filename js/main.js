var loginSection = document.getElementById("loginSection");
var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
var loginAlert = document.getElementById("loginAlert");
var btnLogin = document.getElementById("btnLogin");
var aSignup = document.getElementById("aSignup");
var signupSection = document.getElementById("signupSection");
var inputName = document.getElementById("inputName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var btnSignup = document.getElementById("btnSignup");
var aLogin = document.getElementById("aLogin");
var signupAlert = document.getElementById("signupAlert");
var users = [];

document.getElementById("aSignup").addEventListener("click", function(e) {
  e.preventDefault();
  loginSection.classList.add("d-none");
  signupSection.classList.remove("d-none");
});

document.getElementById("aLogin").addEventListener("click", function(e) {
  e.preventDefault();
  signupSection.classList.add("d-none");
  loginSection.classList.remove("d-none");
});

function showAlert(alertElement, message) {
  alertElement.textContent = message;
  alertElement.classList.remove("d-none");
}

function hideAlert(alertElement) {
  alertElement.classList.add("d-none");
  alertElement.textContent = "";
}

btnSignup.addEventListener("click", function () {
  var name = document.getElementById("inputName").value;
  var email = document.getElementById("signupEmail").value;
  var password = document.getElementById("signupPassword").value;

  if (!name || !email || !password) {
    showAlert(signupAlert, "Please fill in all fields.");
  } else {
    hideAlert(signupAlert);
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    showAlert(signupAlertdone, "Signed Up successfully, Please login.");
    clear();
  }
});

btnLogin.addEventListener("click", function () {
  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    showAlert(loginAlert, "Please fill in all fields.");
  } else {
    hideAlert(loginAlert);
    var users = JSON.parse(localStorage.getItem("users"));
    var user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      loginSection.classList.add("d-none");
      welcomeSection.classList.remove("d-none");

      welcomeMessage.textContent = `Welcome, ${user.name}`;
    } else {
      showAlert(loginAlert, "Invalid email or password.");
    }
  }
});

function clear() {
  document.getElementById("inputName").value = null;
  document.getElementById("signupEmail").value = null;
  document.getElementById("signupPassword").value = null;
}
