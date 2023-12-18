function rps(input)
{
    const choices = ["rock", "paper", "scissors"];
    const computer = choices[Math.floor(Math.random() * 3)];

    const computerHtml = document.querySelector("#computer");
    const playerHtml = document.querySelector("#player");
    const resultHtml = document.querySelector("#result");
    const computerScoreHtml = document.querySelector("#scoreComputer");
    const playerScoreHtml = document.querySelector("#scorePlayer");
    

    computerHtml.innerHTML = `Computer's Pick: ${computer}`;
    playerHtml.innerHTML = `Player's Pick: ${input}`;


    switch(input.length - computer.length)
    {
        case 0:
            resultHtml.innerHTML = "Result: It's a tie!";
            break;
            
        case 1: case -4: case 3:
            resultHtml.innerHTML = "Result: Player wins!";
            playerScore++;
            playerScoreHtml.innerHTML = `Player: ${playerScore}`;
            break;
        
        case -1: case 4: case -3:
            resultHtml.innerHTML = "Result: Computer wins!";
            computerScore++;
            computerScoreHtml.innerHTML = `Computer: ${computerScore}`;
            break;
    }

}

function reset()
{
    computerScore = 0;
    playerScore = 0;
    document.querySelector("#scoreComputer").innerHTML = `Computer: ${computerScore}`;
    document.querySelector("#scorePlayer").innerHTML = `Player: ${playerScore}`;
}

rock = "rock"
scissors = "scissors"
paper = "paper"

computerScore = 0
playerScore = 0