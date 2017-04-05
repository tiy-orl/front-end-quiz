<<<<<<< HEAD

function direction (string) {
  let smallerStrings = string.split(" ");
  let northSouth = 0;
  let eastWest = 0;
  smallerStrings.forEach(smallStrings => {
    let steps = parseInt(smallStrings);
  if (smallStrings.includes("S")) {
    northSouth += -1 * steps;
  } else if (smallStrings.includes("N")) {
    northSouth += 1 * steps;
  } else if (smallStrings.includes("W")) {
    eastWest += -1 * steps;
  } else {
    eastWest += 1 * steps;
  }
})
  return [eastWest, northSouth]
}

console.log(direction("3S 15E"));
=======
!function(){

  const findCoordinates = (str) => {
    let arr = str.split(' ');
    let coordinates = [0,0];
    arr.forEach( (ele) => {
      if(ele.includes('N')) {
        coordinates[1] += parseInt(ele);
      } else if (ele.includes('S')) {
        coordinates[1] -= parseInt(ele);
      } else if (ele.includes('E')) {
        coordinates[0] += parseInt(ele);
      } else {
        coordinates[0] -= parseInt(ele);
      }
    })
    return coordinates;
  }

  let test = "3N 5E 01S 02W 2S 3W";

  let testCoor = findCoordinates(test);

  console.log(testCoor);

}();
>>>>>>> 0c3abbdf8f2101f6958c8369e649ea158a418fd5
