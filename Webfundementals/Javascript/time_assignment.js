var Hour= 8;
var Minute= 50;
var Period= "AM";

if(Hour==8 && Minute== 50 && Period=="AM"){
  console.log("It's almost 9 in the morning");
}
var Hour= 7;
var Minute= 15;
var Period= "PM";
if(Hour==7 && Minute==15 && Period=="PM"){
  console.log("It's just after 7 in the evening");
}
// Challenge Part:
if(Minute<30){
  console.log("just after the hour");
}
else if(Minute>30){
  console.log("almost the next hour");
}
if(Period== "AM"){
  console.log("in the morning");
}
else if(Period=="PM"){
  console.log("in the evening");
}
// Bonus:
if(Minute==15){
  console.log("it is quarter after", Hour)
}
else if(Minute==30){
  console.log("it is half past", Hour)
}
else if(Minute==45){
  console.log("it is quarter to", Hour)
}
// distinguish between afternoon night noon midnight
if(Hour===6,7,8,9,10,11 && Period=="AM"){
  console.log("it is", Hour, "in the morning")
}
else if(Hour===12 && Period=="PM"){
  console.log("it is", Hour, "o'clock noon")
}
else if(Hour===1,2,3,4,5,6 && Period=="PM"){
  console.log("it is", Hour, "in the afternoon")
}
else if(Hour===7,8,9,10,11 && Period=="PM"){
  console.log("it is", Hour, "at night")
}
else if(Hour===12 && Period=="PM"){
  console.log("it is", Hour, "midnight")
}
else if(Hour===1,2,3,4,5 && Period=="AM"){
  console.log("it is", Hour, "past midnight")
}
