# odd and even assignment
def odd_even():
    for x in range(1,2001):
        if x%2!=0:
            print "Number is ", x , "This is an odd number."
        if x%2==0:
            print "Number is ", x , "This is an even number."
    return x
result= odd_even()
print result

# Multiply Assignment
def multiply(arr,b):
    for i in range(len(arr)):
        arr[i] *=b
    return arr
print multiply([2,4,10,16],5)


# Hacker Challenge
def layered_multiples(arr):
    new_arr=[]
    for i in range(len(arr)):
        sub_arr=[]
        for j in range(arr[i]):
            sub_arr.append(1)
        new_arr.append(sub_arr)
    return new_arr
# x = layered_multiples([1,2,3])<-- use this to not confuse yourself, as long as it doesn't multiply each other thats the amount of 1s we want in our new array.
x = layered_multiples(multiply([2,4,5],3))
print x


# How to Debug your Python Code. Use Print values in each line to see if each line of code of outcome you expeceted is running properlly.
def multiply(arr,num): #don't go inside the function until the function is called
    for x in range(len(arr)):
        arr[x] *= num
    return arr
a = [2,4,10,16]
b = multiply(a,5) # now our function executes; what is a function call equal to?
print b # and the resulting value is printed

# So far, we don't have too many questions. Here's what happened, in order:
#
# declare a function
# instantiate a variable whose value is a list containing integers
# print the output of that function by calling it after a print statement
