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

  const parseString = (str) => {
    return str.split(' ');
  }

  const parseArray = (arr) => {
    let coordinates = [0,0];
    arr.forEach( (ele, index) => {
      if(ele.includes('N')) {
        coordinates[1] += parseInt(ele);
      } else if (ele.includes('S')) {
        coordinates[1] -= parseInt(ele);
      } else if (ele.includes('E')) {
        coordinates[0] += parseInt(ele);
      } else if (ele.includes('W')) {
        coordinates[0] -= parseInt(ele);
      }
    })
    return coordinates;
  }

  const findCoordinates = (str) => {
    let array = parseString(str);
    return parseArray(array);
  }

  let test = "33N 5E 01S 02W 2S 3W";

  let testCoor = findCoordinates(test);

  console.log(testCoor);



}();
