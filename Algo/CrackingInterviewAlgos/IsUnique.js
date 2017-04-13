//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additonal data structures?

function isUnique(str){
    if (str.length>128){
        return false;
    }
    else{
    function() char_set = new boolean[128];
    for(int i = 0; i<str.length(); i++){
        int val = str.charAt(i);
        if(char_set[val]){
            return false;
        }
        char_set[val] = true;
    }
    return true;
}
isUnique("hello")
