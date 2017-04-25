/*
Write a constructor function for a car, which has make, model, gasTank,
and mileage. Write a range method for a car, which will tell how far the car
can go based on what's in the tank.

For example, a car with 5 gallons of gas which gets 31 mpg would have a
range value of 155.
*/

function Car (options) {
  this.make    = options.make;
  this.model   = options.model;
  this.gasTank = options.gasTank;
  this.mileage = options.mileage;
}

Car.prototype.range = function(){
  let gasTank = parseInt(this.gasTank);
  let mileage = parseInt(this.mileage);
  let range = gasTank * mileage;
  return range;
};

let myCar = new Car({make: 'Honda', model: 'Civic', gasTank: '5', mileage: '31'});
console.log(myCar.range());
