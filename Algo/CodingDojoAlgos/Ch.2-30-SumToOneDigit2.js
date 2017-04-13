function sumToOne(num){
  var sum = 0;
  var answer = 0;
  while(true){
    while (num!==0){
      sum += num % 10;
      num = Math.floor(num/10);
    }
    answer = Math.floor(sum/10);
    if (answer === 0){
      return sum;
    }
    num = sum;
    sum = 0;
  }
}
console.log(sumToOne(17683));
