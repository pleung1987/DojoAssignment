var arr1 = [9,5,7,3,1,2,18,110,-3,7,10,88];

function BSort(arr){
    var sorted = true;
    while(sorted){
        sorted = false;
        for (var i = 0; i<arr.length -1; i++){
            if(arr[i]>arr[i+1]){
                sorted = true;
                var temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}
console.log(BSort(arr1));
