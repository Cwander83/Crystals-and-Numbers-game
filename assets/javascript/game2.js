//--------javascript and jquery for crystal game

//------------random numbers for the crystals
var crystals = [];
for (var i = 0; i < 4; i++) {
  crystals.push(Math.floor(Math.random() * 11 + 1));

}
//--------tells when to run the javascript
$(document).ready(function () {
  //---random number 
  var random = Math.floor(Math.random() * 101 + 19);
  //---------------using method .text to send random number 
  $("#value").text(random);
  //------------------global vars
  var gamertotal = 0;
  var wins = 0;
  var losses = 0;
  //------------fadeout for crystals on click
  $("#red").on("click", function () {
    $(this).fadeOut(30, function () {
      $(this).fadeIn(30);
    });
  });
  $("#blue").on("click", function () {
    $(this).fadeOut(30, function () {
      $(this).fadeIn(30);
    });
  });
  $("#green").on("click", function () {
    $(this).fadeOut(30, function () {
      $(this).fadeIn(30);
    });
  });
  $("#yellow").on("click", function () {
    $(this).fadeOut(30, function () {
      $(this).fadeIn(30);
    });
  });
  //--------------using method .text for wins and losses
  $("#totalwins").text(wins);
  $("#totallosses").text(losses);
  //---------------start game and reset for game
  function reset() {
    random = Math.floor(Math.random() * 101 + 19);
    console.log(random);
    $("#value").text(random);
    crystals = [];
    for (var i = 0; i < 4; i++) {
      crystals.push(Math.floor(Math.random() * 11 + 1));
    }
    gamertotal = 0;
    $("#yourscore").text(gamertotal);
  }
  //--------function for when you match numbers and win
  function gameWon() {
    alert("You're a winner!");
    wins++;
    $("#totalwins").text(wins);
    reset();
  }
  //---------------function for when you go over and lose
  function gameLost() {
    alert("Nope! no crystals for you!!");
    losses++;
    $("#totallosses").text(losses);
    reset()
  }
  //------------on click and crystals number 
  //----------the blue crystal
  $("#blue").on("click", function () {
    gamertotal = gamertotal + crystals[0];
    // the clg that tells the new total 
    console.log("New usertotal= " + gamertotal);
    $("#yourscore").text(gamertotal);
    if (gamertotal == random) {
      gameWon();
    } else if (gamertotal > random) {
      gameLost();
    }
  });
  //-----------red crystal 
  $("#red").on("click", function () {
    gamertotal = gamertotal + crystals[1];
    console.log("New usertotal= " + gamertotal);
    $("#yourscore").text(gamertotal);
    if (gamertotal == random) {
      gameWon();
    } else if (gamertotal > random) {
      gameLost();
    }
  })
  //-------------green crystal
  $("#green").on('click', function () {
    gamertotal = gamertotal + crystals[2];
    console.log("New usertotal= " + gamertotal);
    $('#yourscore').text(gamertotal);
    if (gamertotal == random) {
      gameWon();
    } else if (gamertotal > random) {
      gameLost();
    }
  })
  //--------------yellow crystal
  $("#yellow").on("click", function () {
    gamertotal = gamertotal + crystals[3];
    console.log("New usertotal= " + gamertotal);
    $("#yourscore").text(gamertotal);
    if (gamertotal == random) {
      gameWon();
    } else if (gamertotal > random) {
      gameLost();
    }
  });

  //function imgFunction(crystalkey){
  //  return function(){
  //  gamertotal = gamertotal + crystals[crystalkey];
  // the clg that tells the new total 
  // console.log("New usertotal= " + gamertotal);
  //$("#yourscore").text(gamertotal);
  //if (gamertotal == random) {
  //  gameWon();
  // } else if (gamertotal > random) {
  //  gameLost();
  // }

  //}
  //}
  //imgFunction()



  // $("#crystals").forEach( function imgFunction(){
  //  famertotal = gamertotal + crystals;
  //  console.log("new score: " + gamertotal);

  //});
});