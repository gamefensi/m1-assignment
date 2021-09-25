var numOfPhotos = 10;
var photos = []; //Declare an empty array to store image element
var fileNames = []; //Declare an empty array to store image filenames
var imageList = []; //Declare an empty array to store html list that contains an image
var image; //Declare an empty variable to store assembled image list codes
var openList = "<li id='photo'>"; //Declare a variable to contain an open list tag
var closeList = "</li>"; //Declare a variable to contain a close list tag
var openCaptionTag = "<figcaption>";
var closeCaptionTag = "</figcaption>";
var openDescTag = "<div class='desc'>";
var closeDescTag = "</div>"

// Pet 1 info
var petHdr1 = "Stacy"
var petCap1 = "Stacy<p>Sex: N <br>Age: 12 Years</p>";
var petDesc1 = "Stacy is a 12 year old Chocolate White Dachshund Mix.";
var petInfo1 = "Stacy's info";

// Pet 2 info
var petHdr2 = "Josh"
var petCap2 = "Josh <p>Sex: N<br>Age: 6 Years</p>";
var petDesc2 = "Josh is a 6 year old Fawn White Boxer Mix.";
var petInfo2 = "Josh's info";
// Pet 3 info
var petHdr3 = "Josh"
var petCap3 = "Jake  <p>Sex: N<br>Age: 11 Years</p>";
var petDesc3 = "Jake is an 11 year old Black White Siberian Husky";
var petInfo3 = "Jake's info";
// Pet 4 info
var petHdr4 = "Josh"
var petCap4 = "Kevin  <p>Sex: N<br>Age: 6 Years</p>";
var petDesc4 = "Kevin is a 6 year old White Siberian Husky";
var petInfo4 = "Kevin's info";
// Pet 5 info
var petHdr5 = "Josh"
var petCap5 = "Trunks <p>Sex: M<br>Age: 6 Years</p>";
var petDesc5 = "Trunks is a 6 year old Black White Poodle Min Havanese";
var petInfo5 = "Trunks's info";
// Pet 6 info
var petHdr6 = "Josh"
var petCap6 = "Chris <p>Sex: M<br>Age: 8 Years</p>";
var petDesc6 = "Chris is a 8 year old Fawn Black German Shepherd Mix";
var petInfo6 = "Chris's info"
// Pet 7 info
var petHdr7 = "Josh"
var petCap7 = "Jesse  <p>Sex: M<br>Age: 4 Years</p>";
var petDesc7 ="Jesse is a 4 year old Black Brown Germ Shepherd Siberian Husky";
var petInfo7 = "Jesse's info";
// Pet 8 info
var petHdr8 = "Sully"
var petCap8 = "Sully  <p>Sex: N<br>Age: 3 Years</p>";
var petDesc8 = "Sully is a 3 year old Black White Siberian Husky";
var petInfo8 = "Sully's info";
// Pet 9 info
var petHdr9 = "Jill"
var petCap9 = "Jill  <p>Sex: F<br>Age: 4 Years</p>";
var petDesc9 = "Jill is a 4 year old Red White Black Mouth Cur Mix";
var petInfo9 = "Jill's info";
// Pet 10 info
var petHdr10 = "Christina"
var petCap10 = "Christina<p>Sex: N<br>Age: 7 Years</p>";
var petDesc10 = "Christina is a 7 year old Black Shetid Sheepdog Mix";
var petInfo10 = "Christina's info";

var boxOpen = "<"
var captionTexts = [
  petCap1,
  petCap2,
  petCap3,
  petCap4,
  petCap5,
  petCap6,
  petCap7,
  petCap8,
  petCap9,
  petCap10,
];
var descTexts = [
  petDesc1,
  petDesc2,
  petDesc3,
  petDesc4,
  petDesc5,
  petDesc6,
  petDesc7,
  petDesc8,
  petDesc9,
  petDesc10,
];

var getInfoBox = document.getElementById("infoBox"); 
var getBoxHeader = document.getElementById("boxHeader");
var getBoxTxt = document.getElementById("boxTxt");
var getBoxcloseBox = document.getElementById("closeBox");
var openInfoTag = "<div id='InfoBox' onclick='displayInfo("
var closeInfoTag = ")'></div>"

var boxTxtList = [
  petInfo1,
  petInfo2,
  petInfo3,
  petInfo4,
  petInfo5,
  petInfo6,
  petInfo7,
  petInfo8,
  petInfo9,
  petInfo10
]; 

//Create a loop to create 6 images starting with index of 0
for (var i = 0; i < numOfPhotos; i++) {
  fileNames.push("petphoto" + (i + 1)); //create image file name & store in array
  photos.push("<img src='images/" + fileNames[i] + ".jpg'>"); //Assemble file name into an image element and store in an array
  image =
    openList +
    photos[i] +
    openDescTag +
    descTexts[i] +
    closeDescTag +
    openInfoTag +
    i +
    closeInfoTag +
    openCaptionTag +
    captionTexts[i] +
    closeCaptionTag +
    closeList; //Assemble everything
  imageList.push(image); //Store the fully assembled code of each image list
}

//Display all six image codes stored in the array
document.getElementById("album").innerHTML = imageList.join("");

//info box code
var getDivDesc = document.querySelector(".desc");

//event listener
getBoxcloseBox.addEventListener("click",closeBox);

//display text box
function displayInfo(i) {
  getInfoBox.innerHTML = "";
}
//close text box
function closeBox() {
  getInfoBox.style.visibility = "hidden";
}
