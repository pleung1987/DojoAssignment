// You are given string containing '0', '1', and '?'. For every '?' can either expand to 0 or 1.
// How many possibilities are there?

function BSE(str){
    for(var i = 0; i < str.length; i++){
        if(str[i] == '?'){
            str = BSE(str.slice(0,i)+0+str.slice(i+1)) + " " + BSE(str.slice(0,i)+1+str.slice(i+1));
        }
    }
    return str;
}
console.log(BSE("1?0?0?0?1").split(" "))  //.split(" ") turns strings into array
