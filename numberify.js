/*
Write a function capable of turning the word or phrase for any number from "zero" to "one hundred" to its corresponding integer: numberify('zero') // => 0; numberify('one hundred') // => 100

*/



// var ones=['','one','two','three','four','five','six','seven','eight','nine'];
// var tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
// var teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
//


// var wordsToNum=[0: 'zero', 1: 'one', 2: 'two',  3: 'three', 4: 'four',  5: 'five', 6: 'six', 7: 'six', 8: 'six', 9: 'nine'];

function numberify(num){
  let numLower = num.toLowerCaase();
  if (numLower == 'zero') return 0;
  if (numLower == 'one hundred') return 100;
  if (ones.indexOf(numLower)) != -1){}
}


function convert_hundreds(num){
  if (num>99){
      return ones[Math.floor(num/100)]+" hundred "+convert_tens(num%100);
  }
  else{
      return convert_tens(num);
  }
}

function convert_tens(num){
  if (num<10) return ones[num];
  else if (num>=10 && num<20) return teens[num-10];
  else{
      return tens[Math.floor(num/10)]+" "+ones[num%10];
  }
}

function numberify(num){
  if (num==0) return "zero";
  else return convert_hundreds(num);
}
console.log(numberify(100))
