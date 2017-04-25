var ones=['','one','two','three','four','five','six','seven','eight','nine'];
var tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
var teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

function numberify(num){
  let numLower = num.toLowerCase();
  if (numLower=='zero') return 0;
  if (numLower == 'one hundred') return 100;
  if (ones.indexOf(numLower) != -1){
    return ones.indexOf(numLower)
  } else if (teens.indexOf(numLower) != -1){
    return teens.indexOf(numLower) + 10;
  }
  else{
    return convert_tens1(numLower);
  }
}
function convert_tens1(numLower){
  let digits = numLower.split(' ');
  if(digits.length >= 2){
  return tens.indexOf(digits[0]) * 10 + ones.indexOf(digits[1])
  }
  return tens.indexOf(digits[0]) * 10
}

console.log(numberify('four'))
