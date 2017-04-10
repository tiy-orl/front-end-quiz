
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
