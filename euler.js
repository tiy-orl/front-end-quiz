let foundPalindrome = false;
let numOne ="";
let numTwo = "";
let possiblePalindrome = "";
function eulerRule (){
  while(foundPalindrome == false){
  for (i = 900; i <= 999; i++ ){
    for(j = 900; j <= 999; j++){
       possiblePalindrome = i * j;
      let flippedPalindrome = possiblePalindrome.toString().split("").reverse().join("");
      if (possiblePalindrome == flippedPalindrome){
        foundPalindrome = true;
        numOne = i;
         numTwo = j;
        break;
        console.log(i,j, possiblePalindrome);
      }
// console.log(i,j, possiblePalindrome)
    }
  }
}
}
eulerRule()
console.log(numOne,numTwo, numOne * numTwo)

// let startOne = 999;
// let startTwo= 999;
//
// function eurlerRule2 (){
// while(foundPalindrome == false){
//   let possiblePalindromeTwo = startOne * startTwo;
//   let flippedPalindrome = possiblePalindromeTwo.toString().split("").reverse().join("");
//   if(possiblePalindromeTwo == flippedPalindrome){
//     foundPalindrome = true;
//   }  else if (startTwo > 100 ){
//     startTwo--;
//   } else if (startTwo == 100){
//     startOne--;
//     startTwo = 999;
//   }
// }
// }
// eurlerRule2()
// console.log(startOne, startTwo , startOne * startTwo)
