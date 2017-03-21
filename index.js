// code below this line


    function smallMurray () {
      let myImage = document.querySelector('p img');
      myImage.src = 'http://www.fillmurray.com/100/100';
    }

    let button = document.querySelector('.smaller');
    button.addEventListener('click', smallMurray);

function bigMurray () {
  let myImage = document.querySelector('p img');
   myImage.src = 'http://www.fillmurray.com/400/400';

}
    let button2 = document.querySelector('.larger');
    button2.addEventListener('click', bigMurray);
