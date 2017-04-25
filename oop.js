function Car (make, model, gasTank, mileage){
  this.make = make;
  this.model = model;
  this. gasTank = gasTank;
  this.mileage = mileage;
}

Car.prototype.mpg = function(){
  let mpg = this.gasTank * this.mileage;
  return mpg;
}

let newCar = new Car ('Ford', 'Focus', 5, 31)

console.log(newCar.mpg());
