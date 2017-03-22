// code below this line

function showSmallPic (){
  console.log("http://fillmurray.com/100/100");
let picElement= document.querySelector("p img");
  picElement.src="http://fillmurray.com/100/100";
}
function showBigPic (){
  console.log( "http://fillmurray.com/400/400");
let picElement= document.querySelector("p img");
picElement.src="http://fillmurray.com/400/400";
}

let smallPic= document.querySelector(".smaller");
smallPic.addEventListener("click", showSmallPic);

let bigPic= document.querySelector(".larger");
bigPic.addEventListener("click", showBigPic);
