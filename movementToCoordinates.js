<<<<<<< HEAD
function movements(directions){
  let directionSplit = directions.split(' ');
  let northSouth = 0;
  let eastWest = 0;
  let heading = 1;
  for (i=0; i<directionSplit.length; i++){
    let coordinateNumber = directionSplit[i].slice(0,directionSplit[i].length-1);
    let coordinateDirection = directionSplit[i].slice(directionSplit[i].length-1);
    if ((coordinateDirection == "S") || (coordinateDirection == "W")){
      heading = -1;
    }else{
      heading = 1;
    }
    if (directionSplit[i].includes("N") || directionSplit[i].includes("S")){
      northSouth += coordinateNumber*heading;
    } else {
      eastWest += coordinateNumber*heading;
    }
  }
  console.log("["+eastWest+","+northSouth+"]");
  //return [eastWest,northSouth];
  //return [0,1]
}
movements("3N 12S");
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
>>>>>>> bc36b6de7c1482a3e8e255c97dd179697e2a9b54
