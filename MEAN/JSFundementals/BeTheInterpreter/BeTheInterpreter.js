    // //Example initially:
            // var hello = "interesting";
            // function example() {
            //   var hello = "hi!";
            //   console.log(hello);
            // }
            // example();
            // console.log(hello);

    // //declarations get hoisted
            // var hello;
            // function example() {
            //   var hello;
            //   hello = "hi";
            //   console.log(hello);
            // }
    // //assignments and invocation maintain order
            // hello = "interesting";
            // example();
            // console.log(hello);


// Problem 1:
        // console.log(first_variable);
        // var first_variable = "Yipee I was first!";
        // function firstFunc() {
        //   first_variable = "Not anymore!!!";
        //   console.log(first_variable);
        // }
        // console.log(first_variable);

// SOLUTION:
/* functions and variable declarations hoisted to the top!
Everything else left in the original order.
firstFunc was never invoked, so first_variable after it was set to "Yipee I was first" remains "Yipee I was first".
*/
var first_variable;
function firstFunc(){
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable); // no data has been assigned to first_variable, so shows as console logs undefined.
first_variable = "Yipee I was first!";
console.log(first_variable); // Yipee I was first was assigned to first_variable, so that is what is logged.

// Problem 2:
//         var food = "Chicken";
//         function eat() {
//           food = "half-chicken";
//           console.log(food);
//           var food = "gone";       // CAREFUL!
//           console.log(food);
//         }
//         eat();
//         console.log(food);

//Soluton 2:
var food;        // Declare an outer scope food variable
function eat(){
    var food;
    food = "half-Chicken";
    console.log(food);      // half-chicken console.log, since there is a LOCAL food
    food = "gone"           // CAREFUL! LOCAL food is set to gone
    console.log(food)       // LOCAL food is logged ('gone')l
}
food = "Chicken"            //outer food is set to "chicken"
eat();              // eat is invoked and the half_chicken and gone are logged (the local foods!)
console.log(food);   // outer food is logged('chicken')


// Problem 3:
//         var new_word = "NEW!";
//         function lastFunc() {
//           new_word = "old";
//         }
//         console.log(new_word);

// Solution 3:
    var new_word;               //outer scope new_word variable
    function lastFunc(){
        new_word = "old"        // still references the outer scope new_word variable
    }
    new_word = "New!"
    console.log(new_word);      //lastFunc wasn't invoked so console.log's "New"
