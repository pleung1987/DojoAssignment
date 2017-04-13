var arr1 = [9,5,7,3,1,2,18,110,-3,7,10,88];

function BSort(arr){
    for(var j= arr.length-1; j>0; j--){
        for (var i = 0; i<arr.length -1; i++){
            if(arr[i]>arr[i+1]){
                var temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}
console.log(BSort(arr1));
