var daysUntilMyBirthday= 60;

while(daysUntilMyBirthday >=0){

if(daysUntilMyBirthday===0){
  console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«")
}
else if(daysUntilMyBirthday===1){
  console.log(daysUntilMyBirthday,"DAY LEFT!! OMG! OMG!")
}
else if(daysUntilMyBirthday<5){
  console.log(daysUntilMyBirthday,"DAYS LEFT!! OMG! OMG!")
}
else if(daysUntilMyBirthday<30){
  console.log(daysUntilMyBirthday, "DAYS UNTIL MY BIRTHDAY!!!");
}
else if(daysUntilMyBirthday>30){
  console.log(daysUntilMyBirthday, "days until my birthday. Such a long time... :( ");
}
daysUntilMyBirthday--;
}
