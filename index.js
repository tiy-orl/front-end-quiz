// code below this line
function changeSmallPicture (event) {

    let myImage = document.querySelector('p img')
      myImage.src = "http://fillmurray.com/100/100";
    }

    let buttonSmall = document.querySelector('button.smaller');
        buttonSmall.addEventListener('click', changeSmallPicture);


  function changeLargePicture (event) {

    let myImage = document.querySelector('p img')
      myImage.src = "http://fillmurray.com/400/400";
    }

    let buttonLarge = document.querySelector('button.larger');
        buttonLarge.addEventListener('click', changeLargePicture);
