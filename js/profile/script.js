const isName = localStorage.getItem("register_name");
const isEmail = localStorage.getItem("register_email");
const isPassword = localStorage.getItem("register_password");
const isEmailFromLogin = localStorage.getItem("login_email");
const isPasswordFromLogin = localStorage.getItem("login_password");

window.onload = function () {
  if ((isEmailFromLogin, isPasswordFromLogin === null)) {
    alert("Login dulu!!");
    window.location = "auth.html";
    return false;
  } else {
    document.getElementById("user_login").innerHTML = `
        <div>
          <h1 class='title'>${isName}</h1>
          <p class='subtitle'>${isEmail}</p>
        </div>
    `;
  }
};

document.getElementById("logout")?.addEventListener("click", function () {
  localStorage.removeItem("login_email");
  localStorage.removeItem("login_password");
  window.location = "auth.html";
});
