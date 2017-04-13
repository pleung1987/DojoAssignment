var _ = {
   map: function(list, operation, context) {
     //code here;
     console.log("map");
     var result = [];
     for(var i in list) {
       result.push(operation(list[i], context));
     }
     return result;
   },
   reduce: function(list, callback, memo, context) {
     // code here;
     console.log("reduce");
     var sum = list[0];
     if(memo === undefined) {
       memo = list[0];
     }
     for(var i = 1; i < list.length; i++) {
       sum += callback(list[i], memo, context);
     }
     return sum;
   },
   find: function(arr,callback, context) {
     // code here;
     console.log("find");
     for(var i = 0; i < arr.length; i++) {
       if(callback(arr[i], context)) {
         return arr[i];
       }
     }
     return undefined;
   },
   filter: function(arr, callback, context) {
     // code here;
     console.log("filter")
     var result = [];
     for(var i = 0; i < arr.length; i++) {
       if(callback(arr[i], context)) {
         result.push(arr[i]);
       }
     }
     return result;
   },
   reject: function(arr, callback, context) {
     // code here;
     console.log("reject");
     var result = [];
     for(var i = 0; i < arr.length; i++) {
       if(!callback(arr[i], context)) {
         result.push(arr[i]);
       }
     }
     return result;
   }
 }
// you just created a library with 5 methods!
var evens = _.filter([1,2,3,4,5,6], function(num) { return num % 2 == 0; });
console.log(evens);

var findEvens = _.find([1,2,3,4,5,6], function(num){ return num % 2 == 0; });
console.log(findEvens);

var odds = _.reject([1,2,3,4,5,6], function(num) { return num % 2 == 0; });
console.log(odds);

var mapped = _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
console.log(mapped);

var sum = _.reduce(["ab", "cd", "ef"], function(memo, num){ return memo + num; }, "g");
console.log(sum);
