
let numbers = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty'
}

function englishify(num) {
  let ones = num % 10;
  if ((num >= 10) && (ones !== 0)) {
    if (num < 30){
      return "twenty-" + numbers[ones] ;
    }
    if (num < 40){
      return "thirty-" + numbers[ones] ;
    }
  }
  return numbers[num];
}

console.log( englishify(5) );
