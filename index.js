// code below this line
<<<<<<< HEAD

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
=======
/*function showSmallPic (){
  console.log("http://fillmurray.com/100/100");
let picElement= document.querySelector("p img");
  picElement.src="http://fillmurray.com/100/100";
}*/
function showPicSize (event){
  let button = event.target;
  let whereThePictureGoes = document.querySelector("p img");
  let size = button.dataset.size;
  whereThePictureGoes.src = "http://fillmurray.com/"+size+"/"+size;
/*  console.log( "http://fillmurray.com/400/400");
let picElement= document.querySelector("p img");
picElement.src="http://fillmurray.com/400/400";*/
}

let sizeButtons= document.querySelectorAll("button");
//smallPic.addEventListener("click", showSmallPic);
for (let i=0; i < sizeButtons.length; i++){
  let button = sizeButtons[i];
  button.addEventListener("click", showPicSize);
}
//let bigPic= document.querySelector(".larger");
//bigPic.addEventListener("click", showBigPic);
>>>>>>> 24973dcf25f6bbf637f8fda6cef5c586a7f369c7
