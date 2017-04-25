function Car (make, model, gasTank, mileage) {
  this.make = make;
  this.model = model;
  this.gasTank = gasTank;
  this.mileage = mileage
}

Car.prototype.range = function () {
  let range = this.gasTank * this.mileage;
  return range;
}

let mpg = new Car('Ford', 'Escape', 5, 31)
let range = mpg.range();

console.log(range);
