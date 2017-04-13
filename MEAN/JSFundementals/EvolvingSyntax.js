//USE JSFundmentals2 and change to the new ES2015 syntax

// Create a simple for loop that sums all the integers between x and y (inclusive).
// Have it console log the final sum.

// Arrow functions
var sumXY = (x,y) => {
    var sum = 0;
    for(var i = x; i < y+1; i++ ){
        sum += i;
    }
    return sum;
}
console.log(sumXY(5,7));

// Arrow functions Find minimum

var findMin = (arr) => {
    var min;
    min = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}
console.log(findMin([1,2,3,4,-3,0]));
//
// // Write a loop that will go through an array, find the average of all of the values, and then return it
//
var findAvg =(arr) =>{
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(findAvg([3,5,6,7,8]));

//
// //Create a JavaScript object called person with the following properties/methods
//
class person {
    constructor(name){
        this.name = name;
    }      //these are properties of class person
    // distance_traveled: 0,   //these are properties of class person
    speak(phrase){
        console.log(this.name +` is said: ${phrase}`)
    }
}
var p = new person('Patrick');
p.speak('hello');

class Warrior extends person{
    say_name(){
        console.log(`I am ... ${this.name} !!!`)
    }
    speak(phrase){
        console.log(this.name + ` WarCries: ${phrase}`)
    }
}
var w = new Warrior('WarPaddie')
w.speak('We will take over these land!'), w.say_name()
    // say_name: function(){   //these are methods of class person
    //     console.log(person.name);
    // },
    // say_something: function(phrase){    //these are methods of class person
    //     console.log(`${person.name} says: ${phrase}`);
    // },
    // walk: function(){
    //     console.log(`${person.name} is walking!`);  //these are methods of class person
    //     person.distance_traveled += 3;
    //     return person;
    // },
    // run: function(){
    //     console.log(`${person.name} is running!`);  //these are methods of class person
    //     person.distance_traveled += 10;
    //     return person;
    // },
    // crawl: function(){
    //     console.log(`${person.name} is crawling!`);     //these are methods of class person
    //     person.distance_traveled += 1;
    //     return person;
    // },
    // chewGum: function(){
    //     console.log("I can walk and chewgum, but I can't chew gum and walk...");
    // }
// }
//
// console.log("current distance is: ", person.distance_traveled),person.walk().run().crawl().say_name(),console.log("current distance:",person.distance_traveled),person.chewGum()
// person.say_something("I Love JavaScript Objects!")

function makeIterator(array) {
    var nextIndex = 0;

    return {
       next: function() {
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    };
}
var it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true
