//
// let quarter = 0.25;
// let dime = 0.10;
// let nickel = 0.05;
// let penny = 0.01;
//
//
// function change (amountPaid, itemPrice) {
//   let totalChange = amountPaid - itemPrice;
//
//   if (totalChange === quarter) {
//     return quarter;
//   }
//   else if (totalChange === quarter + penny) {
//     return quarter + penny;
//   }
//   else if (totalChange === (quarter * 2) + dime + (penny * 2)) {
//     return (quarter * 2) + dime + (penny * 2);
//   }
// }
//   console.log(change(2.00, 1.74));


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
}
