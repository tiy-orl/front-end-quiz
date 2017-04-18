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
