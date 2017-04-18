var


//Extend the englishify function to work for any number up to 39.

let num = {
0: 'zero',
1: 'one',
2: 'two',
3: 'three',
4: 'four',
5: 'five',
6: 'six',
7: 'seven',
8: 'eight',
9: 'nine',
10: 'ten',
11: 'eleven',
12: 'twelve',
13: 'thirteen',
14: 'fourteen',
15: 'fifteen',
16: 'sixteen',
17: 'seventeen',
18: 'eightteen',
19: 'eightteen',
20: 'twenty',
30: 'Thirty',
100: 'hundred',
500: 'five hundred',
1000: 'thousand',
5000: 'five thousand',
10000: 'ten thousand'
}



function convert_thousands{num}{
  if (num>=1000){
    return convert_hundreds(Math.floor(num/1000))+" thousand "+convert_hundreds(num%1000);
  }
  else{
    return connvert_hundreds(num);
  }
}


function convert_hundreds(num){
  if (num>99){
    return ones[math.floor(num/100)]+"hundred "+covert_tens(num%100);
  }
}

/*
The correct information.

var ones=['','one','two','three','four','five','six','seven','eight','nine'];
var tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
var teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];


function convert_trillions(num){
 if(num > 1000000000000){
   return convert_billions(Math.floor(num/1000000000000))+" trillion"+ convert_billions(num%1000000000000);
   console.log(convert_billions(num%1000000000000));
 }
 else {
   return convert_billions(num)
 }
}
function convert_billions(num){
 if(num > 1000000000){
   return convert_millions(Math.floor(num/1000000000))+" billion "+ convert_millions(num%1000000000);
   console.log(convert_millions(num%1000000000));
 }
 else {
   return convert_millions(num)
 }
}
function convert_millions(num){
 if(num>1000000){
   return convert_thousands(Math.floor(num/1000000))+" million "+ convert_thousands(num%1000000);
   console.log(convert_thousands(num%1000000));
 }
 else {
   return convert_thousands(num);
 }
}
function convert_thousands(num){
  if (num>=1000){
      return convert_hundreds(Math.floor(num/1000))+" thousand "+convert_hundreds(num%1000);
  }
  else{
      return convert_hundreds(num);
  }
}

function convert_hundreds(num){
  if (num>99){
      return ones[Math.floor(num/100)]+" hundred "+convert_tens(num%100);
  }
  else{
      return convert_tens(num);
  }
}

function convert_tens(num){
  if (num<10) return ones[num];
  else if (num>=10 && num<20) return teens[num-10];
  else{
      return tens[Math.floor(num/10)]+" "+ones[num%10];
  }
}

function englishify(num){
  if (num==0) return "zero";
  else return convert_trillions(num);
}
console.log(englishify(1000000000))

*/
