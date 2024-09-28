var passwordInput = document.getElementById("passme");
var passwordIcon = document.getElementById("icone");
var confirmPassword = document.getElementById("passwe");
var iconPassword = document.getElementById("iconf");
function confirm(input, icon) {
  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
}
