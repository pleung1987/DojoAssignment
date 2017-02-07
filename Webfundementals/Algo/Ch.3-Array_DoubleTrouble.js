function double(arr){
  for(var i=0; i<arr.length;i++){
    arr.splice(arr[i],arr[i],arr[i]);
  }
  return arr;
}
console.log(double([4,"Ulysses",42,false]));
