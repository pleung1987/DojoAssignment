function Xcount(x,y,z,n){
  var i= y;
  while(i<=z){
    if(i%n==0){
      i++;
    }
    else if(i%x==0){
      console.log(i);
      i++;
    }
    else{
      i++;
    }
  }
}
Xcount(3,5,17,9);
