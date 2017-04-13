x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
// Add a new value (100) in the array x using a push method.
x.push(100)
// Add a new array ["hello", "world", "JavaScript is Fun"] to variable x
x.push(["hello", "world", "JavaScript is Fun"])
//  Log x in the console and analyze how x looks now.
console.log(x)
// Write a loop that will go through the array [1, 5, 90, 25, -3, 0],
    //find the minimum value, and then print it
var arr = [1, 5, 90, 25, -3, 0]
min = arr[0]
for(var i= 0; i<arr.length; i++){
    if (min > arr[i]){
        min = arr[i];
    }
}
console.log("minimum:", min)

// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all
    //of the values, and then print it
var arr2 = [1, 5, 90, 25, -3, 0]
sum = 0
for(var i= 0; i<arr2.length; i++){
    sum = sum + arr[i]
    }
console.log("average:", sum/arr2.length)
