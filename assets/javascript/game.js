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
    counter = playerScore + Cry1;
    playerScore = $("#player-score").text(counter + Cry1);

    if (playerScore === targetScore){
        win();
    } else if (playerScore > targetScore) {
        lose();
    }
});

$("#crystal-two").on ("click", function(){
    counter = playerScore + Cry2;
    playerScore = $("#player-score").text(counter + Cry2);

    if (playerScore === targetScore){
        win();
    } else if (playerScore > targetScore) {
        lose();
    }
});

$("#crystal-three").on ("click", function(){
    counter = playerScore + Cry3;
    playerScore = $("#player-score").append(counter + Cry3);

    if (playerScore === targetScore){
        win();
    } else if (playerScore > targetScore) {
        lose();
    }
});

$("#crystal-four").on ("click", function(){
    counter = playerScore + Cry4;
    playerScore = $("#player-score").append(counter + Cry4);

    if (playerScore === targetScore){
        win();
    } else if (playerScore > targetScore) {
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
    $("#wins").append(wins);
    reset();
}

//If the player score is greater than target score, add a loss

function lose(){
    //Display the lose to #losses
    losses++;
    $("#losses").append(losses);
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
    //Clear playerscore
    playerScore = 0
}


