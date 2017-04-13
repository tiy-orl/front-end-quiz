var ones=['','one','two','three','four','five','six','seven','eight','nine'];
var tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
var teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

function englishify(num) {
    if (num == 0) return "zero";
    // if (num == 100) return "one hundred";
    if (num < 10) return ones[num];
    else if (num >= 10 && num < 20) return teens[num - 10];
    else if (num >= 100 && num < 110) return ones[num / 100] + " hundred " + ones[num - 100];
    else if (num >= 100 && num < 120) return "one hundred " + teens[num - 110];
    else if (num > 100) return "one hundred " + tens[Math.floor((num - 100)/10)] + " "+ ones[num % 10];
    else {
        return tens[Math.floor(num / 10)] + " " + ones[num % 10];
    }
}
console.log(Math.floor((123 - 100)/10));
console.log( englishify(300) );
