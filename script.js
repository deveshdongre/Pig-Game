'use strict';

//selecting Elements

const score0E = document.querySelector('#score--0');
const score1E = document.querySelector('#score--1');

const current0E = document.getElementById('current--0');
const corrent1E = document.getElementById('current--1');
const diceE = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0E = document.querySelector('.player--0');
const player1E = document.querySelector('.player--1');

//starting condition
score0E.textContent = 0;
score1E.textContent = 0;
diceE.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;
const score = [0, 0];


const switchPlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = Number(activePlayer) ? 0 : 1;
    player0E.classList.toggle('player--active');
    player1E.classList.toggle('player--active');
}

//When roll is cliceked
btnRoll.addEventListener('click', function () {

    // random rolling of Dice
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //unhidding and display dice image as per random roll
    diceE.classList.remove('hidden');
    diceE.src = `dice-${dice}.png`;

    //check if rolled is 1
    if (dice !== 1) {
        // adding dice value to the current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    } else {
        //switch to next player
        switchPlayer();
    }


});

btnHold.addEventListener('click', function () {
    //Ading Active Player score
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

    //Check if the Player's Score is > 100
    //Finish the game if its Score > 100

    console.log(activePlayer);
    if (score[activePlayer] > 100) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
        switchPlayer();
    }


    //If Score < 100 switch to next player
});