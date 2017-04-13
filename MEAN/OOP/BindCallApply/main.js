//Binding!
// our test object
var customObject = {
  name:'California, Eureka',
  onClick:function(myParam){
    console.log("I've been clicked");
    console.log(myParam, "I've been passed by bind");
    console.log(this.name);
  }
}
var newObject = {
  name:"West Virginia,  Montani semper liberi"
}
// our behavior on click.
$(document).ready(function() {
    $('button').click(customObject.onClick.bind(customObject,"Bind this argument!"));
    $('button').click(customObject.onClick.bind(newObject));
})

// call and apply!

function levelUp() {
  console.log(this.name + " has learned a new kata, in " + this.gender + " favorite language: " + this.language);
}


var person = {
  name: 'Lisa',
  gender: 'her',
  language: 'JavaScript, duh!'
};

levelUp.call(person);


function Ninja(name, age){
  this.name = name;
  this.age = age;
  // there could be lots of other stuff here!
}
function BlackBelt(name,age){
  //Commas!
  Ninja.call(this,name,age);
  this.belt = 'black';
}
function YellowBelt(name,age){
  //ARRAY
  Ninja.apply(this,[name,age]);
  this.belt = 'yellow';
}

// note that you need to give the variables the correct name in the paramaters to inherit them 
// correctly as well as put them in the correct order -- look up currying if you are super excited about this stuff
var yB = new YellowBelt('mike', 40);
var bB = new BlackBelt('charlie', 29);
console.log(bB.name);
console.log(yB.name);
