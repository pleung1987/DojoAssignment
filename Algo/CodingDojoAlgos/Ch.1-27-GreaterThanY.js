function GreaterThanY(arr,Y){
  var count=0;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i]>Y){
      count++;
    }
  }
  return count;
}
console.log(GreaterThanY([1,2,3,4,5,6,7,8,9],3));
