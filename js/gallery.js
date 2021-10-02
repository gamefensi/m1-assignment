var numOfPhotos = 10;
var photos = []; //Declare an empty array to store image element
var fileNames = []; //Declare an empty array to store image filenames
var imageList = []; //Declare an empty array to store html list that contains an image
var image; //Declare an empty variable to store assembled image list codes
var openList = "<li id='photo'>"; //Declare a variable to contain an open list tag
var openLink = "<a href='#/' class='lightbox-toggle'>";
var closeLink = "</a>";
var closeList = "</li>"; //Declare a variable to contain a close list tag
var openCaptionTag = "<figcaption>";
var closeCaptionTag = "</figcaption>";
var openDescTag = "<div id='descBox' class='desc' onclick='displayInfo(";
var closeDescTag = ")'>";
var closeDescTag2 = "</div>";

// Pet 1 info
var petHdr1 = "Stacy";
var petCap1 = "Stacy<p>Sex: N <br>Age: 12 Years</p>";
var petDesc1 = "Stacy is a 12 year old Chocolate White Dachshund Mix.";
var petInfo1 = "Stacy's info";

// Pet 2 info
var petHdr2 = "Josh";
var petCap2 = "Josh <p>Sex: N<br>Age: 6 Years</p>";
var petDesc2 = "Josh is a 6 year old Fawn White Boxer Mix.";
var petInfo2 = "Josh's info";
// Pet 3 info
var petHdr3 = "Jake";
var petCap3 = "Jake  <p>Sex: N<br>Age: 11 Years</p>";
var petDesc3 = "Jake is an 11 year old Black White Siberian Husky";
var petInfo3 = "Jake's info";
// Pet 4 info
var petHdr4 = "Kevin";
var petCap4 = "Kevin  <p>Sex: N<br>Age: 6 Years</p>";
var petDesc4 = "Kevin is a 6 year old White Siberian Husky";
var petInfo4 = "Kevin's info";
// Pet 5 info
var petHdr5 = "Trunks";
var petCap5 = "Trunks <p>Sex: M<br>Age: 6 Years</p>";
var petDesc5 = "Trunks is a 6 year old Black White Poodle Min Havanese";
var petInfo5 = "Trunks's info";
// Pet 6 info
var petHdr6 = "Chris";
var petCap6 = "Chris <p>Sex: M<br>Age: 8 Years</p>";
var petDesc6 = "Chris is a 8 year old Fawn Black German Shepherd Mix";
var petInfo6 = "Chris's info";
// Pet 7 info
var petHdr7 = "Jesse";
var petCap7 = "Jesse  <p>Sex: M<br>Age: 4 Years</p>";
var petDesc7 = "Jesse is a 4 year old Black Brown Germ Shepherd Siberian Husky";
var petInfo7 = "Jesse's info";
// Pet 8 info
var petHdr8 = "Sully";
var petCap8 = "Sully  <p>Sex: N<br>Age: 3 Years</p>";
var petDesc8 = "Sully is a 3 year old Black White Siberian Husky";
var petInfo8 = "Sully's info";
// Pet 9 info
var petHdr9 = "Jill";
var petCap9 = "Jill  <p>Sex: F<br>Age: 4 Years</p>";
var petDesc9 = "Jill is a 4 year old Red White Black Mouth Cur Mix";
var petInfo9 = "Jill's info";
// Pet 10 info
var petHdr10 = "Christina";
var petCap10 = "Christina<p>Sex: N<br>Age: 7 Years</p>";
var petDesc10 = "Christina is a 7 year old Black Shetid Sheepdog Mix";
var petInfo10 = "Christina's info";
var openInfoTag = "<div style=visibility:hidden; class='infoBox' id='infoBox";
var closeInfoTag = "</div>";

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

var petTxts = [
  petInfo1,
  petInfo2,
  petInfo3,
  petInfo4,
  petInfo5,
  petInfo6,
  petInfo7,
  petInfo8,
  petInfo9,
  petInfo10,
];

var petHdrs = [
  petHdr1,
  petHdr2,
  petHdr3,
  petHdr4,
  petHdr5,
  petHdr6,
  petHdr7,
  petHdr8,
  petHdr9,
  petHdr10,
];

//Create a loop to create 6 images starting with index of 0
for (var i = 0; i < numOfPhotos; i++) {
  fileNames.push("petPhoto" + (i + 1)); //create image file name & store in array
  photos.push("<img src='images/" + fileNames[i] + ".jpg' alt='" + fileNames[i] + "'>"); //Assemble file name into an image element and store in an array
  image =
    openList +
    openLink +
    photos[i] +
    closeLink +
    openDescTag +
    i +
    closeDescTag +
    openInfoTag +
    i +
    "'>" +
    "<h1 class='boxHeader'>" +
    petHdrs[i] +
    "</h1>" +
    "<p class='boxTxt'>" +
    petTxts[i] +
    "</p>" +
    "<div class='closeBox' onclick='hideBox(" +
    i +
    ")'>Close This Box</div>" +
    closeInfoTag +
    descTexts[i] +
    closeDescTag2 +
    openCaptionTag +
    captionTexts[i] +
    closeCaptionTag +
    closeList; //Assemble everything
  imageList.push(image); //Store the fully assembled code of each image list
}

//Display all six image codes stored in the array
document.getElementById("album").innerHTML = imageList.join("");

//info box code

//display text box

function displayInfo(i) {
  var x = document.getElementById("infoBox" + i);
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
}

//close text box
// document.getElement("closeBox").onclick = hideBox;


function hideBox(i) {
  var x = document.getElementById("infoBox" + i);
  x.style.visibility = "visible";
}


//lightbox assignment
/* Open lightbox on button click */
$(document).ready(function () {
  $('.lightbox-toggle img').click(function (e) {
    $('.backdrop').animate({ 'opacity': '.50' }, 300, 'linear').css('display', 'block');
    $('.box').fadeIn();

    //Check if lightbox has an image
    if ($('.box').contents('img')) {
      $('.box').contents().remove('img'); //If true, clear image
    }

    //find Index of Parent
    var indexParent = $(e.target).parent().parent().index();

    var img = $('#photo:nth-child('+ (indexParent += 1) +') img').clone();//Duplicate DOM element dynamically
    // var img = $(this).clone(); //Backup
    $('.box').append(img); //Insert duplicated element into box
  });

  /* Click to close lightbox */
  $('.close, .backdrop').click(function () {
    $('.backdrop').animate({ 'opacity': '0' }, 300, 'linear', function () {
      $('.backdrop').css('display', 'none');
    });
    $('.box').fadeOut();
  });
});