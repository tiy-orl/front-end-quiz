function getChange(amountPaid, purchasePrice){
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
    } else{
      coins.pennies++;
      change -= .01;
    }
  }
  console.log(coins);
}
getChange(1.74,2);
