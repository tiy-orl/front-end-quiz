var fib = [];

fib[0] = 0;
fib[1] = 1;
for(i=2; i<=33; i++)
{

   fib[i] = fib[i-2] + fib[i-1];
    //console.log(fib[i]);
}

var evens = fib.filter( number => number % 2 === 0);
// console.log(evens);

var sum = 0;
for (var i = 0; i < evens.length; i++){
  sum += evens[i]

}

console.log(sum);
