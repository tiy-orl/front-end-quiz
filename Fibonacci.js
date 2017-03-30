var sequence = [],
 sequence[0] = 0;
 sequence[1] = 1;

for (let i = 2; i <= 33; i++)
{

    sequence[i] = sequence[i - 2] + sequence[i - 1];
    //console.log(sequence[i]);
}


let evens = sequence.filter( number => number % 2 === 0);

let sum = 0;
for (let i = 0; i <evens.length; ii++) {
  sum += evens[i];
}
