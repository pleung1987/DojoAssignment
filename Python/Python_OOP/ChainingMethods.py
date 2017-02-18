class Bike(object):
    def __init__(self,price, max_speed, miles):
        self.price = price
        self.max_speed= max_speed
        self.miles= miles


    def display(self):
        print "This Bike is: ", self.price, self.max_speed, self.miles
        return self

    def ride(self):
        self.miles += 10
        print "Riding"
        return self

    def reverse(self):
        self.miles -=5
        print "Reversing"
        if self.miles < 0:
            self.miles = 0
        return self


bike1= Bike(200,"25mph",0)
bike2= Bike(300,"30mph",0)
bike3= Bike(500,"40mph",0)

# bike1.display()
# bike2.display()
# bike3.display()
#
# bike1.ride()
# bike1.display()
#
# bike2.ride()
# bike2.display()
#
# bike3.ride()
# bike3.display()
#
# bike1.reverse()
# bike1.display()
#
# bike2.reverse()
# bike2.display()
#
# bike3.reverse()
# bike3.display()

# Assignment:
print "bike 1:"
bike1.ride().ride().ride().reverse().display()
print "bike 2:"
bike2.ride().ride().reverse().reverse().display()
print "bike 3:"
bike3.reverse().reverse().reverse().display()
