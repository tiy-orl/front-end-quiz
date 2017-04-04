// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

function largestPalindrome() {
  let palArr = [];
  for (let x = 999; x>100; x--){
    for (let y = 999; y>100; y--){
      let ans = y * x;
      if (isPalindrome(ans)){
        palArr.push(ans);
        break;
      }
    }
  }
  //  return Math.max.apply(Math, palArr);
  return Math.max(...palArr);
}

function isPalindrome(x){
  return x.toString() == x.toString().split('').reverse().join('');
}

console.log(largestPalindrome());
//ans = x * y
