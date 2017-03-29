// code below this line
/*function showSmallPic (){
  console.log("http://fillmurray.com/100/100");
let picElement= document.querySelector("p img");
  picElement.src="http://fillmurray.com/100/100";
}*/
// function showPicSize (event){
//   let button = event.target;
//   let whereThePictureGoes = document.querySelector("p img");
//   let size = button.dataset.size;
//   whereThePictureGoes.src = "http://fillmurray.com/"+size+"/"+size;
// /*  console.log( "http://fillmurray.com/400/400");
// let picElement= document.querySelector("p img");
// picElement.src="http://fillmurray.com/400/400";*/
// }
//
// let sizeButtons= document.querySelectorAll("button");
// //smallPic.addEventListener("click", showSmallPic);
// for (let i=0; i < sizeButtons.length; i++){
//   let button = sizeButtons[i];
//   button.addEventListener("click", showPicSize);
// }
//let bigPic= document.querySelector(".larger");
//bigPic.addEventListener("click", showBigPic);


//1. Count clicks on button
//2. Choose if num of clicks is prime

let clicks = 0;
   function clickME() {
       clicks += 1;
       //document.getElementById("clicks").textContent = clicks;
       mySpan.textContent = clicks;
       let count = 0;
       for (let i = 1; i <= clicks; i++) {
         if (clicks % i === 0){
           count++
         }
        }
        if (count === 2){
          alert('prime number');
        }
}
let button = document.querySelector(".prime")
button.addEventListener('click', clickME)

let mySpan = document.querySelector(".number")






// let clicks = 0;
//
// function onClick (){
//   pickles += 1;
//   pickles = document.querySelector("button.prime");
//   // document.querySelector.span.number.textContent = pickles;
//   console.log(pickles);
// }
//
// //
// button.prime.addEventListener("click", onClick);


// let buttons - document.querySelector('button.prime');
//   for (let i = 0; i < buttons.length; i++) {
//     let button = buttons[i];
//     button.addEventListener('click', function (){
//       let whereTheNumberGoes
//     })
//   }
