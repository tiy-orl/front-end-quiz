/*

Write a function that takes a string of movements in the four compass
directions and returns a pair of coordinates indicating how far (east, north)
the movements would take you. For example:

yourFunction("1N") would return [0, 1], indicating 0 movement east and 1 movement north
yourFunction("2S 3E") would return [3, -2], indicating 3 movement east and -2 movement north
yourFunction("3N 5E 1S 2W 2S 3W") would return [0, 0]
save your function in movementToCoordinates.js

*/

!function(){

  const coor = (str) => {
    let coordinates = [0,0]; // c[0] is east and west, c[1] is north and south.
    let directions = str.split('');
    directions.forEach( (ele, index) => {
        if (!isNaN(ele) && ele !== ' ') {
          let num = parseInt(ele);
          let char = directions[index + 1];
          console.log(num, char);
          switch (char) {
            case 'N':
              coordinates[1] += num;
              break;
            case 'S':
              coordinates[1] -= num;
              break;
            case 'E':
              coordinates[0] += num;
              break;
            case 'W':
              coordinates[0] -= num;
              break;
          }
        }
    });
    return coordinates;
  }

  let test = "3N 5E 1S 2W 2S 3W";

  let testCoor = coor(test);

  console.log(testCoor);



}();
