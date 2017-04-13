function ClockAngles(time){
  var second= (360/60)*time; //the degrees it move every time or second, 6 degrees every time to get 1 second.
  var minute= ((360/60)/60)*time; //0.1 degrees every time to get 1 minute.
  var hour= (((360/60)/60)/12)*time; //0.0083 degrees every time to get 1 hour.

  if(second>360){
    second%=360;
  }
  if(minute>360){
    minute%=360;
  }
  if(hour>360){
    hour%=360;
  }
  console.log(hour,minute,second);
}
ClockAngles(119730)
