/* Original Code

const player1Button = document.querySelector("#p1add");
const player2Button = document.querySelector("#p2add");
const player1Display = document.querySelector("#p1");
const player2Display = document.querySelector("#p2");
const reset = document.querySelector("#reset");
const winning = document.querySelector('#finalScore');
//console.log(winning);

let p1Score = 0;
let p2Score = 0;

let end = parseInt(winning.value);

let gameOver = false;

// Add 1 when button is clicked
player1Button.addEventListener('click', function() {
    if (!gameOver) {
        p1Score ++;
        if (p1Score === end) {
            //alert("test");
            //p1score.innerText = 1;
            gameOver = true;
            //Apply text-success class to winner
            player1Display.setAttribute('class', 'text-success');
            //Apply text-muted class to loser
            player2Display.setAttribute('class', 'text-muted')
            //Disable +1 buttons
            player1Button.setAttribute('disabled', '');
            player2Button.setAttribute('disabled', '');
        }
        player1Display.innerHTML = p1Score;   
          
    }

})

player2Button.addEventListener('click', function() {
    if (!gameOver) {
        p2Score ++;
        if (p2Score === end) {
            gameOver = true;
            player2Display.setAttribute('class', 'text-success');
            player1Display.setAttribute('class', 'text-muted')  

            player1Button.setAttribute('disabled', '');
            player2Button.setAttribute('disabled', ''); 

            player1Button.setAttribute('disabled', '');
            player2Button.setAttribute('disabled', '');
        }
        player2Display.innerHTML = p2Score;        
    }

})

// Reset to start the game
reset.addEventListener('click', function() {
    player1Display.classList.remove('text-success', 'text-muted');
    player2Display.classList.remove('text-success', 'text-muted'); 
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    player1Display.innerHTML = 0;
    player2Display.innerHTML = 0;
    player1Button.removeAttribute('disabled');
    player2Button.removeAttribute('disabled');
})

winning.addEventListener('change', function() {
    //alert("bogegey");
    player1Display.classList.remove('text-success', 'text-muted');
    player2Display.classList.remove('text-success', 'text-muted'); 
    end = parseInt(this.value);
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    player1Display.innerHTML = 0;
    player2Display.innerHTML = 0;
    player1Button.removeAttribute('disabled');
    player2Button.removeAttribute('disabled');
    
}) */

// Refactored Code
const player1 = {
    button : document.querySelector("#p1add"),
    display : document.querySelector("#p1"),
    score: 0
}

const player2 = {
    button : document.querySelector("#p2add"),
    display : document.querySelector("#p2"),
    score : 0
}

const reset = document.querySelector("#reset");
const winning = document.querySelector('#finalScore');
let end = parseInt(winning.value);
let gameOver = false;

function updateScores(player, opponent) {
    if (!gameOver) {
        player.score ++;
        if (player.score === end) {
            gameOver = true;
            player.display.setAttribute('class', 'text-success');
            opponent.display.setAttribute('class', 'text-muted')
            player.button.setAttribute('disabled', '');
            opponent.button.setAttribute('disabled', '');
        }
        player.display.innerHTML = player.score;   
    }
}

player1.button.addEventListener('click', function() {
    updateScores(player1, player2);
})

player2.button.addEventListener('click', function() {
   updateScores(player2, player1);
})
function startOver() {
    gameOver = false;
    for (let player of [player1, player2]) {
        player.display.classList.remove('text-success', 'text-muted');
        player.score = 0;
        player.display.innerHTML = 0;
        player.button.removeAttribute('disabled');
    }
}

reset.addEventListener('click', startOver)

winning.addEventListener('change', function() {
    end = parseInt(this.value);
    startOver();
})