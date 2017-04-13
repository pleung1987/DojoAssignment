// given a sorted array and a value, recursively determine whether value is found within array.
// ie . rBinarySearch([1,2,3,5],4)= false; rBinarySearch([1,2,3,4,5],5) = true
//
function rBinarySearch(arr,num){
    //arnolds
//     if(arr[Math.floor(arr.length/2)] == num){
//         return true;
//     }
//     else if (arr.length == 1 ){
//         return false
//     }
//     else if(arr[Math.floor(arr.length/2)] > num){
//         return rBinarySearch(arr.slice(0,Math.floor(arr.length/2)), num);
//     }
//     else if(arr[Math.floor(arr.length/2)] < num){
//         return rBinarySearch(arr.slice(Math.floor(arr.length/2),arr.length), val);
//         }
//     }


    var midpoint = Math.floor(arr.length/2)

    if (num === arr[midpoint]) {
        return true;
    }
    else if(arr[midpoint] > num){
        var newArr = arr.slice(0,midpoint);
        return rBinarySearch(newArr, num)
    }
    else if(arr[midpoint] < num ){
        var newArr = arr.slice(midpoint+1, arr.length);
        return rBinarySearch(newArr, num);
    }
    return false;
}

console.log(rBinarySearch([1,2,3,5,6,8,10,15,18,20,25,27,33,38], 40))
console.log(rBinarySearch([15,18,30,25,27,37,48], 37))
