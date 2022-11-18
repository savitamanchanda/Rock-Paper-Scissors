var stats = {
    wins: 0,
    losses: 0,
    ties: 0
}

var gameOptions = ["R", "P", "S"];

var rockPaperscissors = function() {
    var userChoice = window.prompt("Please enter R, S or P").toUpperCase();
    console.log(userChoice);

    if ((userChoice !== gameOptions[0]) && (userChoice !== gameOptions[1]) && (userChoice !== gameOptions[2])) {
    window.confirm("Incorrect value, Try again!");
    rockPaperscissors();
    }


    var index = Math.floor(Math.random() * gameOptions.length); 

    var computerChoice = gameOptions[index];
    console.log(computerChoice);

    if (userChoice === computerChoice) {
     window.confirm("Tied! Try Again");
     stats.ties++;
     return rockPaperscissors();
    } else if ((userChoice === "R" && computerChoice === "S") ||
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "P")) {
        window.confirm("Congrats! You won.")
        stats.wins++;
    } else {
        window.confirm("Sorry! You lose.")
        stats.losses++;
    }

   var keepPlaying = window.prompt("Do you want to continue playing?").toLowerCase();

   
   if (keepPlaying === "yes") {
    rockPaperscissors();
   } else {
    window.confirm("Wins" + "=" + stats.wins.toString() + "," + " Losses" + "=" + stats.losses.toString() + "," +
    "Ties" + "=" + stats.ties.toString());
   }

}

rockPaperscissors();
