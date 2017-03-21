
/*
http://fillmurray.com/100/100

http://fillmurray.com/400/400
*/

// Cache the button element.
const smallButton = document.querySelector('.smaller');
const bigButton = document.querySelector('.larger');

function smallClick(event){
  let image = document.querySelector('p img');
  image.src = "http://fillmurray.com/100/100";
}

function bigClick(event){
  let image = document.querySelector('p img');
  image.src = "http://fillmurray.com/400/400";
}

smallButton.addEventListener('click', smallClick);
bigButton.addEventListener('click', bigClick);
