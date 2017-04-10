// function englishify (num) {
//   console.log(num.toString('one'));
// }
// englishify(1);

let a = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function englishify(number) {
  return a[number];
}
console.log(englishify(10));
//
// let num (){
//   0: "zero",
//   1: "one",
//   2: "two",
//   3: "three",
//   4: "four",
//   5: "five",
//   6: "six",
//
// }
//
// function englishify(num) {
//   if (num >= 0 && nem <= 20) {
//     retrun numbers[num];
//   }
// }
