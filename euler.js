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
