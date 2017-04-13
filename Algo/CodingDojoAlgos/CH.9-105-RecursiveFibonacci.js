function rFibonacci(num){
    num = Math.trunc(num) //drops the decimals points
    if (num <= 0 ){
        return 0
    }
    if (num == 1){
        return 1
    }
    return rFibonacci(num-1) + rFibonacci(num-2)
}
console.log(rFibonacci(6.8),rFibonacci(3),rFibonacci(10),rFibonacci(15),rFibonacci(20))
