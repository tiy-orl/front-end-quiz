<<<<<<< HEAD
let startOne = 999;
let startTwo= 999;
let foundPalindrome = false;
let largestPalindrome = "";

function eulerRuleDown (){
while(foundPalindrome == false){
 let possiblePalindromeTwo = startOne * startTwo;
 let flippedPalindrome = possiblePalindromeTwo.toString().split("").reverse().join("");
 if(possiblePalindromeTwo == flippedPalindrome){
   foundPalindrome = true;
   largestPalindrome = possiblePalindromeTwo;
   eulerRuleUp();
 }  else if (startTwo > 100 ){
   startTwo--;
 } else if (startTwo == 100){
   startOne--;
   startTwo = 999;
 }
}
}

function eulerRuleUp(){
  foundPalindrome = false;
  for (i=startTwo+1; i < startOne; i++){
    let possiblePalindrome = i * startOne;
    let flippedPalindrome = possiblePalindrome.toString().split("").reverse().join("");
    if(possiblePalindrome == flippedPalindrome){
      foundPalindrome = true;
      largestPalindrome = possiblePalindrome;
      console.log(possiblePalindrome);
    }
    }
}
eulerRuleDown()
console.log(startOne, startTwo , startOne * startTwo)
=======
function paldindromeTest(number) {
  let arr = (""+number).split("");
  let numArr = (""+number).split("");
  let reversed = arr.reverse();
  reversed = reversed.join('');
  numArr = numArr.join('');
  if (numArr === reversed) {
    return parseInt(numArr);
  }
}

function multiply(){
  let results = [];
  for(let i = 999; i > 99; i--){
    for(let k = 999; k > 99; k--){
      let answer = i * k;
      results.push(paldindromeTest(answer));
    }
  }
  results.sort( (a,b) => {
    return b-a;
  });
  return results;
}

let results = multiply();

console.log(results[0] + ' is the answer.');
>>>>>>> bc36b6de7c1482a3e8e255c97dd179697e2a9b54
