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
      //if
      northSouth = northSouth + (coordinateNumber*heading)
    } else {
      eastWest = eastWest + (coordinateNumber*heading)
    }
  }
  console.log("["+eastWest+","+northSouth+"]");
}
movements("3N 12S");
