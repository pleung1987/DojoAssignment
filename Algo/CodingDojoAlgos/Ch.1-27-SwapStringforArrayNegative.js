function SwapNegative(arr){
  for (var i = 0; i < arr.length; i++) {
    if(arr[i]<0){
      arr[i]="Dojo"
    }
  }
  return arr;
}
console.log(SwapNegative([1,32,4,34,-4535,-1,-4535,-24,8373]));
