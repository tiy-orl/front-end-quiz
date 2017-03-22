// code below this line
/*function showPic (event){
  console.log("http://fillmurray.com/100/100");
let picElement= document.querySelector(".Murray Small");
  picElement.src="http://fillmurray.com/100/100";
}
function showPic (){
  console.log( "http://fillmurray.com/400/400");
let picElement= document.querySelector(".Murray Big");
picElement.src="http://fillmurray.com/400/400";
}
*/

function showPic (event) {
      let button = event.target;
      let whereTheSmallGoes = document.querySelector('p img');
      whereTheSmallGoes.src = button.dataset.picture;


    }


//let smallPic= document.querySelector(".smaller");
//smallPic.addEventListener("click", showPic);

//let bigPic= document.querySelector(".larger");
//bigPic.addEventListener("click", showBigPic);


let buttons = document.querySelectorAll('button');
  for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener('click', showPic);
  }
