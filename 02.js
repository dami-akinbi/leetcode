// REVERSE INTEGER

let number = -123;

if (number < 0) { // exploring the negative
    number = -1 * number; // removing minus
    number = number.toString(); //stringifying
    let reverseNumber = '';
    for (let i = number.length - 1; i >= 0; i--) reverseNumber += number[i];

    if (reverseNumber >= -Math.pow(2, 31) && reverseNumber <= Math.pow(2, 31) - 1) console.log('-' + reverseNumber);
    else return 0;
} else { // exploring the positive
    number = number.toString(); //stringifying
    let reverseNumber = '';
    for (let i = number.length - 1; i >= 0; i--) reverseNumber += number[i];

    if (reverseNumber >= -Math.pow(2, 31) && reverseNumber <= Math.pow(2, 31) - 1) console.log(reverseNumber);
    else return 0;
}
