function getSum(total, sum) {
  return total + sum;
}

function getDifference(total, sum) {
  return total - sum;
}

function getProduct(total, sum) {
  return total * sum;
}

function getQuotient(total, sum) {
  return total / sum;
}

function englishMath(string) {
  if ((string).includes(' plus ')){
    let add = (string).split(' plus ').map(numberify);
    console.log(add.reduce(getSum));

  } else if ((string).includes(' minus ')){
    let minus = (string).split(' minus ').map(numberify);
    console.log(minus.reduce(getDifference));
  }
  if ((string).includes(' times ')){
    let mult = (string).split(' times ').map(numberify);
    console.log(mult.reduce(getProduct));
  }
  if ((string).includes(' divided ')){
    let div = (string).split(' divided ').map(numberify);
    console.log(div.reduce(getQuotient));
  }
}

englishMath('fifty seven plus thirty three');
