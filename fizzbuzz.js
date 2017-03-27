for (i = 1; i <= 100; i++) {

if (i % 3 === 0 && i % 5 === 0) {
  test3 = "fizzbuzz";
  console.log(test3);
}
else if (i % 3 === 0) {
  let test = "fizz";
  console.log(test);
}
else if  (i % 5 === 0){
  test2 = "buzz";
  console.log(test2);
}
else {
  console.log(i);
}
}
