/*
*  Issue #44
*  A button has been added to index.html, along with an empty span. Show the
*  number of times the button has been clicked in the span. If that number is a
*  prime number, have an alert pop up.
*/

let button = document.querySelector('button.prime');
let span = document.querySelector('span.number');
button.dataset.clicked = 0;
button.addEventListener('click', e => {
  button.dataset.clicked++;
  let num = button.dataset.clicked;
  span.textContent = num;
  let count = 0 ;
  for(let i = 1; i <= num; i++) {

    if (num % i === 0) {
      count++;
    }
  }

  if (count === 2) alert(`Prime number! ${num}`);

})
