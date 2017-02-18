class Animals(object):
    def __init__(self, name, health):
        self.name = name
        self.health= 100

    def walk(self):
        self.health -= 1
        print "Start Walking"
        return self

    def run(self):
        self.health -=5
        print "Start Running"
        return self

    def displayHealth(self):
        print "Health: ", self.name, self.health
        return self

animal1= Animals("Kitty",100)
animal1.walk().walk().walk().run().run().displayHealth()

class Dog(Animals):
    def pet(self):
        self.health += 5
        print "Enjoy pet"
        return self

Doggie= Dog("Doggie", 150)
Doggie.walk().walk().walk().run().run().pet().displayHealth()

class Dragon(Animals):
    def fly(self):
        self.health -= 10
        print "Start Flying"
        return self
    def displayHealth(self):
        print "This is a Dragon! ", self.name, self.health
        return self
Drogon= Dragon("Drogon", 170)
Drogon.walk().walk().walk().run().run().fly().fly().displayHealth()
