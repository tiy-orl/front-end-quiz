function getSum(total, sum) {
  return total + sum;
}

function getDifference(total, sum) {
  return total - sum;
}


function englishMath(string) {
  if ((string).includes(' plus ')){
    let add = (string).split(' plus ').map(numberify);
    console.log(add.reduce(getSum));

  } else if ((string).includes(' minus ')){
    let minus = (string).split(' minus ').map(numberify);
    console.log(minus.reduce(getDifference));
  }
}

englishMath('eight minus five');
