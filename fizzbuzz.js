var myArray = [];
for (var i = 0; i <= 100; i++) {
  if (i%3 === 0 && i%5 === 0) {
    let answer = "fizzbuzz";
    console.log(answer);
  }
  else if (i%3 === 0 ) {
    let answer = "fizz";
    console.log(answer);
  }
  else if (i%5 === 0) {
    let answer = "buzz";
    console.log(answer);
  }
  else {
    let answer = [i];
    console.log(answer);
  }
}
