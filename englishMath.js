/***********************************
* Chris Lebbano.  Tuesday Quiz
* Write a function that can take in a phrase that represents an addition
* problem and returns the word or phrase representing the answer (wut)
*
* For example:
* englishMath('five plus seventeen') //=> 'twenty two'
**********************************/

const numberify = require('./numberify.js');
const englishify = require('./englishify.js')

function englishMath(str){
  let arr =  str.split('plus');
  let result = parseInt(numberify(arr[0].trim())) + parseInt(numberify(arr[1].trim()));
  return englishify(result);
}

console.log(englishMath('one hundred plus fifty five'));
