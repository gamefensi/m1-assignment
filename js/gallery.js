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
var petCap1 = "Stacy<p>Sex: N <br>Age: 12 Years</p>";
var petDesc1 = "Stacy is a 12 year old Chocolate White Dachshund Mix.";

// Pet 2 info
var petCap2 = "Josh <p>Sex: N<br>Age: 6 Years</p>";
var petDesc2 = "Josh is a 6 year old Fawn White Boxer Mix.";

// Pet 3 info
var petCap3 = "Jake  <p>Sex: N<br>Age: 11 Years</p>";
var petDesc3 = "Jake is an 11 year old Black White Siberian Husky";

// Pet 4 info
var petCap4 = "Kevin  <p>Sex: N<br>Age: 6 Years</p>";
var petDesc4 = "Kevin is a 6 year old White Siberian Husky";

// Pet 5 info
var petCap5 = "Trunks <p>Sex: M<br>Age: 6 Years</p>";
var petDesc5 = "Trunks is a 6 year old Black White Poodle Min Havanese";

// Pet 6 info
var petCap6 = "Chris <p>Sex: M<br>Age: 8 Years</p>";
var petDesc6 = "Chris is a 8 year old Fawn Black German Shepherd Mix";

// Pet 7 info
var petCap7 = "Jesse  <p>Sex: M<br>Age: 4 Years</p>";
var petDesc7 =
  "Jesse is a 4 year old Black Brown Germ Shepherd Siberian Husky";

// Pet 8 info
var petCap8 = "Sully  <p>Sex: N<br>Age: 3 Years</p>";
var petDesc8 = "Sully is a 3 year old Black White Siberian Husky";

// Pet 9 info
var petCap9 = "Jill  <p>Sex: F<br>Age: 4 Years</p>";
var petDesc9 = "Jill is a 4 year old Red White Black Mouth Cur Mix";

// Pet 10 info
var petCap10 = "Christina<p>Sex: N<br>Age: 7 Years</p>";
var petDesc10 = "Christina is a 7 year old Black Shetid Sheepdog Mix";

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
    openCaptionTag +
    captionTexts[i] +
    closeCaptionTag +
    closeList; //Assemble everything
  imageList.push(image); //Store the fully assembled code of each image list
}

//Display all six image codes stored in the array
document.getElementById("album").innerHTML = imageList.join("");