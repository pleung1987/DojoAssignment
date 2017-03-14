//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

class Animal {
    let name : String;
    var health : Int;
    init (name: String, health: Int=100) {
        self.name = name;
        self.health = health;
    }
    func displayHealth(){
        print ("\(self.name) ~ \(self.health)health")
    }
}

class Cat:Animal {  //creating a sub-class of Animal-> Cat)
    override init(name: String, health: Int=150){
        super.init(name:name, health:health)
    }
    
    func growl(){
        print ("RAWR!")
    }
    
    func run(){
        if health > 10{
            print("Running")
            self.health -= 10;
        }
        else{
            print ("insignificant health to run")
        }
    }
}

class Lion:Cat {
    init(name: String){
        super.init(name:name, health:200)
    }
    override func growl(){
        print ("ROAR!!!! I am the King of the Jungle")
    }
}

class Cheetah:Cat {
    init(name: String){
        super.init(name: name)
    }
    override func run(){
        if health >= 50 {
        print("Running super fast")
        self.health -= 50
        }
        else{
            print ("insignificant health to run")
        }
    }
    func sleep(){
        if self.health + 50 <= 150 {
            print ("Sleeping to recover health...")
            self.health += 50
        }
        else{
            print ("already full health")
        }
    }
}

var cheetos:Cheetah = Cheetah(name: "cheetos")
for _ in 1...4{
cheetos.run()
}
for _ in 1...5{
cheetos.sleep()
}
cheetos.displayHealth()

var leo:Lion = Lion(name:"leo")
leo.run()
leo.displayHealth()
leo.growl()
