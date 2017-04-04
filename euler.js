//   var x = 1;
//
// function euler (){
//
//   for (i=999; i>=100; i--){
//   return  x * i;
//   }
//   console.log(x);
// }

function euler() {
  let x;
  let y;
  let z;
  let i = 999;
  let palindrome = 0;
  let factor2 = 0;

  for (x = 9; x > 0; x--){
    for (y = 9; y >= 0; y--){
      for (z = 9; z >= 0; z--){
        palindrome = 100001 * x + 10010 * y + 1100 * z;
        for (i = 999; i >= 100; i--) {
          if (palindrome % i === 0) {
            factor2 = palindrome / i
            if(factor2 > 999) break;
            if(factor2 >= 100) {
              return (palindrome);
            }
          }
        }
      }
    }
  }
}
console.log(euler());
