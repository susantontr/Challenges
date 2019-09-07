var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

/*trigger the game*/
$( document ).keydown(function() {
    if(!started) {
        $("#level-title").text("Level " + level);
        nextSequence();   
        started = true;
    }
});

/*Play a random sound*/
function nextSequence() {
    userClickedPattern = [];
    level ++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

}


/*Play a sound when click the button*/
$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});


/*playsound function*/
function playSound (name) {
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}

/*animationPress function*/
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout (function(){
        $("#" + currentColour).removeClass("pressed")}, 100
        );
}

/*check answer playfing the game*/

function checkAnswer(currentLevel) {
   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
       if (userClickedPattern.length ===gamePattern.length) {
           setTimeout(function() {
           nextSequence();
           }, 1000);
       }
   } else {

       var soundfail = new Audio("sounds/wrong.mp3");
       soundfail.play();
       $("body").addClass("game-over");
       setTimeout(function(){
          $("body").removeClass("game-over")
       }, 200);
       $("h1").text("Game Over, Press Any Key to Restart");
       startOver();
   }
}

function startOver() {
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    started = false;
}

