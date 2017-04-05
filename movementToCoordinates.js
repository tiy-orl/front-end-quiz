
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
