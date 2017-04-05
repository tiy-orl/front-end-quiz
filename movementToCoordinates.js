
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
