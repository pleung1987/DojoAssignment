name = "Patrick"
name = "Paddie"
print name
print 300*512
print 'Hi my name is' + ' paddie 5'
print 'this is my interger:' + '512'

name = 5
print "My name is", name

# name = 5
# print "My name is " + name
# doesn't work with intergers plus together

first_name = "Zen"
last_name = "Coder"
print "My name is {} {}".format(first_name, last_name)
# Lastly, you can use curly brackets - {} - and the string .format() method to inject variables into your string
# - this is known as string interpolation.

my_string = 'hello world'
print my_string.capitalize()
# the output would be:
# Hello world

my_string = 'Hello WORLD'
print my_string.lower()
# the output would be:
# hello world

my_string = 'Hello WORLD'
print my_string.swapcase()
# the output would be:
# hELLO world

my_string = 'Hello WORLD'
print my_string.swapcase()
# the output would be:
# hELLO world

my_string = 'hello world'
print my_string.upper()
# the output would be:
# HELLO WORLD

# Determine if a specified string (in this example, 'el') occurs in a given string and returns the index or location of where the substring ('el') occurred from the string. If not found, it will return -1 as a result.
my_string = "hello world"
print my_string.find("el")
# the output would be:
# 1

# This method returns a copy of the string with all occurrences of substring old replaced by new. If the optional argument max is given, only the first number of times indicated in max will you have the substring old replaced.

my_string = "hello world"
print my_string.replace("world", "kitty")
# the output would be:
# hello kitty


my_string = "egg, egg, Spam, egg and Spam"
print my_string.replace("egg", "Spam", 2)
# the output would be:
# Spam, Spam, Spam, egg and Spam
# notice that only the first 2 "egg" matches were replaced in the string.

# LISTS #

ninjas = ['Rozen', 'KB', 'Oliver']
my_list = ['4', ['list', 'in', 'a', 'list'], 987]
empty_list = []
