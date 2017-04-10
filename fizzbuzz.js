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
}
