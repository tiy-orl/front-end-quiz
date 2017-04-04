<<<<<<< HEAD
let printValue;
for (i=1; i<=100; i++){
  if (i%15 == 0){
    printValue = "fizzbuzz";
  }else if (i%3 == 0){
    printValue = "fizz";
  }else if (i%5 == 0){
    printValue = "buzz";
  }else {
    printValue = i;
  }
  console.log(printValue);
=======

for (var i = 1; i <= 100; i++) {
  if (i%3 === 0 && i%5 === 0) {
    console.log("fizzbuzz");
  }
  else if (i%3 === 0 ) {
    console.log("fizz");
  }
  else if (i%5 === 0) {
    console.log("buzz");
  }
  else {
    console.log(i);
  }
>>>>>>> 5a7b6f07169040f39535c2539d3bea5c8c007f68
}
