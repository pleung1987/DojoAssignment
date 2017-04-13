function removeAt(arr,ind){
    var valpop = arr[ind]
    for(var i = ind; i < arr.length-1 ; i++){
        arr[i] = arr[i+1]
    }
    arr.pop()
    return arr;
}
// console.log(removeAt([1,2,3,4,5],2))

function RemoveDuplicates(arr){
    var map = {};
    for(var i = arr.length-1; i>=0;i--){
        if(!map[arr[i]]){
            map[arr[i]] = true; //represents keys are unique
        }
        else{
            removeAt(arr,i)
        }
    }
    return arr;
}

var test = [1,2,3,4,5]
var test2 = [1,1,1,1,1,2,2,2,2,3,3,3,128,219312]
var test3= [1,1,1,1,1,2,2,2,2]

console.log(RemoveDuplicates(test),RemoveDuplicates(test2),RemoveDuplicates(test3))
