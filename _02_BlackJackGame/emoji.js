if (sum <= 20){
  message = "Do you want to draw a new card? 🙂"
  //console.log("Do you want to draw a new card? 😀");
} else if (sum === 21) {
  message = "Wohoo! You've got Blackjack! 🥳"
  hasBlackJack = true
} else {
  message = "You're out of the game! 😭"
  isAlive = false
}