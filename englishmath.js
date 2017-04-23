function englishMath(equation){
  let equationSplit= equation.split(' plus ');
  return englishify(numberify(equationSplit[0]) + numberify(equationSplit[1]));
}
console.log(englishMath('ninety nine plus zero'));
