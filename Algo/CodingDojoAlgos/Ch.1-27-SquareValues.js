function SquareValues(arr){
  for(var i=0; i<arr.length;i++){
    arr[i]=arr[i]*arr[i];
    }
  return arr;
}
console.log(SquareValues([1,2,3,4,5,6,7,8,9,10]));
