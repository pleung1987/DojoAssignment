function FlexibleCountDown(lowNum, highNum, mult){
  for(var i= lowNum; i<=highNum;i++){
    if(i%mult==0){
      console.log(i)
    }
  }
}
FlexibleCountDown(2, 9, 3);
