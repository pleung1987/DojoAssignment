function printAvg(arr){
  var sum= 0;
  for (var i = 0; i < arr.length; i++) {
    sum+=arr[i];
  }
  console.log(sum/arr.length);
}
printAvg([1,23,4,6,7,8,10])
