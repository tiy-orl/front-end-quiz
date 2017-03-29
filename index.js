// code below this line

function showPicSize (event){
  let button = event.target;
  let whereThePictureGoes = document.querySelector("p img");
  let size = button.dataset.size;
  whereThePictureGoes.src = "http://fillmurray.com/"+size+"/"+size;
/*  console.log( "http://fillmurray.com/400/400");
let picElement= document.querySelector("p img");
picElement.src="http://fillmurray.com/400/400";*/
}


let sizeButtons= document.querySelectorAll(".bill");
//smallPic.addEventListener("click", showSmallPic);
for (let i=0; i < sizeButtons.length; i++){
  let button = sizeButtons[i];
  button.addEventListener("click", showPicSize);
}
//let bigPic= document.querySelector(".larger");
//bigPic.addEventListener("click", showBigPic);

let counter = 0;
let clickCounter = document.querySelector('.number');
let clickButton = document.querySelector('.prime');
clickButton.addEventListener('click',  countClicks);
let primeArray = [2];
let gotPrime = false;

function countClicks(event) {
  console.log('button Clicked');
  counter++;
  console.log(counter);
  clickCounter.textContent = counter;
  // if (primeArray.indexOf(counter) != -1){alert('Hola! '+counter+' is a prime number!');}
  // else if ((counter != 1) && (counter % 2 != 0) && (counter % 3 != 0) && (counter % 5 != 0) && (counter % 7 != 0)){
  // alert('Hola! '+counter+' is a prime number!');
  // }

  gotPrime = true;

  for(i=2; i < counter; i++){
    if(counter % i == 0){

      gotPrime = false;
    }
  }
  if (gotPrime == true && counter>1){
      alert('Hola! '+counter+' is a prime number!');
  }

}
