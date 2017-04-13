function VehicleConstructor(name,wheels,passengers,speed){
    //Private
    var distance_traveled =  0
    var self = this;     //HERE WE HAVE DECLARED SELF to EQUAL THE NEW OBJECT WE CREATE WITH NEW
    var update_distance = function(){
        distance_traveled += self.speed;
        console.log(`${name} traveled a total of: ${distance_traveled} KM`);
    }
    //Public
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.speed = speed;

    this.makeNoise = function() {
        var noise = noise || "Honk Honk";
        console.log(noise);
    }
    this.move = function() {
        this.makeNoise()
        update_distance()
    }
    this.checkMiles = function(){
        console.log(`${distance_traveled} KM`);
    }
}

var Bike = new VehicleConstructor("Bike", 2, 0, 10);
Bike.makeNoise = function(){
    console.log("ring ring")
}

var Sedan = new VehicleConstructor("Sedan", 4, 4, 80);

var bus = new VehicleConstructor("Bus", 6, 0, 60);
this.pickUp = function (newPassengers) {
    bus.passengers += newPassengers;
};
//
//
// console.log(`current passenger on bus: ${bus.passengers}`);
// this.pickUp(10);
// console.log(`current passenger on bus: ${bus.passengers}`);

//test Sports Car
var sportsCar = new VehicleConstructor('sportsCar', 4, 2, 100);
sportsCar.move()
sportsCar.move()
sportsCar.move()
sportsCar.checkMiles()

//test bus
bus.move()
bus.move()
bus.move()
bus.checkMiles()

//test Bike
Bike.move()
Bike.move()
Bike.move()
Bike.checkMiles()
