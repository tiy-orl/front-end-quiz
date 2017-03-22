// code below this line


function billMurray(event) {
  let button = event.target;
  let whereTheImageGoes = document.querySelector('p img');
  whereTheImageGoes.src = button.dataset.name
}

let buttons = document.querySelectorAll('button');
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
  button.addEventListener('click', billMurray)
  }
