
/*
http://fillmurray.com/100/100

http://fillmurray.com/400/400
*/

const bigUrl = 'http://fillmurray.com/400/400';
const smallUrl = 'http://fillmurray.com/100/100';

// Cache the button element.
const smallButton = document.querySelector('.smaller');
const bigButton = document.querySelector('.larger');

function smallClick(event){
  let image = document.querySelector('p img');
  image.src = smallUrl;
}

function bigClick(event){
  let image = document.querySelector('p img');
  image.src = bigUrl;
}

smallButton.addEventListener('click', smallClick);
bigButton.addEventListener('click', bigClick);
