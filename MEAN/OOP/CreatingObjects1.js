function VehicleConstructor(name,wheels,passengers){
    var vehicle = {};

    vehicle.name = name;
    vehicle.wheels = wheels;
    vehicle.passengers = passengers;

    vehicle.makeNoise = function() {
        var noise = noise || "Honk Honk";
        console.log(noise);
    }


    return vehicle;
}

var Bike = VehicleConstructor("Bike", 2, 0);
Bike.makeNoise = function(){
    console.log("ring ring")
}
console.log(Bike), Bike.makeNoise()

var Sedan = VehicleConstructor("Sedan", 4, 4);
console.log(Sedan), Sedan.makeNoise();

var bus = new VehicleConstructor("Bus", 6, 0);
console.log(bus);
bus.pickUp = function (newPassengers) {
    bus.passengers += newPassengers;
};


console.log(`current passenger on bus: ${bus.passengers}`);
bus.pickUp(10);
console.log(`current passenger on bus: ${bus.passengers}`);
