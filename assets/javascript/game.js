//Declare Variables

let wins = 0;
let losses = 0;
let playerScore = 0;
let targetScore;
let counter = 0;
const crystalOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


//Create random score for each crystal

let Cry1 = Math.floor(Math.random() * 11) + 1;
let Cry2 = Math.floor(Math.random() * 11) + 1;
let Cry3 = Math.floor(Math.random() * 11) + 1;
let Cry4 = Math.floor(Math.random() * 11) + 1;


//Add a click event on the crystals

$("#crystal-one").on ("click", function(){
    playerScore += Cry1;
    $("#player-score").text("Player Score: " + playerScore);

    if (playerScore === targetScore){
        win();
        
    } else if (playerScore >= targetScore) {
        lose();
        
    }
});

$("#crystal-two").on ("click", function(){
    playerScore += Cry2;
    $("#player-score").text("Player Score: " + playerScore);

    if (playerScore === targetScore){
        win();
        
    } else if (playerScore >= targetScore) {
        lose();
        
    }
});

$("#crystal-three").on ("click", function(){
    playerScore += Cry3;
    $("#player-score").text("Player Score: " + playerScore);

    if (playerScore === targetScore){
        win();
        
    } else if (playerScore >= targetScore) {
        lose();
        
    }
});

$("#crystal-four").on ("click", function(){
    playerScore += Cry4;
    $("#player-score").text("Player Score: " + playerScore);

    if (playerScore === targetScore){
        win();
        
    } else if (playerScore >= targetScore) {
        lose();
        
    }
});

//Generate a random target score for user to achieve between 19-120

targetScore = Math.floor(Math.random()*(120 - 19 +1) + 19);

//Display the number generated to #target-score

$("#target-score").append(targetScore);

//If the player achieves the target score total, add a win

function win() {
    //Display the win to #wins
    wins++;
    $("#wins").text("Wins: " + wins);
    reset();
}

//If the player score is greater than target score, add a loss

function lose(){
    //Display the lose to #losses
    losses++;
    $("#losses").text("Losses: " + losses);
    reset();
}

//If a user wins or loses, reset the game to start over without refreshing the page (reset:  target, crystal values, player score)

function reset(){
    //Generate new random points for crystals
    Cry1 = Math.floor(Math.random() * 11) + 1;
    Cry2 = Math.floor(Math.random() * 11) + 1;
    Cry3 = Math.floor(Math.random() * 11) + 1;
    Cry4 = Math.floor(Math.random() * 11) + 1;
    //Generate new random target score
    targetScore = Math.floor(Math.random()*(120 - 19 +1) + 19);
    $("#target-score").text("Target Score: " + targetScore);
    //Clear playerscore
    playerScore = 0
    $("#player-score").text("Player Score: " + playerScore);
}


