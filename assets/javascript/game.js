//Declare Variables

let wins = 0;
let losses = 0;
let playerScore = 0;
let targetScore;
const crystalOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//Create a loop for array values for each crystal
//Add a click event on the crystals

for (i = 0; i < crystalOptions.length; i++) {
    let crystalSetValue = crystalOptions[Math.floor(Math.random() * crystalOptions.length)];
    //Give each crystal an attribute for score from array
    $(".card-img-top").attr("data-crystalvalue", crystalSetValue[i]);
}


$(".card-img-top").on('click', function() {
    let crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalSetValue);
    playerScore += crystalSetValue;
    //Display the number to #player-score
    $("#player-score").html("Player Score: " + playerScore);
});

//////////////////////////CODE BELOW WORKS//////////////////////////////////////////


//Generate a random target score for user to achieve between 19-120

targetScore = Math.floor(Math.random()*(120 - 19 +1) + 19);

//Display the number generated to #target-score

$("#target-score").append(targetScore);

//If the player achieves the target score total, add a win

if (playerScore === targetScore){
    //Display the win to #wins
    wins++;
    $("#wins").append(wins);
}

//If the player score is greater than target score, add a loss

if (playerScore > targetScore){
    //Display the lose to #losses
    losses++;
    $("#losses").append(losses);

}

//If a user wins or loses, reset the game to start over without refreshing the page (reset:  target, crystal values, player score)




