function Car (make, model, gasTank, mileage) {
  this.make = make;
  this.model = model;
  this.gasTank = gasTank;
  this.mileage = mileage;
}

Car.prototype.range = function (){
  return this.gasTank * this.mileage;
}

let detraCar = new Car ("Honda", "Accord", 5, 31);
console.log("Detra's car range is " + detraCar.range());
