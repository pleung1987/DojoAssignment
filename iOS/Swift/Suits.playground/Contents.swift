//: Playground - noun: a place where people can play

import UIKit


//Given the following three variables write a for-in loop that will have the following output in the Assistant Editor.

let suits = ["Clubs", "Diamonds", "Hearts", "Spades"]
let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
var deckOfCards = [String: [Int]]()
//printing cards one at a time
//for suit in suits {
//    print ("\(suit)")
//    for card in cards{
//    print ("\(card)")
//    }
//}

// proper way of doing it, in dictionaries, using equals directs directly with key and value.
for i in 0..<suits.count{
    deckOfCards[suits[i]] = cards
}
print(deckOfCards)

// Modifying dictionary:
var dictionary = [
    "Kobe": 8,
    "Lebron": 23,
    "Rondo": 9
]
print(dictionary)
dictionary["Fisher"] = 2
print(dictionary)
dictionary["Kobe"] = 24
print(dictionary)

//this is the syntax of adding fisher in the dictionary when someone doesn't exist or change the value from the key for Kobe's original.