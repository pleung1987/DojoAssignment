# 1. Find and Replace
str = "If monkeys like bananas, then I must be a monkey!"
print str.rfind('monkey')
# shows monkey in position 42 of the string
print str.replace('monkey','aligator')
# prints and replaces all monkey with aligator

# 2 Min and max
x = [2,54,-2,7,12,98]
print max(x)
print min(x)

y = ["hello",2,54,-2,7,12,98,"world"]
print y[0],y[-1]
item= y[0],y[-1]
y_list= [y[0],y[-1]]
print y_list

z = [19,2,54,-2,7,12,98,32,10,-3,6]
z.sort()
print z
# how to sort list assending

new_z = [y for y in z if y<0]
print new_z
# create item y, if item y in the z list has the item less than 0, then put it in the new_z list.

z.pop(0)
z.pop(0)
# z.remove(-3)
# z.remove(-2)
print z

z.insert(0,new_z)
print z
