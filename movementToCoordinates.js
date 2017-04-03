!function(){

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
    let array = str.split(' ');
    return parseArray(array);
  }

  let test = "3N 5E 01S 02W 2S 3W";

  let testCoor = findCoordinates(test);

  console.log(testCoor);

}();
