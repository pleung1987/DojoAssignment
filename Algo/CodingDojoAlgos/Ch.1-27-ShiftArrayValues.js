function shiftarray(arr){
    for (var i = 0; i < arr.length-1; i++) {
      arr[i]=arr[i+1];
    }
    arr[arr.length-1]=0;
    return arr;
  }
  console.log(shiftarray([1,2,3,4,5,6,7,8,9]));
