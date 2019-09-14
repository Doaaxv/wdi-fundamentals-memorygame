console.log("Up and running!");


var cards = ["queen","queen","king","king"];

var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);

var cardTwo = cards[2];

cardsInPlay.push(cardTwo);

console.log("User flipped "+cardsInPlay);

if(cardsInPlay.length === 2){
	console.log("cardsInPlay.length: "+ cardsInPlay.length);
	if(cardsInPlay[0]===cardsInPlay[1]){
		alert("found a match!");
	}else{
		alert("Sorry, try again.");
	}
}


