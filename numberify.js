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
  if (teensStr.includes(str)){
    let num = teensStr.indexOf(str);
    num = '1' + num.toString();
    return num;
  }
  let arr = str.split(' ');
  let tens = tensStr.indexOf(arr[0]);
  let ones = onesStr.indexOf(arr[1]);
  let result = [tens, ones];
  return result.join('');

}

for (let i = 0; i < teensStr.length; i++){
  console.log(numberify(teensStr[i]));
}
console.log(numberify('eleven'));
