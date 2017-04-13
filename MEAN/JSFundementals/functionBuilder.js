//Basic: Make a function that can be used anywhere in your file and that when invoked will
// console.log('I am running!'); Give it the name runningLogger.

function runninglogger(){
    console.log('i am running!')
}

// Basic: Make a function that is callable, has one parameter and multiplies the value of the
//  parameter by 10 before returning the result. Give it the name multiplyByTen. Invoke it,
//  passing it the argument 5.

function multiplyByTen(num){
    if (typeof(num) == "number"){
    return num * 10;
    }
}
console.log(multiplyByTen(5));

// Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different
// hard-coded string

function stringReturnOne(){
    return "cat";
}

function stringReturnTwo(){
    return "dog";
}

// Medium: Write a function named caller that has one parameter. If the argument provided to caller
//  is a function (typeof may be useful), invoke the argument. Nothing is returned.

function myFunctionRunner(param){
    if(typeof(param)=="function"){
        param();
    }
}
myFunctionRunner(stringReturnOne);

// Medium: Write a function named myDoubleConsoleLog that has two parameters. if the arguments passed to
// the function are functions, console.log the value that each function returns when invoked.

function myDoubleConsoleLog(param1,param2){
    if(typeof(param1)=="function" && typeof(param2)=="function"){
        console.log(returnFive(),returnHello())         //console log the functions that are invoked
    }
}
myDoubleConsoleLog(stringReturnOne,stringReturnTwo)


function returnFive(){
    return 5;
}

function returnHello(){
    return "hello"
}
// Hard: Write a function named caller2 that has one parameter. Have it console.log the string 'starting',
//  wait 2 seconds, and then invokes the argument if the argument is a function.
// (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and return “interesting”.
// Invoke this function by passing it myDoubleConsoleLog.

function caller2(param){
    console.log("starting");
    var x = setTimeout(             //setTimeout passed in two arguements: (function, [delay in milliseconds])
        function(){
        if (typeof(param) == "function"){   //if given parameter is a function, then invoke the parameter
            console.log("About to invoke function...")
            param(returnFive,returnHello)  //invoked paramter
        }
    }, 2000);
    console.log("Ending?");
    return "interesting";
}
console.log(caller2(myDoubleConsoleLog));
