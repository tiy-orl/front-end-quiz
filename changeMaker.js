<<<<<<< HEAD
function changeMaker(amountPaid, purchasePrice){
  let coins = {quarters: 0, dimes: 0, nickels: 0, pennies:0}
  let change = Math.abs(purchasePrice - amountPaid);
  while (change > 0.01){
    if (change >= .25){
      coins.quarters++;
      change -= .25;
    } else if (change >= .10){
      coins.dimes++;
      change -= .10;
    } else if (change >= .05){
      coins.nickels++;
      change -= .05;
    } else {
      coins.pennies++;
      change -= .01;
    }
  }
  console.log(coins);
}
changeMaker(1.74,2);
=======
function changeMaker (amountPaid, purchasePrice) {
  let changeInPennies = (amountPaid - purchasePrice) * 100;
  const coinValues = {
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  };
  let change = {};
  Object.keys(coinValues).forEach(coinName => {
    numberOfCoins = parseInt(changeInPennies / coinValues[coinName]);
    change[coinName] = numberOfCoins;
    changeInPennies -= numberOfCoins * coinValues[coinName];
  });
  return change;
>>>>>>> bc36b6de7c1482a3e8e255c97dd179697e2a9b54
