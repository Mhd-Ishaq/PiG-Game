"use strict";

const player0El = document.getElementById("player-0");
const player1El = document.getElementById("player-1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.getElementById("dice");
const btnNew = document.getElementById("btn-new");
const btnRoll = document.getElementById("btn-roll");
const btnHold = document.getElementById("btn-hold");
const btnRules = document.getElementById("btn-rules");
const btnClose = document.getElementById("btn-close");
const rules = document.getElementById("rules-container");

let diceValue = 0;
let playing = true;
let currentScore = 0;
let activePlayer = 0;
let scores = [0,0];
rules.classList.add("hidden");
diceEl.classList.add("hidden");

btnRules.addEventListener("click",()=> {
  rules.classList.remove("hidden");
});

btnClose.addEventListener("click",()=>{
  rules.classList.add("hidden");
});


btnRoll.addEventListener("click",()=>{
  if(playing){
    diceValue = Math.trunc(Math.random()*6)+1;
    // console.log(diceValue);
    diceEl.classList.remove("hidden");
    diceEl.src = `./images/dice--${diceValue}.jpeg`;

    if(diceValue !== 1){
      currentScore += diceValue;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else{
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      // player0El.classList.toggle("player-active");
      // player1El.classList.toggle("player-active");
    }
  }
});

btnHold.addEventListener("click",()=>{
  if(playing){
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer] ;

    if(scores[activePlayer] >= 100){
      // playing = false;
      diceEl.classList.add("hidden");
      document.getElementById(`player--${activePlayer}`).classList.add("winner");
      document.getElementById(`player--${activePlayer}`).classList.remove("player-active");
    }
    else{
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
    }
  }
});

btnNew.addEventListener("click",()=>{
    diceValue = 0;
    playing = true;
    currentScore = 0;
    activePlayer = 0;
    scores = [0,0];
  document.getElementById(`player--0`).classList.remove("winner");
  document.getElementById(`player--1`).classList.remove("winner");
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add("hidden");
});