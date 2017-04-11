
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

function generateStr(str, num){
  let arr = num.toString().split('');
  return str + numbers[parseInt(arr[arr.length-1])];
}

  if (num >= 21 && num <= 29) {
    let str = generateStr('twenty ', num);
    return str;
  }
  if(num === 30){
    return 'thirty';
  }
  if (num >= 31 && num <= 39){
    let str = generateStr('thirty ', num);
    return str;
  }
  return 'Please enter a number between 0 and 39 inclusive.';
}

for(let i = 0; i < 40; i++){
  console.log(englishify(i));
}
