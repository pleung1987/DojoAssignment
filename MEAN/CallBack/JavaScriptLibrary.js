// Can we make this into a method of an object?
function each(arr, callback) {
  // loop through the array
  for(var i = 0; i < arr.length; i++) {
    callback(arr[i]); // invoking the callback many times... delegation!
  }
}


var _ = {
   map: function(arr, callback) {
       var result = []
       for(var i = 0; i < arr.length; i++) {
           callback(arr[i])         //passing the array in with the callback function before we do that map function
           result.push(arr[i])
        } // invoking the callback many times... delegation!
    return result;
   },
   reduce: function(arr, callback, memo, context) {
       var sum = 0
       for(var i = 0; i < arr.length; i++) {
           callback(arr[i])         //passing the array in with the callback function before we do that map function
           sum += arr[i]
        } // invoking the callback many times... delegation!
      return sum;
   },
   find: function(arr, callback, context) {
       for(var i = 0; i < arr.length; i++) {
            if(callback(arr[i],context)){
                return arr[i]
            }
        } // invoking the callback many times... delegation!
   },
   filter: function(arr, callback, context) {
       var result = []
       for(var i = 0; i < arr.length; i++) {
        if(callback(arr[i], context)){
            result.push(arr[i])
        } // invoking the callback many times... delegation!
    }
    return result;
   },
   reject: function(arr, callback, context) {
       var result = []
       for(var i = 0; i < arr.length; i++) {
        if(!callback(arr[i], context)){
            result.push(arr[i])
        } // invoking the callback many times... delegation!
    }
    return result;
    }
}

// you just created a library with 5 methods!

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num, context){ return num % context == 0;}, 2);
console.log(evens); // if things are working right, this will return [2,4,6].
var map = _.map([1, 2, 3, 4, 5, 6], function(num, context){ return num % context == 0;}, 2);
console.log(map); // if things are working right, this will return [2,4,6].
var reduce = _.reduce([1, 2, 3, 4, 5, 6], function(num, context){ return num % context == 0;}, 2);
console.log(reduce); // if things are working right, this will return [2,4,6].
var find = _.find([1, 2, 3, 4, 5, 6], function(num, context){ return num % context == 0;}, 2);
console.log(find); // if things are working right, this will return [2,4,6].
var reject = _.reject([1, 2, 3, 4, 5, 6], function(num, context){ return num % context == 0;}, 2);
console.log(reject); // if things are working right, this will return [2,4,6].
