function englishify(num){

  let a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
          'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  let b = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let g = ['', 'thousand'];


  if (num === 0) {
    return 'zero';
  }
  if (num >= 1 && num < 20){
    return a[num];
  }
  if (num >= 20 && num < 100) {
    let arr = num.toString().split('');
    return `${b[arr[0]]} ${a[arr[1]]}`
  }
  if (num >= 100 && num < 1000) {
    let arr = num.toString().split('');
    if (arr[1] >= 1 && arr[1] < 2){
      let str = arr[1] + arr[2];
      let num = parseInt(str);
      return `${a[arr[0]]} hundred ${a[num]}`;
    }
    return `${a[arr[0]]} hundred ${b[arr[1]]} ${a[arr[2]]}`;
  }
  if (num >= 1000 && num < 10000) {
    let arr = num.toString().split('');
    if (arr[2] >= 1 && arr[2] < 2){
      let str = arr[2] + arr[3];
      let num = parseInt(str);
      let hundred = arr[1];
      if (hundred == 0) {
        hundred = '';
      } else {
        hundred = ' hundred';
      }
      return `${a[arr[0]]} thousand ${a[arr[1]]} ${hundred}${a[num]}`;
    }
  }
};

for (let i = 1010; i < 1020; i++){
  console.log(englishify(i));
}
