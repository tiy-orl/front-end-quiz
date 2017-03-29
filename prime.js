let button = document.querySelector('button.prime');
let span = document.querySelector('span.number');
button.dataset.clicked = 0;
button.addEventListener('click', () => {
  button.dataset.clicked++;
  let num = button.dataset.clicked;
  span.textContent = num;
  let count = 0 ;
  for(let i = 1; i <= num; i++) {
    if (num % i === 0) count++;
  }
  if (count === 2) alert(`Prime number! ${num}`);
});
