let printValue;
for (i=1; i<=100; i++){
  printValue = i;
  if (i%3 == 0){
    printValue = "fizz";
  }
  if (i%5 == 0){
    printValue = "buzz";
  }
  if (i%15 == 0){
    printValue = "fizzbuzz";
  }
  console.log(printValue);
}
