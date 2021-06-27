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

//starting condition
score0E.textContent = 0;
score1E.textContent = 0;
diceE.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;

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
        current0E.textContent = currentScore

    } else {
        //switch to next player
    }


});