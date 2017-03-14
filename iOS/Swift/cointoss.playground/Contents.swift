//: Playground - noun: a place where people can play

import UIKit

// HEADS or TAILS

//Create a function tossCoin() -> String
//Have this function print "Tossing a Coin!" Next have the function randomly pick either "Heads" or "Tails"

func cointoss() -> String{
    let coin = Int(arc4random_uniform(UInt32(2)))
    print (coin)
    if coin == 0 {
        return "Heads"
    }else {
        return "Tails"
    }
}
var toss = cointoss()
print (toss)

//Now create another function tossMultipleCoins(Int) -> Double
//Have this function call the tossCoin function multiple times based on the Integer input Have the function return a Double that reflects the ratio of head toss to total toss

func tossMultipleCoins(tosses:Int) -> Double{
    var headsCount = 0
    var tailsCount = 0
    for toss in 0...tosses{     //shows the length or total num of  of all the tosses coming from the input
        if cointoss() == "Heads"{ // using the true or false passed from calling a function
            headsCount += 1
        }else{
            tailsCount += 1
        }
    }
    print ("heads count has a total of \(headsCount) out of \(tosses) tosses")
    return Double(tosses) / Double(headsCount)
}
tossMultipleCoins(tosses:100)

