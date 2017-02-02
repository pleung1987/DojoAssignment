function BiggieSize(arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i]>0){
      arr[i]="Big";
    }
  }
  return arr;
}
console.log(BiggieSize([-1,3,5,-5]));
