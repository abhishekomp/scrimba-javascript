// function ourRandomNumberInRange(ourMin, ourMax) {
//   return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
// }

let hasBlackJack = false;
let isAlive = false;
let message = "";
let sum = 0;
let cards = [];

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

// Object
let player = {
  name: "Per",
  chips: 145
}

// let playerName = "Per";
// let playerChips = 145;

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame(){
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards.push(firstCard, secondCard);
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {  
  cardsEl.textContent = "Cards: ";
  for(let i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " ";
  }
  
  // sumEl.textContent += " " + sum;
  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
    //console.log("Do you want to draw a new card? 😀");
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function getRandomCard() {
  let randomNumer = Math.floor( Math.random()*13 ) + 1;
  if (randomNumer > 10) {
      return 10;
  } else if (randomNumer === 1) {
      return 11;
  } else {
      return randomNumer;
  }
}

function getNewCard() {  
  if(isAlive === true && hasBlackJack === false){
    console.log("inside getNewCard() function");
    // get a new card
    let newCard = getRandomCard();
  
    //add this new card to the cards array
    cards.push(newCard);
  
    //add the new card to the sum variable
    sum += newCard;
    
    //
    renderGame();
  }
}
