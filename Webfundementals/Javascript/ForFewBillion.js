function reward30days(){

var pay= 0.01;
var reward= 0;
for(var i=1; i<=30;i++){
  console.log(pay);
  reward+= pay;
  pay*=2;

  console.log(reward);
  }
}
reward30days();
//on the 30th day, we accumulate a total of 10,737,418.23 dollars
function daysto10000(){
  var pay=0.01;
  var reward= 0;
  var day=0;
  while(reward<=10000){
    reward+= pay;
    pay*=2
    day++;
  }
  console.log("it takes",day,"days to get to 10,000 dollars")
}
daysto10000();

// how many days til we get a billion
function daystoBillion(){
  var pay=0.01;
  var reward= 0;
  var day=0;
  while(reward<=1000000000){
    reward+= pay;
    pay*=2
    day++;
  }
  console.log("it takes",day,"days to get to 1billion dollars")
}
daystoBillion();

//how many days until reach infinite dollars?
function daystoInfinite(){
  var pay=0.01;
  var reward= 0;
  var day=0;
  while(reward<Infinity){
    reward+= pay;
    pay*=2
    day++;
  }
  console.log("it takes",day,"days to get to infinity dollars");
}
daystoInfinite();
