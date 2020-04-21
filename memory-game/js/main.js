console.log("Up and running!");
let cards = [{rank: "queen", suit: "hearts", cardImage: "images/queen-of-hearts.png"},
    {rank: "queen", suit: "diamonds", cardImage: "images/queen-of-diamonds.png"},
    {rank: "king", suit: "hearts", cardImage: "images/king-of-hearts.png"},
    {rank: "king", suit: "diamonds", cardImage: "images/king-of-diamonds.png"}];


let cardsInPlay = [];
let cardId;

function checkForMatch() {
    if (cardsInPlay.length === 2) {

        if (cardsInPlay[0] === cardsInPlay[1]) {
          alert("You found a match!");
        } 
        else {
          alert("Sorry, try again.");
        }
    }
}

function flipCard(){
    cardId = this.getAttribute('data-id');
//    this.setAttribute('src', this.getAttribute('cardImage'));
    this.setAttribute('src', cards[cardId].cardImage);
    console.log("User flipped " + cards[cardId].rank);    
    cardsInPlay.push(cards[cardId].rank);
    checkForMatch();
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
}

function createBoard(){
	let cardElementList = [];
    
    for (var i = cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
    
//    for(var i=0; i<cards.length; i++){
//        console.log(cards[i].cardImage)
//    }
    
	for (let i = 0; i < cards.length; i++){
        let cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        //cardElement.setAttribute('cardImage', cards[i].cardImage);
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
	}
}

function resetBoard(){
    document.getElementById('game-board').innerHTML = "";
    cardsInPlay = []; 
    createBoard();
}


createBoard();