var arr1= [1,8,4,6,3,2],
    arr2 = [1,2,6,5,3,-3,-10,11,22,103]


function SelectedSort(arr){
    var min;
    var temp;

    for(var i = 0; i<arr.length; i++){
        min = i;
        for(var j = i+1; j<= arr.length -1 ;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp
    }
    return arr;
}
console.log(SelectedSort(arr1));
console.log(SelectedSort(arr2));
