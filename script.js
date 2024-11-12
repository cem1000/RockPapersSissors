function showChoices() {
    document.getElementById('choices').style.display = 'flex';
}

function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    var computerChoiceValue = choices[randomIndex];
    return computerChoiceValue;
}

function playGame(playerChoice) {
    const computerChoiceValue = computerChoice();
    console.log('Player chose: ' + playerChoice);
    console.log('Computer chose: ' + computerChoiceValue);
    
    determineWinner(playerChoice, computerChoiceValue);
}

function determineWinner(playerChoice, computerChoice) {
    const resultElement = document.getElementById('result');
    let resultMessage;

    if (playerChoice === computerChoice) {
        resultMessage = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultMessage = "Player wins!";
    } else {
        resultMessage = "Computer wins!";
    }

    resultElement.textContent = resultMessage;
    displayChoices(computerChoice, playerChoice);
}

function displayChoices(computerChoiceValue, playerChoice) {
    document.getElementById('computerChoiceDisplay').style.display = 'flex';
    document.getElementById('computerChoiceDisplay').innerHTML = "Computer chose: " + computerChoiceValue + "<br><br>You chose: " + playerChoice;
}
