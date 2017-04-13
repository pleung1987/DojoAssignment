//JS Fundementals2

// Create a simple for loop that sums all the integers between x and y (inclusive).
// Have it console log the final sum.

function sumXY(x,y){
    var sum = 0;
    for(var i = x; i < y+1; i++ ){
        sum += i;
    }
    return sum;
}
console.log(sumXY(5,7)); // 5+6+7 = 18;

//Write a loop that will go through an array, find the minimum value, and then return it

function findMin(arr){
    var min = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}
console.log(findMin([1,2,3,4,-3,0]));

// Write a loop that will go through an array, find the average of all of the values, and then return it

function findAvg(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(findAvg([3,5,6,7,8]));

// Rewrite these 3 as anonymous functions assigned to variables.
var sumXY = function(x,y){
    var sum = 0;
    for(var i = x; i < y+1; i++ ){
        sum += i;
    }
    return sum;
}
console.log(sumXY(5,7)); // 5+6+7 = 18;


var findMinimum = function (arr){
    var min = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}
console.log(findMinimum([1,2,3,4,-3,0]));


var findAverage = function(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(findAvg([3,5,6,7,8]));

// Rewrite these as methods of an object
var myObject = {
    sumXY: function(x,y){
        var sum = 0;
        for(var i = x; i < y+1; i++ ){
            sum += i;
        }
        return sum;
    }, //end of sumXY
    findAvg: function(arr){
        var sum = 0;
        for(var i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        return sum / arr.length;
    }, //end of findAvg
    findMin: function findMin(arr) {
        if(arr){
            var min = arr[0];
            for(var i = 0; i < arr.length; i++){
                if(arr[i]< min){
                    min = arr[i];
                }
            }
            return min;
        }
    } //end of findMin
} //end of object
console.log(myObject.sumXY(0,2), myObject.findMin([2,3,-3,24,5]))
//calling object functions

//Create a JavaScript object called person with the following properties/methods

var person = {
    name: "Patrick",        //these are properties of class person
    distance_traveled: 0,   //these are properties of class person
    say_name: function(){   //these are methods of class person
        console.log(person.name);
    },
    say_something: function(phrase){    //these are methods of class person
        console.log(`${person.name} says: ${phrase}`);
    },
    walk: function(){
        console.log(`${person.name} is walking!`);  //these are methods of class person
        person.distance_traveled += 3;
        return person;
    },
    run: function(){
        console.log(`${person.name} is running!`);  //these are methods of class person
        person.distance_traveled += 10;
        return person;
    },
    crawl: function(){
        console.log(`${person.name} is crawling!`);     //these are methods of class person
        person.distance_traveled += 1;
        return person;
    },
    chewGum: function(){
        console.log("I can walk and chewgum, but I can't chew gum and walk...");
    }
}

console.log("current distance is: ", person.distance_traveled),person.walk().run().crawl().say_name(),console.log("current distance:",person.distance_traveled),person.chewGum()
person.say_something("I Love JavaScript Objects!")
