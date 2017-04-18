function englishMath(equation){
  let equationSplit= equation.split(' plus ');
  console.log(numberify(equationSplit[0]) + numberify(equationSplit[1]));
}
englishMath('one hundred plus one hundred')
