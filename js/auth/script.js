const emailLogin = document.getElementById("email-login");
const passwordLogin = document.getElementById("password-login");

const isName = localStorage.getItem("register_name");
const isEmail = localStorage.getItem("register_email");
const isPassword = localStorage.getItem("register_password");
const isEmailFromLogin = localStorage.getItem("login_email");
const isPasswordFromLogin = localStorage.getItem("login_password");

if (
  (isName, isEmail, isPassword, isEmailFromLogin, isPasswordFromLogin != null)
) {
  window.location = "index.html";
}

emailLogin.value = localStorage.getItem("register_email");
passwordLogin.value = localStorage.getItem("register_password");

function onSubmitLogin() {
  const validEmail = localStorage.getItem("register_email");
  const validPassword = localStorage.getItem("register_password");

  if ((emailLogin.value, passwordLogin.value === "")) {
    alert("Data tidak jelas ❌");
    return false;
  }

  if (emailLogin.value != validEmail || passwordLogin.value != validPassword) {
    alert("Anda tidak terdaftar, maka lah buat akun!");
    return false;
  } else {
    localStorage.setItem("login_email", emailLogin.value);
    localStorage.setItem("login_password", passwordLogin.value);
    alert("Login successfully ✅");
    window.location = "index.html";
  }
}

document
  .getElementById("submit-login")
  ?.addEventListener("click", onSubmitLogin);

// Register

const nameRegister = document.getElementById("name-register");
const emailRegister = document.getElementById("email-register");
const passwordRegister = document.getElementById("password-register");

function onSubmitRegister() {
  const validName = localStorage.getItem("register_name");
  const validEmail = localStorage.getItem("register_email");
  const validPassword = localStorage.getItem("register_password");

  if (
    nameRegister.value === validName ||
    emailRegister.value === validEmail ||
    passwordRegister.value === validPassword
  ) {
    alert("Akun Anda sudah terdaftar.");
    return false;
  }

  if (
    (nameRegister.value, emailRegister.value, passwordRegister.value === "")
  ) {
    alert("Data tidak jelas ❌");
    localStorage.removeItem("register_name");
    localStorage.removeItem("register_email");
    localStorage.removeItem("register_password");
    return false;
  } else {
    localStorage.setItem("register_name", nameRegister.value);
    localStorage.setItem("register_email", emailRegister.value);
    localStorage.setItem("register_password", passwordRegister.value);
    alert("Register successfully ✅");
    window.location = "index.html";
  }
}

document
  .getElementById("submit-register")
  ?.addEventListener("click", onSubmitRegister);
