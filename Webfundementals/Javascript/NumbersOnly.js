// Make a function that copies an array, ONLY accepting the items that are numbers.
//
// IT SHOULD RETURN A NEW ARRAY
//
// ex:
//
// var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);
// // newArray is [1, -3, 0.5]
// Copy
// HINT
//
// Use typeof to determine type (ex: typeof 24 === "number" would be true)
// Bonus (Only If You Have Time):
//
// Make a second function that removes them from the given array. (instead of copying to a new array)
// Do you need to return the array?

function NumbersOnly(arr){
  var newArray=[];
  for(var i= 0; i<arr.length;i++){
    if(typeof(arr[i])==="number"){
      newArray.push(arr[i]);
      }
    }
  return newArray;
  // Need to return array if not, the output won't show up when the function is called on.
}
console.log(NumbersOnly([1, "apple", -3, "orange", 0.5]));
// must put the old array into the function parenthesis inorder to have the elements or values activated in the function.

function NumberOnly2(arr){
  for(var i=0; i<arr.length;i++){
    if(typeof(arr[i]==="number")){
      arr.splice(i, 1)
    }
  }
  return arr;
  // Need to return array if not, the output won't show up when the function is called on.
}
console.log(NumberOnly2([1, "apple", -3, "orange", 0.5]));
// must put the old array into the function parenthesis inorder to have the elements or values activated in the function.
