// INTEGER TO ROMAN

// review this copy-copy code
let romanMatrix = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'],
    [1, 'I']
];

function numToRoman(num) {
    if (num <= 0) return '';
    else {
        // for (let i = 0; i < romanMatrix.length; i++) {
        for (let i = 0; i < 13; i++) {
            let difference = num - romanMatrix[i][0];
            if (difference >= 0) return romanMatrix[i][1] + numToRoman(difference);
        }
    }
}

let result = [];
for (let i = 0; i < 3; i++) {
    let random = Math.ceil(Math.random() * 50);
    result.push(random, numToRoman(random));
}
console.log(result);
