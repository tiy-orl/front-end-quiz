// code below this line

let myImage = document.querySelector('p img')

function changeSmallPicture () {
  myImage.src = "http://fillmurray.com/100/100";
}

let buttonSmall = document.querySelector('button.smaller');
  buttonSmall.addEventListener('click', changeSmallPicture);


function changeLargePicture () {
  myImage.src = "http://fillmurray.com/400/400";
}

let buttonLarge = document.querySelector('button.larger');
  buttonLarge.addEventListener('click', changeLargePicture);
