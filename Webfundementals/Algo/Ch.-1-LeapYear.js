function LeapYear(i){
  if(i%4==0){
    console.log("It's a Leap Year")
  }
  else if(i%100==0){
    console.log("It's not a Leap Year")
  }
  else if(i%400==0){
    console.log("It's a Leap Year")
  }
  else{
    console.log("Its not a Leap Year")
  }
}
LeapYear(2015);
