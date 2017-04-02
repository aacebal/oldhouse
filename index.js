$(document).ready(function(){

  drawPorch();
$(".opendoor").on("click", function(){
  console.log(this);
  foyerDoor();
  $(".text").removeClass("text").before("<p class='text count'>the door is open</p>");
  $(".houseimg").attr("src", "img/old_house_2.jpg");
  setTimeout(function () {
    $(".houseimg").attr("src", "img/old_house_4.jpg");
  }, 750);
  $(".opendoor").remove();
  $(".container2").append("<button class='goinside' type='button' name='button'>go inside</button>");



$(".goinside").on("click", function(){
  $(".text").removeClass("text").before("<p class='text count'>the house is dark</p>");
  $(".houseimg").attr("src", "img/blackimage.png");
  $(".goinside").remove();
  $(".container2").append("<button class='turnonswitch' type='button' name='button'>turn on switch</button>");
  $(".turnonswitch").on("click", function(){
    drawFoyer();
    oldHouse();

});
});
});
});


var oldHouse = function oldHouse(){
  $("button").remove();
  $(".houseimg").attr("src", "img/lobby_1.jpg");
  $(".housepart").text("OLD HOUSE");
  $(".text").removeClass("text").before("<p class='text count'>the house is lit</p>");
  $(".container2").append("<button class='goleft' type='button' name='button'>go left</button>");
  $(".container2").append("<button class='goright' type='button' name='button'>go right</button>");
  $(".container2").append("<button class='goupstairs' type='button' name='button'>go upstairs</button>");
  $(".goright").on("click", rightHallway1);
  $(".goleft").on("click", enterKitchen1);
  $(".goupstairs").on("click", goUpstairs1);
};

var rightHallway1 = function rightHallway1(){
$(".houseimg").attr("src", "img/lobby_right_1.jpg");
hallwayDoor();
rightHallway();
drawHallway();
};

var rightHallway = function rightHallway(){
  $("button").remove();
  setTimeout(function () {
    $(".houseimg").attr("src", "img/hallway_1.jpg");
  }, 500);
  $(".housepart").text("RIGHT HALLWAY");
  $(".text").removeClass("text").before("<p class='text count'>you are in a hallway</p>");
  $(".container2").append("<button class='lookatphoto' type='button' name='button'>look at photo</button>");
  $(".container2").append("<button class='openfirstdoor' type='button' name='button'>open first door</button>");
  $(".container2").append("<button class='openseconddoor' type='button' name='button'>open second door</button>");
  $(".container2").append("<button class='keepgoing1' type='button' name='button'>keep going</button>");
  $(".container2").append("<button class='gobackhallway' type='button' name='button'>go back to foyer</button>");
  $(".lookatphoto").on("click", lookAtPhoto);
  $(".openfirstdoor").on("click", openBathroom);
  $(".openseconddoor").on("click", openStorageRoom);
  $(".keepgoing1").on("click", enterLibrary1);
  $(".gobackhallway").on("click", oldHouse);
};

var lookAtPhoto = function lookAtPhoto(){
  $("button").remove();
  $(".houseimg").attr("src", "img/hallway_photo.jpg");
  $(".text").removeClass("text").before("<p class='text count'>there is a man and two children in the photo, a boy and a girl</p>");
  $(".container2").append("<button class='putdownphoto' type='button' name='button'>go back</button>");
  $(".putdownphoto").on("click", rightHallway);
};

var openBathroom = function openBathroom() {
  $("button").remove();
  bathroomDoor();
  drawBathroom();
  $(".houseimg").attr("src", "img/hallway_2.jpg");
  setTimeout(function () {
    $(".houseimg").attr("src", "img/bathroom_1.jpg");
  }, 1000);
  $(".text").removeClass("text").before("<p class='text count'>you are in the bathroom</p>");
  $(".container2").append("<button class='opendrawersbathroom' type='button' name='button'>open drawers</button>");
  $(".container2").append("<button class='gobackbathroom' type='button' name='button'>go back</button>");
  $(".opendrawersbathroom").on("click", openDrawersBathroom);
  if($("#key1").hasClass("key1")){
  $(".opendrawersbathroom").off();
}
  $(".gobackbathroom").on("click", rightHallway);
};

var openDrawersBathroom = function openDrawersBathroom(){
  $("button").remove();
  $(".houseimg").attr("src", "img/bathroom_drawer.jpg");
  $(".text").removeClass("text").before("<p class='text count'>you found a key</p>");
  $(".container2").append("<button class='gobackbathroom' type='button' name='button'>go back</button>");
  $(".container4").append("<span id=key1 class=key1 name='button'><i class='fa fa-key fa-2x' aria-hidden='true'></i></span>");
  key = true;
  $(".gobackbathroom").on("click", rightHallway);
};

var openStorageRoom = function openStorageRoom(){
  $("button").remove();
  storageDoor();
  drawStorageRoom();
  $(".houseimg").attr("src", "img/hallway_3.jpg");
  setTimeout(function () {
    $(".houseimg").attr("src", "img/storage_1.jpg");
  }, 1000);
  $(".text").removeClass("text").before("<p class='text count'>you are in the storage room</p>");
  $(".container2").append("<button class='opendrawersstorage' type='button' name='button'>open drawers</button>");
  $(".container2").append("<button class='leavestorageroom' type='button' name='button'>go back</button>");
  $(".opendrawersstorage").on("click", openDrawersStorage);
  $(".leavestorageroom").on("click", rightHallway);
  $(".gobackstorage").on("click", rightHallway);
};

var openDrawersStorage = function openDrawersStorage(){
  $("button").remove();
  $(".houseimg").attr("src", "img/storage_2.jpg");
  $(".text").removeClass("text").before("<p class='text count'>you found old newspapers</p>");
  $(".container2").append("<button class='readhealines' type='button' name='button'>read healines</button>");
  $(".readhealines").on("click", readHeadlines);
};

var readHeadlines = function readHeadlines(){
  $("button").remove();
  $(".text").removeClass("text").before("<p class='text count'>'March 21, 2001. Investigation continues on the case of Martha Newport, police says no information to disclose'</p>");
  setTimeout(function () {
    setTimeout(function () {
      $(".text").removeClass("text").before("<p class='text count'>'September 12, 2001. Police department says they are closing the Martha Newport case. Nothing found after 6 months of search'</p>");
    }, 2000);
    $(".text").removeClass("text").before("<p class='text count'>'June 27, 2001. Mom of two missing in Columbia, Missouri'</p>");
  }, 2000);
  $(".container2").append("<button class='gobackstorage' type='button' name='button'>go back</button>");
  $(".gobackstorage").on("click", rightHallway);
};

var enterLibrary1 = function enterLibrary1(){
  $(".houseimg").attr("src", "img/hallway_4.jpg");
  libraryDoor();
  drawLibrary();
  enterLibrary();
};

var enterLibrary = function enterLibrary(){
  $("button").remove();
  $(".housepart").text("LIBRARY");
  setTimeout(function () {
    $(".houseimg").attr("src", "img/library_1.jpg");
  }, 1000);
  $(".text").removeClass("text").before("<p class='text count'>you are in the library</p>");
  $(".container2").append("<button class='readbooktitles' type='button' name='button'>read book titles</button>");
  $(".container2").append("<button class='approachdesk' type='button' name='button'>approach desk</button>");
  $(".container2").append("<button class='gobacklibrary' type='button' name='button'>go back</button>");
  $(".readbooktitles").on("click", readBookTitles);
  $(".approachdesk").on("click", approachDesk);
  $(".opendrawerslibrary").on("click", openDrawersLibrary);
  $(".gobacklibrary").on("click", rightHallway);
};

var readBookTitles = function readBookTitles(){
  $("button").remove();
  $(".houseimg").attr("src", "img/library_books.jpg");
  $(".text").removeClass("text").before("<p class='text count'>'Cardiology/Cardiothoracic Surgery/Vascular Surgery'</p>");
  setTimeout(function () {
    setTimeout(function () {
      setTimeout(function () {
        $(".text").removeClass("text").before("<p class='text count'>most books are in the medical field</p>");
      }, 2000);
      $(".text").removeClass("text").before("<p class='text count'>'Cardiac Surgery Essentials For Critical Care Nursing'</p>");
    }, 2000);
    $(".text").removeClass("text").before("<p class='text count'>'Cardiac Surgery: Recent Advances and Techniques'</p>");
  }, 2000);
  $(".container2").append("<button class='gobacklibrary' type='button' name='button'>go back</button>");
  $(".gobacklibrary").on("click", enterLibrary);
};

var approachDesk = function approachDesk(){
  $("button").remove();
  $(".houseimg").attr("src", "img/library_desk.jpg");
  $(".text").removeClass("text").before("<p class='text count'>there is a document on the table</p>");
  $(".container2").append("<button class='readdocumentheadline' type='button' name='button'>read document headline</button>");
  $(".container2").append("<button class='opendrawerslibrary' type='button' name='button'>open drawers</button>");
  $(".readdocumentheadline").on("click", readDocumentHeadline);
  $(".opendrawerslibrary").on("click", openDrawersLibrary);
  if($("#code1").hasClass("code1")){
  $(".opendrawerslibrary").off();
}
};

var readDocumentHeadline = function readDocumentHeadline(){
  $("button").remove();
  $(".text").removeClass("text").before("<p class='text count'>the document has the headline 'Medical Malpractice Law'</p>");
  setTimeout(function () {
    $(".text").removeClass("text").before("<p class='text count'>it describes the legal procedures for medical malpractice cases</p>");
  }, 2000);
  $(".container2").append("<button class='opendrawerslibrary' type='button' name='button'>open drawers</button>");
  $(".opendrawerslibrary").on("click", openDrawersLibrary);
};

var openDrawersLibrary = function openDrawersLibrary(){
  $("button").remove();
  $(".text").removeClass("text").before("<p class='text count'>you found a bottle of Xanax</p>");
  $(".text").removeClass("text").before("<p class='text count'>you found a note that reads 5538</p>");
  setTimeout(function () {
    $(".text").removeClass("text").before("<p class='text count'>code added</p>");
  }, 2000);
  $(".container4").append("<span id='code1' class='code1' name='code'><i class='fa fa-file-code-o fa-2x' aria-hidden='true'></i>5538</span>");
  $(".container2").append("<button class='gobacklibrary' type='button' name='button'>go back to foyer</button>");
  $(".gobacklibrary").on("click", oldHouse);
};

var enterKitchen1 = function enterKitchen1(){
  $(".houseimg").attr("src", "img/lobby_left_1.jpg");
  kitchenDoor();
  enterKitchen();
};

var enterKitchen = function enterKitchen(){
  $("button").remove();
  setTimeout(function () {
    $(".houseimg").attr("src", "img/kitchen_1.jpg");
    drawKitchen();
  }, 750);
  $(".housepart").text("KITCHEN");
  $(".text").removeClass("text").before("<p class='text count'>you are in the kitchen</p>");
  $(".container2").append("<button class='gothroughmail' type='button' name='button'>go through the mail</button>");
  $(".container2").append("<button class='lookincabinets' type='button' name='button'>look in overhead cabinets</button>");
  $(".container2").append("<button class='lookinfridge' type='button' name='button'>look in fridge</button>");
  $(".container2").append("<button class='gobackkitchen' type='button' name='button'>go back to foyer</button>");
  $(".gothroughmail").on("click", goThroughMail);
  $(".lookincabinets").on("click", lookInCabinets);
  $(".lookinfridge").on("click", lookInFridge);
  $(".gobackkitchen").on("click", oldHouse);
  if($("#password1").hasClass("password1")){
  $(".lookincabinets").off();
}
};

var goThroughMail = function goThroughMail(){
  $("button").remove();
  $(".houseimg").attr("src", "img/kitchen_documents.jpg");
  setTimeout(function () {
    $(".houseimg").attr("src", "img/lawyerletter.png");
  }, 500);
  $(".text").removeClass("text").before("<p class='text count'>you found a letter from a law firm</p>");
  $(".container2").append("<button class='closeletter' type='button' name='button'>close letter</button>");
  $(".closeletter").on("click", enterKitchen);
};

var lookInCabinets = function lookInCabinets(){
  $("button").remove();
  $(".houseimg").attr("src", "img/kitchen_cabinets.jpg");
  $(".text").removeClass("text").before("<p class='text count'>you found several notes</p>");
  setTimeout(function () {
    $(".text").removeClass("text").before("<p class='text count'>one contains a password written on it: 'aruba0696'</p>");
    $(".text").removeClass("text").before("<p class='text count'>password added</p>");
    $(".container4").append("<span id='password1' class='password1' name='button'><i class='fa fa-unlock-alt fa-2x' aria-hidden='true'></i> aruba0696</span>");
  }, 1000);
  $(".container2").append("<button class='closeletter' type='button' name='button'>close letter</button>");
  $(".closeletter").on("click", enterKitchen);
};

var lookInFridge = function lookInFridge(){
  $("button").remove();
  $(".text").removeClass("text").before("<p class='text count'>the milk is expired</p>");
  $(".container2").append("<button class='closefridge' type='button' name='button'>close fridge</button>");
  $(".closefridge").on("click", enterKitchen);
};

var goUpstairs1 = function goUpstairs1(){
  $(".houseimg").attr("src", "img/lobby_upstairs.jpg");
  stairs();
  goUpstairs();
  drawUpstairs();
};

var goUpstairs = function goUpstairs(){
  $("button").remove();
  setTimeout(function () {
    $(".houseimg").attr("src", "img/upstairs_1.jpg");
  }, 1000);
  $(".housepart").text("UPSTAIRS");
  $(".text").removeClass("text").before("<p class='text count'>you are upstairs</p>");
  $(".container2").append("<button class='goinfirstroom' type='button' name='button'>go into first room</button>");
  $(".container2").append("<button class='goinsecondroom' type='button' name='button'>go into second room</button>");
  $(".container2").append("<button class='gobackupstairs' type='button' name='button'>go back to foyer</button>");
  $(".goinfirstroom").on("click", enterKidsRoom1);
  $(".goinsecondroom").on("click", enterAdultsRoom);
  $(".gobackupstairs").on("click", oldHouse);
};

var enterKidsRoom1 = function enterKidsRoom1(){
  $(".houseimg").attr("src", "img/upstairs_2.jpg");
  kidsDoor();
  enterKidsRoom();
};

var enterKidsRoom = function enterKidsRoom(){
  $("button").remove();
  drawKidsRoom();
  setTimeout(function () {
    $(".houseimg").attr("src", "img/kidsroom_1.jpg");
  }, 1000);
  $(".text").removeClass("text").before("<p class='text count'>you are in the kids room</p>");
  $(".container2").append("<button class='opendrawerskidsroom' type='button' name='button'>open drawers</button>");
  $(".container2").append("<button class='examinedeskkidsroom' type='button' name='button'>examine desk</button>");
  $(".container2").append("<button class='gobackkidsroom' type='button' name='button'>go back</button>");
  $(".opendrawerskidsroom").on("click", openDrawersKidsRoom);
  $(".examinedeskkidsroom").on("click", examineDeskKidsRoom);
  $(".gobackkidsroom").on("click", goUpstairs);
};

var openDrawersKidsRoom = function openDrawersKidsRoom(){
  $("button").remove();
  $(".houseimg").attr("src", "img/kidsroom_2.jpg");
  $(".text").removeClass("text").before("<p class='text count'>you found kids toys</p>");
  $(".container2").append("<button class='gobackkidsdrawers' type='button' name='button'>go back</button>");
  $(".gobackkidsdrawers").on("click", enterKidsRoom);
};

var examineDeskKidsRoom = function examineDeskKidsRoom(){
  $("button").remove();
  $(".houseimg").attr("src", "img/kidsroom_3.jpg");
  $(".text").removeClass("text").before("<p class='text count'>the desk has kids drawings on it. seems to have been moved</p>");
  $(".container2").append("<button class='movedesk' type='button' name='button'>move desk</button>");
  $(".container2").append("<button class='gobackkidsroom' type='button' name='button'>go back</button>");
  $(".gobackkidsroom").on("click", enterKidsRoom);
  $(".movedesk").on("click", moveDesk);
};

var moveDesk = function moveDesk(){
  $("button").remove();
  $(".houseimg").attr("src", "img/kidsroom_3.jpg");
  $(".text").removeClass("text").before("<p class='text count'>you found a safe</p>");
    var code = prompt("you found a safe", "enter code");
  if (code == 5538) {
    $(".text").removeClass("text").before("<p class='text count'>the code is correct</p>");
    setTimeout(function () {
      $(".text").removeClass("text").before("<p class='text count'>you found four receipts from an airline, they are for an island in the Caribbean</p>");
    }, 1000);
    $(".container2").append("<button class='gobackkidsroom' type='button' name='button'>go back</button>");
    $(".gobackkidsroom").on("click", enterKidsRoom);
    }
  else{
    $(".text").removeClass("text").before("<p class='text count'>the code is incorrect</p>");
    $(".container2").append("<button class='tryagain' type='button' name='button'>try again</button>");
    $(".container2").append("<button class='gobackkidsroom' type='button' name='button'>go back</button>");
    $(".tryagain").on("click", moveDesk);
    $(".gobackkidsroom").on("click", enterKidsRoom);
    }
};

var enterAdultsRoom = function enterAdultsRoom(){
  $(".houseimg").attr("src", "img/upstairs_3.jpg");
  $(".text").removeClass("text").before("<p class='text count'>the room is locked</p>");
  $(".key1").on("click", openAdultsRoom);
};

var openAdultsRoom = function openAdultsRoom(){
  $("button").remove();
  drawAdultsRoom();
  $(".houseimg").attr("src", "img/adults_room_1.jpg");
  $(".text").removeClass("text").before("<p class='text count'>you are in the parents room</p>");
  $(".container2").append("<button class='opendrawersadultsroom' type='button' name='button'>open drawers</button>");
  $(".container2").append("<button class='opencloset' type='button' name='button'>open closet</button>");
  $(".container2").append("<button class='opencomputer' type='button' name='button'>open computer</button>");
  $(".container2").append("<button class='gobackupstairs1' type='button' name='button'>go back</button>");
  $(".opendrawersadultsroom").on("click", openDrawersAdultsRoom);
  $(".opencloset").on("click", openCloset);
  $(".opencomputer").on("click", openComputer);
  $(".gobackupstairs1").on("click", goUpstairs);
};

var openDrawersAdultsRoom = function openDrawersAdultsRoom(){
  $("button").remove();
  $(".houseimg").attr("src", "img/adults_room_drawers.jpg");
  $(".text").removeClass("text").before("<p class='text count'>you found legal papers</p>");
  $(".container2").append("<button class='readlegalpapers' type='button' name='button'>read papers</button>");
  $(".readlegalpapers").on("click", readLegalPapers);
};

var readLegalPapers = function readLegalPapers(){
  $("button").remove();
  $(".text").removeClass("text").before("<p class='text count'>'insurance claims for a deceased family member settled for $250,000 to beneficiary'</p>");
  $(".container2").append("<button class='gobackadultsroom' type='button' name='button'>go back</button>");
  $(".gobackadultsroom").on("click", openAdultsRoom);
};

var openCloset = function openCloset(){
  $("button").remove();
  $(".houseimg").attr("src", "img/adults_room_closet.jpg");
  $(".text").removeClass("text").before("<p class='text count'>the closet has been emptied</p>");
  $(".container2").append("<button class='gobackadultsroom' type='button' name='button'>go back</button>");
  $(".gobackadultsroom").on("click", openAdultsRoom);
};

var openComputer = function openComputer(){
  $("button").remove();
  $(".houseimg").attr("src", "img/adults_room_computer.jpg");
  $(".text").removeClass("text").before("<p class='text count'>the computer is locked</p>");
  var password = prompt("the computer is locked", "enter password");
  if (password === "aruba0696"){
    $(".text").removeClass("text").before("<p class='text count'>the password is correct</p>");
    $(".container2").append("<button class='accessemail' type='button' name='button'>access email</button>");
    $(".container2").append("<button class='closecomputer' type='button' name='button'>close computer</button>");
    $(".accessemail").on("click", accessEmail);
    $(".closecomputer").on("click", openAdultsRoom);
  }
};

var accessEmail = function accessEmail(){
  $("button").remove();
  $(".text").removeClass("text").before("<p class='text count'>there are three flagged emails from Martha</p>");
  $(".container2").append("<button class='reademails' type='button' name='button'>read emails</button>");
  $(".reademails").on("click", readEmails);
};

var readEmails = function readEmails(){
  $("button").remove();
  $(".text").removeClass("text").before("<p class='text count'>April 3, 2001. You must remember we did this for our family. You must remain strong, we will get the money soon, and we will start a new life with the kids. Just us, away from all the lawyers and the people who hurt you.</p>");
  setTimeout(function () {
    $(".text").removeClass("text").before("<p class='text count'>September 20, 2001. Investigations have ceased. Soon the insurance will have to pay, and we will be free to go to our paradise. Can’t wait to see you and the kids. Love, Martha.</p>");
  setTimeout(function () {
    $(".text").removeClass("text").before("<p class='text count'>November 1, 2001. Tomorrow is the day. Have the tickets ready I will meet you at the airport and we will go to our island. It will be like our honey moon all over again. Please tell the kids I love them. See you soon, Martha. </p>");
  }, 3000);
}, 3000);
  $(".container2").append("<button class='gobackemails' type='button' name='button'>go back</button>");
  $(".gobackemails").on("click", oldHouseFinished);
};

var oldHouseFinished = function oldHouseFinished(){
  $("button").remove();
  $(".houseimg").attr("src", "img/lobby.jpg");
  $(".housepart").text("OLD HOUSE");
  $(".text").removeClass("text").before("<p class='text count'>you are back in the old house, fresh memories of what happened 10 years ago</p>");
  $(".container2").append("<button class='leavehouse' type='button' name='button'>leave the house</button>");
  $(".leavehouse").on("click", leaveHouse);
};

var leaveHouse = function leaveHouse(){
  $("button").remove();
  $(".text").removeClass("text").before("<p class='text count'>you got one last look at your old house. Robert Newport, now a new man, living in Aruba with your beloved family</p>");
};

var canvas = $("#canvas");
var ctx = canvas[0].getContext("2d");

var drawPorch = function drawPorch(){
  ctx.beginPath();
  ctx.moveTo(30,300);
  ctx.lineTo(150,300);
  ctx.lineTo(150,260);
  ctx.lineTo(30, 260);
  ctx.lineTo(30, 300);
  ctx.lineWidth = 8;
  ctx.stroke();
};


var drawFoyer = function drawFoyer(){
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(30,260);
  ctx.lineTo(30, 180);
  ctx.lineTo(150, 180);
  ctx.lineTo(150, 260);
  ctx.lineWidth = 8;
  ctx.stroke();
};

var foyerDoor = function foyerDoor(){
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.moveTo(140,260);
  ctx.lineTo(125,260);
  ctx.stroke();
};

var drawKitchen = function drawKitchen(){
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(30,285);
  ctx.lineTo(0,285);
  ctx.lineTo(0,195);
  ctx.lineTo(30, 195);
  ctx.lineWidth = 8;
  ctx.stroke();
};

var kitchenDoor = function kitchenDoor(){
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(30,250);
    ctx.lineTo(30,235);
    ctx.stroke();
};

var drawHallway = function drawHallway(){
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(150,220);
  ctx.lineTo(170,220);
  ctx.lineTo(170,100);
  ctx.lineTo(150, 100);
  ctx.lineTo(150, 190);
  ctx.lineWidth = 8;
  ctx.stroke();
};

var hallwayDoor = function hallwayDoor(){
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(150,210);
    ctx.lineTo(150,190);
    ctx.stroke();
};

var drawBathroom = function drawBathroom(){
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(170,220);
  ctx.lineTo(220,220);
  ctx.lineTo(220,170);
  ctx.lineTo(170, 170);
  ctx.lineWidth = 8;
  ctx.stroke();
};

var bathroomDoor = function bathroomDoor(){
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(170,210);
    ctx.lineTo(170,190);
    ctx.stroke();
};

var drawStorageRoom = function drawStorageRoom(){
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(170,170);
  ctx.lineTo(220,170);
  ctx.lineTo(220,120);
  ctx.lineTo(170, 120);
  ctx.lineWidth = 8;
  ctx.stroke();
};

var storageDoor = function storageDoor(){
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(170,160);
    ctx.lineTo(170,140);
    ctx.stroke();
};

var drawLibrary = function Library(){
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(170,100);
  ctx.lineTo(220,100);
  ctx.lineTo(220,50);
  ctx.lineTo(150,50);
  ctx.lineTo(150,100);
  ctx.lineWidth = 8;
  ctx.stroke();
};

var libraryDoor = function libraryDoor(){
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(166,100);
    ctx.lineTo(154,100);
    ctx.stroke();
};

var drawUpstairs = function drawUpstairs(){
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(140,160);
  ctx.lineTo(150,160);
  ctx.lineTo(150,0);
  ctx.lineTo(50,0);
  ctx.lineTo(50,160);
  ctx.lineTo(120,160);
  ctx.lineWidth = 8;
  ctx.stroke();
};

var stairs = function stairs(){
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(120,180);
    ctx.lineTo(140,180);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(120,150);
    ctx.lineTo(140,150);
    ctx.stroke();
    ctx.moveTo(120,170);
    ctx.lineTo(140,170);
    ctx.stroke();
    ctx.moveTo(120,190);
    ctx.lineTo(140,190);
    ctx.stroke();

};

var drawKidsRoom = function drawKidsRoom(){
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(50,90);
  ctx.lineTo(0,90);
  ctx.lineTo(0,170);
  ctx.lineTo(50,170);
  ctx.lineTo(50,160);
  ctx.lineWidth = 8;
  ctx.stroke();
};

var kidsDoor = function kidsDoor(){
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.moveTo(50,130);
  ctx.lineTo(50,150);
  ctx.stroke();
};

var drawAdultsRoom = function drawAdultsRoom(){
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(50,0);
  ctx.lineTo(0,0);
  ctx.lineTo(0,90);
  ctx.lineTo(50,90);
  ctx.lineWidth = 8;
  ctx.stroke();
};


var adultsDoor = function adultsDoor(){
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.moveTo(50,50);
  ctx.lineTo(50,70);
  ctx.stroke();
};
