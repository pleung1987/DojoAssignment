class Bike(object):
    def __init__(self,price, max_speed, miles):
        self.price = price
        self.max_speed= max_speed
        self.miles= miles

    def display(self):
        print "This Bike is: ", self.price, self.max_speed, self.miles

    def ride(self):
        self.miles += 10
        print "Riding"

    def reverse(self):
        self.miles -=5
        print "Reversing"
        if self.miles < 0:
            self.miles = 0


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

bike1.ride()
bike1.ride()
bike1.ride()
bike1.reverse()
bike1.display()

bike2.ride()
bike2.ride()
bike2.reverse()
bike2.reverse()
bike2.display()

bike3.reverse()
bike3.reverse()
bike3.reverse()
bike3.display()
