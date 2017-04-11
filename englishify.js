let numbers =   {
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
  20: 'twenty'
}

let tensPlace = {
  2: 'twenty',
  3: 'thirty',
  4: 'fourty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety',
}

function generateOnes(num){
  let arr = num.toString().split('');
  let ones = parseInt(arr[arr.length-1]);
  if (ones === 0) {
    return '';
  }
  return numbers[ones];
}

function generateTens(num){
  let arr = num.toString().split('');
  let tens = tensPlace[parseInt(arr[arr.length-2])];
  return tens;
}

function englishify(num) {
  if (num >= 0 && num <= 20) {
    return numbers[num];
  } else if (num >= 21 && num < 100) {
    return `${generateTens(num)} ${generateOnes(num)}`;
  } else if (num === 100) {
    return 'one hundered';
  }
  return 'Please enter a number between 0 and 100 inclusive.';
}


englishify(100);

for(let i = 0; i <= 100; i++){
  console.log(englishify(i));
}
