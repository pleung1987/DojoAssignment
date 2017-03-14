import UIKit

//let type: String = "Rectangle"
//let description: String = "A quadrilateral with four right angles"
//
//var width: Int = 5
//var height: Double = 10.5
//var area = Double(width) * (height)
//
//height += 1
//width += 1
//
//area = Double(width) * (height)
//// Note how you can "interpolate" variables into Strings using the following syntax
//print("The shape is a \(type) or \(description) with an area of \(area)")
//
//print("The maximum value \(Int32.max)")
//print("The minimum value \(Int32.min)")
//
//print("The maximum value \(UInt32.max)")
//print("The minimum value \(UInt32.min)")
//
//var myInt32: Int32 = 3
//var myNormalInt: Int
//// This will not error, because we first convert Int32 to instance of Int Type
//myNormalInt = Int(myInt32)
//
////For Loops~ loop from 1 to 5 including 5
//for i in 1...5 {
//    print(i)
//}
//// loop from 1 to 5 excluding 5
//for i in 1..<5 {
//    print(i)
//}
//
//var start = 0
//var end = 5
//// loop from start to end including end
//for i in start...end {
//    print(i)
//}
//// loop from start to end excluding end
//for i in start..<end {
//    print(i)
//}
//
////while Loops:
//var i = 1
//while i < 6 {
//    print(i)
//    i = i+1
//}
//
////Create a loop (either for or while) that prints all the valiues from 1-225
//for i in 1...225 {
//    print (i)
//}
//
////Create a program that prints all of the values from 1-100 that are divisible by 3 or 5 but not both
//for i in 1...100{
//    if i % 3 == 0 && i % 5 == 0 {
//        print()
//    } else {
//        if i % 3 == 0 || i % 5 == 0 {
//            print(i)
//        }
//    }
//}
//
//Create a program that prints all of the values from 1-100 that are divisible by 3 or 5 but not both
//for i in 1...100{
//    if i % 3 == 0 && i % 5 == 0 {
//        print()
//    } else {
//        if i % 3 == 0 || i % 5 == 0 {
//            print(i)
//        }
//    }
//}

////Now modify that program to print "Fizz" when the number is divisible by 3 and "Buzz" when the number is divisible by 5 as well as "FizzBuzz" when the number is divisible by both!
//for i in 1...100{
//    if i % 3 == 0  {
//        print("Fizz")
//    }; if i % 5 == 0 {
//        print ("Buzz")
//    }; if i % 3 == 0 || i % 5 == 0 {
//            print("FizzBuzz")
//} else {
//    print(i)
//    }
//}

//Question 1: Write a program that adds the numbers 1-255 to an array
//
//
//var array = [UInt32]()
//for i in 1...255{
//    array.append(UInt32(i))
//}
//
//print (array)
//
////print (arc4random_uniform(256)) -> generates a number between the 1 to 256
//
////Question 2: Swap two random values in the array
//var length = array.count
//var randomOne = Int(arc4random_uniform(UInt32(length)))
//var randomTwo = Int(arc4random_uniform(UInt32(length)))
//
//if randomOne != randomTwo {
//    swap (&array[randomOne] , &array[randomTwo])
//}
//print (array)
//
//// Question 3: write the code that swaps random values 100 times (You've created a "Shuffle"!)
//for i in 1...100{
//    var randomOne = Int(arc4random_uniform(UInt32(length)))
//    var randomTwo = Int(arc4random_uniform(UInt32(length)))
//    
//    if randomOne != randomTwo{
//        swap (&array[randomOne] , &array[randomTwo])
//    }
//}
//print (array)
//
//// Question 4: Remove the value "42" from the array and Print "We found the answer to the Ultimate Question of Life, the Universe, and Everything at index __" and print the index of where "42" was before you removed it.
//
//for i in 0..<array.count{
//    if (array[i] == 42) {
//        array.remove(at: i)
//        print("We found the answer to the Ultimate Question of Life, the Universe, and Everything at index 42")
//        break
//    }
//}
//print (array)


//  SUITS
//Given the following three variables write a for-in loop that will have the following output in the Assistant Editor.
//
//let suits = ["Clubs", "Diamonds", "Hearts", "Spades"]
//let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//var deckOfCards = [String: [Int]]()
////printing cards one at a time
////for suit in suits {         // if you are looking to print everything on column at a time
////    print ("\(suit)")
////    for card in cards{
////    print ("\(card)")
////    }
////}
//for i in 0..<suits.count{     //ways of working with dictionary is to set the key equals (=) the value
//    deckOfCards[suits[i]] = cards
//}
//print(deckOfCards)


//  HEADS or TAILS
//Create a function tossCoin() -> String
//Have this function print "Tossing a Coin!" Next have the function randomly pick either "Heads" or "Tails"
//func cointoss() -> String{
//    let coin = Int(arc4random_uniform(UInt32(2)))
//    print (coin)
//    if coin == 0 {
//        return "Heads"
//    }else {
//        return "Tails"
//    }
//}
//var toss = cointoss()
//print (toss)
//
////Now create another function tossMultipleCoins(Int) -> Double
////Have this function call the tossCoin function multiple times based on the Integer input Have the function return a Double that reflects the ratio of head toss to total toss
//
//func tossMultipleCoins(tosses:Int) -> Double{
//    var headsCount = 0
//    var tailsCount = 0
//    for toss in 0...tosses{     //shows the length of all the tosses coming from the input
//        if cointoss() == "Heads"{
//            headsCount += 1
//        }else{
//            tailsCount += 1
//        }
//    }
//    print ("heads count has a total of \(headsCount) out of \(tosses) tosses")
//    return Double(tosses) / Double(headsCount)
//    }
//tossMultipleCoins(tosses:100)

class Person {
    var species = "H. Sapiens"
    var name: String
    init(name: String) {         // Note: this function doesn't get called explicitly.  It is called
        // when creating an instance using the initialization syntax -- "Person()"
        self.name = name           // Note the use of "self" here to refer to the name property
    }
    func speak() {
        print("Hello! I am a \(self.species) and my name is \(self.name)")
        // Note how we refer to the properties using "self"
    }
}
class Developer: Person {      // Note how we are specifying that Developer will inherit from Person
    var favoriteLanguage: String
    init(name: String, favoriteLanguage: String) {
        self.favoriteLanguage = favoriteLanguage
        super.init(name: name)
    }
    override func speak() {
        print("Hello! I am a Developer! My name is \(self.name)")
    }
}
var myDeveloper: Developer = Developer(name: "Jay", favoriteLanguage: "Swift")
myDeveloper.speak()
