//--------------------------------------Javascript and Jquery for crystal game

//-------------------------------------it equals the total score
//----------------------------------------if it is greater than equal, then lost counter
//-------------------------------------if it is equal then we change win counter
$(document).ready(function () {
    //-------------------------------------------------------global vars to use 
    
    var ranNum = Math.floor(Math.random() * 102)+19;
    console.log(ranNum);
    
    var wins;
    console.log(wins + "wins");
    var losses;
    console.log(losses + "losses");
    
    
    //----------------------------------------functions
    newGame();

    //-------------------------------
    //-----------------------------------------------onclick for crystals
    $("#blue").on("click", function () {
        console.log(this.value);
    })
    $("#red").on("click", function () {
        console.log(this.value);
    })

    $("#green").on("click", function () {
        console.log(this.value);
    })

    $("#yellow").on("click", function () {
        console.log(this.value);
    })
    //--------------------------------------------the number the crystal generates

    //-------------------------------------------------the total score
    //-----------------------generate random number for game on start must be between 19 - 120
    function newGame() {
        counter = 0;
        $("#yourscore").text(counter);

        function randomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        var numberToGuess = randomNumber(19, 120);
        $(".value").text(numberToGuess);

        
    }


    console.log(newGame());



});