function removeAt(arr,ind){
    for(var i = ind; i < arr.length-1 ; i++){
        arr[i] = arr[i+1]
    }
    arr.pop()
    return arr;
}
console.log(removeAt([1,2,3,4,5,8,9,2,1,3,5,8,12],6))
