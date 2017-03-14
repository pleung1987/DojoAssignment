//: Playground - noun: a place where people can play

import UIKit


//Question 1: Write a program that adds the numbers 1-255 to an array


var array = [UInt32]()
for i in 1...255{
    array.append(UInt32(i))
}

print (array)

//print (arc4random_uniform(256)) -> generates a number between the 1 to 256

//Question 2: Swap two random values in the array
var length = array.count
var randomOne = Int(arc4random_uniform(UInt32(length)))
var randomTwo = Int(arc4random_uniform(UInt32(length)))

if randomOne != randomTwo {
    swap (&array[randomOne] , &array[randomTwo])
}
print (array)

// Question 3: write the code that swaps random values 100 times (You've created a "Shuffle"!)
for i in 1...100{
    var randomOne = Int(arc4random_uniform(UInt32(length)))
    var randomTwo = Int(arc4random_uniform(UInt32(length)))
    
    if randomOne != randomTwo{
        swap (&array[randomOne] , &array[randomTwo])
    }
}
print (array)

// Question 4: Remove the value "42" from the array and Print "We found the answer to the Ultimate Question of Life, the Universe, and Everything at index __" and print the index of where "42" was before you removed it.

for i in 0..<array.count{
    if (array[i] == 42) {
        array.remove(at: i)
        print("We found the answer to the Ultimate Question of Life, the Universe, and Everything at index 42")
        break
    }
}
print (array)
