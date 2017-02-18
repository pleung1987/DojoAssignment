class Car(object):
    def __init__(self, price, speed, fuel, mileage, tax):
        self.price = price
        self.speed= speed
        self.fuel= fuel
        self.mileage= mileage
        self.tax= tax

    def price(self):
        if self.price > 10000:
            self.tax = 0.15
        else:
            self.tax= 0.12

    def display(self):
        print "price:" + str(self.price)
        print "Speed:" + str(self.speed)
        print "Fuel:" + str(self.fuel)
        print "Mileage:" + str(self.mileage)
        print "Tax:" + str(self.tax)
    #
    # def reverse(self):
    #     self.miles -=5
    #     print "Reversing"
    #     if self.miles < 0:
    #         self.miles = 0

car1= Car(2000,"35mph", "Full", "15mpg", 0.12)
car2= Car(2000,"5mph", "Not FuLL", "105mpg", 0.12)
car3= Car(2000,"15mph", "Kind of FuLL", "95mpg", 0.12)
car4= Car(2000,"25mph", "FuLL", "105mpg", 0.12)
car5= Car(2000,"45mph", "Empty", "25mpg", 0.12)
car6= Car(20000000,"35mph", "Empty", "15mpg", 0.15)

print "car 1:"
car1.display()
print "car 2:"
car2.display()
print "car 3:"
car3.display()
print "car 4:"
car4.display()
print "car 5:"
car5.display()
print "car 6:"
car6.display()
