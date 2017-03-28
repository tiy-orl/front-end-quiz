// First Generate the Array of Numbers in Fibbonacci.
let fib = [1, 1, 2];
for(let i=3; i <= 32; i++) {
    fib.push(fib[i-2] + fib[i-1]);
}

const getEven = (num) => {
  return num % 2 === 0;
}

// Generate new Array with even numbers.
let evens = fib.filter(getEven);

const sumArray = (a,b) => {
  return a+b;
}

// Add all the elements in the array
let answer = evens.reduce(sumArray, 0);
console.log(answer);
