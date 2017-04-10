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
}

let twenties = {
  20: 'twenty'
}

let thirties = {
  30: 'thirty'
}


function englishify(num) {
    if (num >= 0 && num <= 20) {
        return numbers[num];
    }
    if (num === 20) {
        return twenties[num];
    }
    if (num > 20) {
        stringNumber = num.toString().split('');
        if (stringNumber[0] === '2') {
            let digitOne = 'twenty';
            let secondDigit = parseInt(stringNumber[1]);
            if (secondDigit >= 1 && secondDigit <= 9) {
                return digitOne + numbers[secondDigit];
            }
        }
    }
    if (stringNumber[0] === '3') {
        let digitOne = 'thirty';
        let secondDigit = parseInt(stringNumber[1]);
        if (secondDigit >= 1 && secondDigit <= 9) {
            return digitOne + numbers[secondDigit];
        }

    }
}


console.log( englishify(33) );
