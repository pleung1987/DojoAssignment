//: Playground - noun: a place where people can play

import UIKit


//Deck of Cards
struct Card {
    var value : String
    var suit : String
    var numerical_value: Int
    func show(){
        print(value, "of", suit,"value:", numerical_value)
    }
}
let myCard = Card(value: "Ace", suit: "Spade", numerical_value: 1)
//myCard.show()


class Deck {
    var cards = [Card]()
    init(){
        self.reset()
    }
    
    func deal()-> Card?{
        if self.cards.count > 0 {
            return self.cards.remove(at: 0)
        }
        else {
            return nil
        }
    }
    
    func reset(){
        let values = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"]
        let suits = ["♣️", "♠️", "❤️", "♦️"]
        self.cards = [Card]() //calling back the struct of how a card should look like, value = string, suit = string, num-value= integer
        for suit in suits{
            for i in 0...12{
                let newcard = Card(value: values[i], suit: suit, numerical_value: i+1)
                self.cards.append(newcard)
            }
        }
    }
    
    func shuffle(){
        for i in stride(from: self.cards.count-1, to: 0, by: -1){
        let swapcard = Int(arc4random_uniform(UInt32(i)))
        let temp = self.cards[i]
        self.cards[i] = self.cards[swapcard]
        self.cards[swapcard] = temp
        }
    }
    
    func show(){
        for card in self.cards {
            card.show()
        }
    }
    
}
//let mydeck = Deck()
//mydeck.shuffle()
//mydeck.show()

class Player {
    var name : String
    var hand : [Card] //declaring that hand is the type of object from Struct : Card
    
    init(name : String){
        self.name = name
        self.hand = [Card]()
    }
    
    func draw(deck:Deck) -> Card?{ //in the parenthesis of function, you create the context to be passed into the function
        if let drawncard = deck.deal(){
        self.hand.append(drawncard)
        return drawncard
        } else {
            return nil
        }
    }
    
    func discard(suit: String, value: String) -> Bool {
        for i in 0...self.hand.count-1{
            if (self.hand[i].suit == suit && self.hand[i].value == value){
                self.hand.remove(at: i)
                return true
            }
        }
        return false
    }
    
    func show(){
        for card in self.hand {
            card.show()
        }
    }
}


// Make a new deck called newDeck
let newDeck = Deck()


// You can check to make sure it has all 52 cards with show()
print("************ New deck was made *****************")
newDeck.show()
print("************ New deck was made *****************")

// Shuffle the deck to make things interesting
print("************ New deck was shuffled *****************")
newDeck.shuffle()
newDeck.show()
print("************ New deck was shuffled *****************")

// Make a new player, let's name him Joe
let joe = Player(name:"Joe")

// Have Joe draw five cards from newDeck
joe.draw(deck: newDeck)
joe.draw(deck: newDeck)
joe.draw(deck: newDeck)
joe.draw(deck: newDeck)
joe.draw(deck: newDeck)

// Take a look at Joe's hand
print("************ Joe draws 5 cards *****************")
joe.show()
print("************ Joe draws 5 cards *****************")

// Make Joe discard the Ace of Clubs if he has it
print("************ Joe discards *****************")
print (joe.discard(suit: "♣️", value: "Ace"))
print("************ Joe discards *****************")