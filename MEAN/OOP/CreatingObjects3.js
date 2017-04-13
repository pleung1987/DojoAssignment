function VehicleConstructor(name,wheels,passengers,speed){
    if(!(this instanceof VehicleConstructor)){
        return new VehicleConstructor(name,wheels,passengers,speed);
    }
    //String used to generate random VIN Number
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"  //total of 37 characters
    // Nothing can be Private in ProtoTypes since it will be shared among all instances created
    //Public
    this.distance_traveled =  0
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.speed = speed;
    //invoke create VIN to generate random vin number
    this.vin = createVin()
    function createVin(){
        var vin = '';
        for(var i= 0; i < 17; i++){
            vin += chars[Math.floor(Math.random()*36)];
            }
        return vin;          // remember to return in order to generate the vin
        }
    }
    //Make sure everything refers to this, since its a part of the prototype of instance VehicleConstructor
    VehicleConstructor.prototype.makeNoise = function(noise) {
        var noise = noise || "Honk Honk";
        console.log(noise);
        return this;
    }
    VehicleConstructor.prototype.move = function() {
        this.makeNoise();
        this.update_distance();
        return this;
    }
    VehicleConstructor.prototype.checkMiles = function(){
        console.log(`${this.distance_traveled} KM`);
        return this;
    }
    VehicleConstructor.prototype.update_distance = function(){
        this.distance_traveled += this.speed;
        console.log(`${this.name} traveled a total of: ${this.distance_traveled} KM`);
        return this;
    }


// var Bike = new VehicleConstructor("Bike", 2, 0, 10);
// Bike.makeNoise = function(){
//     console.log("ring ring")
// }
//
// var Sedan = new VehicleConstructor("Sedan", 4, 4, 80);
//
// var bus = new VehicleConstructor("Bus", 6, 0, 60);
// this.pickUp = function (newPassengers) {
//     bus.passengers += newPassengers;
// };
//
//
// console.log(`current passenger on bus: ${bus.passengers}`);
// this.pickUp(10);
// console.log(`current passenger on bus: ${bus.passengers}`);

//test Sports Car
var sportsCar = new VehicleConstructor('sportsCar', 4, 2, 100);
sportsCar.move().move().move().checkMiles().update_distance()
console.log(sportsCar)
