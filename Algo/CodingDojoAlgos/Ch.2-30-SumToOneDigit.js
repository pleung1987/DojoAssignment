
function sumDigits(num){
  var sum = 0;
  while (num != 0) {
      sum += num % 10;
      num = Math.floor(num/10);
  }
  return sum;
}

function sumToOne(digits){
  var sum = sumDigits(digits);
  while(Math.floor(sumDigits(sum/10))!==0){
    sum= sumDigits(sum);
  }
console.log(sum);
}
sumToOne(17683)
