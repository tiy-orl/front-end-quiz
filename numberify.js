/*
* Chris Lebbano
* Issue #81, numberify.
* Write a function capable of turning the word or phrase for any number from
* "zero" to "one hundred" to its corresponding integer:
* numberify('zero') // => 0; numberify('one hundred') // => 100
*/

var tensStr  = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
var onesStr  = ['','one','two','three','four','five','six','seven','eight','nine'];
var teensStr = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

function numberify(str) {
  str = str.toLowerCase();
  if (str === 'one hundred') return 100;
  if (str === 'zero') return '0';
  if (teensStr.includes(str)){
    let num = teensStr.indexOf(str);
    return '1' + num.toString();
  }
  let arr = str.split(' ');
  if (arr.length === 2) {
    let tens = tensStr.indexOf(arr[0]);
    let ones = onesStr.indexOf(arr[1]);
    return [tens, ones].join('');
  } else if (arr.length === 1) {
    if(tensStr.includes(arr[0])){
      return parseInt(tensStr.indexOf(arr[0]) + '0');
    }
    return onesStr.indexOf(arr[0]);
  }
}


module.exports = numberify;
