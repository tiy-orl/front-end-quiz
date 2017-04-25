<<<<<<< HEAD
function getSum(total, sum) {
  return total + sum;
}

function getDifference(total, sum) {
  return total - sum;
}

function getProduct(total, sum) {
  return total * sum;
}

function getQuotient(total, sum) {
  return total / sum;
}

function englishMath(string) {
  if ((string).includes(' plus ')){
    let add = (string).split(' plus ').map(numberify);
    console.log(add.reduce(getSum));

  } else if ((string).includes(' minus ')){
    let minus = (string).split(' minus ').map(numberify);
    console.log(minus.reduce(getDifference));
  }
  if ((string).includes(' times ')){
    let mult = (string).split(' times ').map(numberify);
    console.log(mult.reduce(getProduct));
  }
  if ((string).includes(' divided ')){
    let div = (string).split(' divided ').map(numberify);
    console.log(div.reduce(getQuotient));
  }
}

englishMath('fifty seven plus thirty three');
=======
/***********************************
* Chris Lebbano.  Tuesday Quiz
* Write a function that can take in a phrase that represents an addition
* problem and returns the word or phrase representing the answer (wut)
*
* For example:
* englishMath('five plus seventeen') //=> 'twenty two'
**********************************/


function englishMath(str){
  let result;
  if (str.includes('plus')){
    let arr =  str.split('plus');
    result = parseInt(numberify(arr[0].trim())) + parseInt(numberify(arr[1].trim()));
  }
  if (str.includes('minus')){
    let arr =  str.split('minus');
    result = parseInt(numberify(arr[0].trim())) - parseInt(numberify(arr[1].trim()));
  }
  if (str.includes('times')){
    let arr =  str.split('times');
    result = parseInt(numberify(arr[0].trim())) * parseInt(numberify(arr[1].trim()));
  }
  if (str.includes('divide')){
    let arr =  str.split('divide');
    result = parseInt(numberify(arr[0].trim())) / parseInt(numberify(arr[1].trim()));
  }
  return englishify(result);
}

let $input = $('#math-input');
let $button = $('label button');

$button.on('click', function(event){
  let val = $input.val();
  let result = englishMath(val);
  $input.val(result);
  $.get(`http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${result}`, function(data){
    let $img = $('#giphy');
    $img.attr('src', data.data.image_url);
  });
});
>>>>>>> 5969bccd8b3bd65d6d5899f33752b867eb1b6df7
