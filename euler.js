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
