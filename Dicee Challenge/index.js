

$(".once-again-button").click(

    function getRandomNumber() {
    
        //change the image accoring to random number
        var randomNumber1 = Math.floor(Math.random()*6 +1);
        var randomImg1 = "images/dice" + randomNumber1 + ".png";
        $(".img1").attr("src", randomImg1);
    
        
        var randomNumber2 = Math.floor(Math.random()*6 +1);
        var randomImg2 = "images/dice" + randomNumber2 + ".png";
            $(".img2").attr("src", randomImg2);
      
        //show the winner
        if(randomNumber1 == randomNumber2) {
            $("h1").text("Draw!");
            $(".icon").removeClass("icon");
            $(".fa-trophy").attr("class", "fas fa-balance-scale fa-3x")
        } else if(randomNumber1 > randomNumber2) {
            $("h1").text("🚩 Player 1 Wins!");
            $(".icon").removeClass("icon");
        } else if(randomNumber1 < randomNumber2) {
            $("h1").text("Player 2 Wins! 🚩");
            $(".icon").removeClass("icon");
        }
        
        $(".once-again-button").addClass("buttonpressed");
    
    });






/*Get Player's name*/
    $(".get-players-name").click(function getPlayerName () {

        $(".player1").text(prompt("What's the name of player 1"));
        $(".player2").text(prompt("What's the name of player 2"));
        $(".get-players-name").addClass("buttonpressed");
    });

