
$(document).ready(function() {
    $('startButton').click(function(){console.log('start button clicked')
    ;});
    $('button').click(customObject.onClick.bind(newObject));
})

// $('#startButton').click(function(){
//     consol.log('Start button clicked")')
// })

function Deck(){
    this.buildDeck()    // constructor function is invoked run this code to populate deck with cards
}

Deck.prototype.buildDeck = function(){
    var suits = ['diamonds', 'clubs', 'hearts', 'spade'], //if you are declaring a number of variable in a row, JS lets you seperate it with ','
        numericalVal = [11,2,3,4,5,6,7,8,9,10,10,10,10],
        values = ['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'],
        //Capture snapshot of this for use in callback function
        self = this;
    this.cards = [];

    //when constructor function is invoked, run this code to populate the deck with cards
    suits.forEach(function(suit){   //give it a callback function in a FoorLoop, Javascript will provide the value in the suit category
        values.forEach(function(value){     //for the first parameter in the function, it will be provided by Javascript
            self.cards.push(new Card(value, suit));     //need to use self because it is inside other function
        });
    });
    return this;
}


Deck.prototype.shuffle = function(){
    var unshuffledEdge = this.cards.length,
        cardTOShuffleIndex,
        temp;
    //while there remain elements to shuffle...
    while(unshuffledEdge > 0) {
        //pick an element in the unfhuffled portion
        cardTOShuffleIndex = Math.floor(Math.random() * unshuffledEdge);
        // move the unshuffledEdge close to the front of array
        unshuffledEdge -= 1;
        //swap the chosen card to the back
        temp = this.cards[cardTOShuffleIndex]
        this.cards[cardTOShuffleIndex] = this.cards[unshuffledEdge]
        this.cards[unshuffledEdge] = temp;
    }
    return this;
}

Deck.prototype.reset  = function(){
    this.buildDeck().shuffle();
}

Deck.prototype.dealCards = function(){
    return(this.cards.length > 0) ? this.cards.pop() : null;        //turner operator
    // which means:
        // if (this.card.length > 0) { return this.cards.pop()} else { return null ;}
}

function Card(value, suit){     //blueprint of brand new cards
    this.value = value;
    this.suit = suit;
}

function Player(name){
    this.name = name;
    this.hand = [];
}

Player.prototype.drawCard = function(deck){
    this.hand.push(deck.dealCards());
    return this;
}

Player.prototype.discard = function (cardIdx){
    if(this.hand.length > cardIdx){
        this.hand.splice(cardIdx, 1);
    }
    return this;
}
console.log("*****Deck Activity****");
var myDeck = new Deck();
myDeck.shuffle();
console.log(myDeck);

console.log("*****Deck Activity****");
var charlie = new Player('charlie');
charlie.drawCard(myDeck).drawCard(myDeck).drawCard(myDeck).drawCard(myDeck).drawCard(myDeck).drawCard(myDeck).drawCard(myDeck).drawCard(myDeck)

console.log("*****Player's Hand****");
console.log(charlie.hand);
charlie.discard(0).discard(1).discard(3)        //discard at position index passed in
console.log(charlie.hand);
console.log("*****Player's Hand****");
