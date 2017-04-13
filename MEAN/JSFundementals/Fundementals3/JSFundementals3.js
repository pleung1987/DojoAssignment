//Create a function that takes in one parameter called “name” and returns an object that looks similar
// to the person object from JS Fundamentals Part II.
function personConstructor(){
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
}

// Now create a ninjaConstructor that can be used to create Ninjas that each has a name, cohort, and
// belt-level. Give all of the Ninjas a “levelUp” method that increases their belt-level
// (Have all ninjas start at a yellow-belt).

function ninjaConstructor(name, cohort){
    var ninja = {} ;
    var belts = ["yellow", "red", "black"];
    ninja.name = name;
    ninja.cohort = cohort;
    ninja.beltlevel = 0;
    ninja.levelUp = function(){
        if (ninja.beltlevel < 2) {
            ninja.beltlevel ++;
            ninja.belt = belts[ninja.beltlevel];
        }
        return ninja;
    }
    ninja.belt = belts[ninja.beltlevel];
    return ninja;
}
console.log(ninjaConstructor("Patrick", "January2017").levelUp().levelUp().levelUp())
