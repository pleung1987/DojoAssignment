# Part 1- Write code that prints all the odd numbers from 1 to 1000. Use the for loop and don't use an array to do this exercise.
for i in range(1,1000):
    if i%2!=0:
        print i
        # Be Aware of the Indents inorderfor the code to run!!!

# Part 2- create another program that prints all the multiples of 5 from 5 to 1,000,000.
for y in range (5,1000,5):
    print y
    # Different way of doing it, if we know how much multiple we are going  with and the initial to end number.

a = [1, 2, 5, 10, 255, 3]
sum= 0
for x in a:
     sum += x
     print sum
    #  make sure you seperate sum increment value and print sum in for loop.
    # You can just use print sum(a) to get the sum if do no ask to show each step in forloop

# Assignment- Create a program that prints the average of the values in the list: a = [1, 2, 5, 10, 255, 3]
a = [1, 2, 5, 10, 255, 3]
# sum= 0
# for y in a:
#     sum += y
print sum/len(a)
# Remember to put back the print indent back to exit the for loop
