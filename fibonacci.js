let fCurrent = 0;
let fEvenSum = 0;
//let fCurrent = 1;
let fCurrentMinus1 = 1;
let fCurrentMinus2 = 0;
let fStopSum = 4000000;
while (fCurrent<fStopSum){
  fCurrent = fCurrentMinus1 + fCurrentMinus2;
  if (fCurrent % 2 == 0){
    fEvenSum = fEvenSum + fCurrent;
  }
  //console.log(fCurrent);
  fCurrentMinus2 = fCurrentMinus1;
  fCurrentMinus1 = fCurrent;
}
console.log("Even Sum: ",fEvenSum);
