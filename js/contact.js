//variable
var dropDown = document.getElementById("choices");
var dropDownContainer = document.getElementById("chooseContact");
var phone = document.getElementById("phoneContact");
var email = document.getElementById("emailContact");


dropDown.addEventListener("select", function () {
  if (document.querySelector("div.chooseContact") === "Phone") {
    phone.disabled = "false";
    email.disabled = "true";
  } else if (which === "Email") {
    email.style.display = "block";
    phone.style.display = "none";
  } else {
    email.style.display = "none";
    phone.style.display = "none";
  }
});
