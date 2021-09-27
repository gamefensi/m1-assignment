//variable
var dropDown = document.getElementById("choices");
var dropDownContainer = document.getElementById("chooseContact");
var phone = document.getElementById("phoneContact");
var email = document.getElementById("emailContact");

dropDown.addEventListener("change", function () {
  var dropDownChoice = document.getElementById("choices").value;
  if (dropDownChoice === "3") {
    phone.style.display = "block";
    email.style.display = "none";
  } else if (dropDownChoice === "2") {
    email.style.display = "block";
    phone.style.display = "none";
  } else {
    email.style.display = "none";
    phone.style.display = "none";
  }
});





//alt to use with onchange
// onchange="displayField(this)"

// function displayField (x) { 
//   if (x.value === "3") {
//     phone.style.display = "block";
//     email.style.display = "none";
//   } else if (x.value === "2") {
//     email.style.display = "block";
//     phone.style.display = "none";
//   } else {
//     email.style.display = "none";
//     phone.style.display = "none";
//   }
// };
