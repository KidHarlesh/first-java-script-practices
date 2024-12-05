// var passwordInput = document.getElementById("passme");
// var passwordIcon = document.getElementById("icone");
// var confirmPassword = document.getElementById("passwe");
// var iconPassword = document.getElementById("iconf");
// function confirm(input, icon) {
//   if (input.type === "password") {
//     input.type = "text";
//     icon.classList.remove("fa-eye-slash");
//     icon.classList.add("fa-eye");
//   } else {
//     input.type = "password";
//     icon.classList.remove("fa-eye");
//     icon.classList.add("fa-eye-slash");
//   }
// }

function confirm() {
  var passwordInput = document.getElementById("passme");
  var passwordIcon = document.getElementById("icone");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordIcon.classList.remove("fa-eye-slash");
    passwordIcon.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    passwordIcon.classList.remove("fa-eye");
    passwordIcon.classList.add("fa-eye-slash");
    
  }
}
function passme() {
 var confirmPassword = document.getElementById("passwe");
 var iconPassword = document.getElementById("iconf");
 if (confirmPassword.type=== "password"){
  confirmPassword.type = "text";
    iconPassword.classList.remove("fa-eye-slash");
    iconPassword.classList.add("fa-eye");
 }else{
  confirmPassword.type = "password";
  iconPassword.classList.remove("fa-eye");
  iconPassword.classList.add("fa-eye-slash");
 }
}
