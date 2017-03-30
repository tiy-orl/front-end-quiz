// code below this line
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

let buttonClicks = 0;

function trackingClicks(){
  buttonClicks++;
  numberOfClicks.textContent = buttonClicks;
  let counter = 0;
  for (let i = 1; i <= buttonClicks; i++){
    if (buttonClicks % i === 0){
      counter++
    }
  }
  if (counter === 2){
    alert(buttonClicks + ' IS A PRIME NUMBER!');
  }
}

let button = document.querySelector('.prime')
button.addEventListener('click', trackingClicks)
let numberOfClicks = document.querySelector('.number')
