console.log("Up and running");

var cards = ["queen", "queen", "king", "king"];
var cardOne = cards[0];
var cardsInPlay = [];
cardsInPlay.push("cardOne");
cardsInPlay.push("cardTwo");
console.log("User flipped queen");

var cardTwo = cards[1];
console.log("User flipped king");

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again");
	}
}