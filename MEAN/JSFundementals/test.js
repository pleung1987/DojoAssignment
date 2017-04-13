// console.log('I am running from node');
//
// var arr = [3, 6];
// arr[234] = "hi";
// //
// console.log( arr.length ); // 235
// console.log( arr[34] ); // undefined
// arr.length = 3;
// console.log( arr[34] );
// console.log( arr[234] );
// console.log( arr.length );
// arr.length = 500;
// console.log( arr[234] );
// console.log( arr.length );

var varFunction;           // the variable declaration gets hoisted to the top
varFunction();             // this tries to invoke "undefined": we get "undefined
                            // is not a function"
varFunction = function() {
console.log("How will this get hoisted?")
}
