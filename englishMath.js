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
    return add.reduce(getSum);

  } else if ((string).includes(' minus ')){
    let minus = (string).split(' minus ').map(numberify);
    return minus.reduce(getDifference);
  }
  if ((string).includes(' times ')){
    let mult = (string).split(' times ').map(numberify);
    return mult.reduce(getProduct);
  }
  if ((string).includes(' divided ')){
    let div = (string).split(' divided ').map(numberify);
    return div.reduce(getQuotient);
  }
}

console.log(englishify(englishMath('fifty seven times thirty four')));
