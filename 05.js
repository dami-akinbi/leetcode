// ROMAN TO INTEGER

// review this copy-copy code
const romanNum = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
]);

function romanToNum(string) {
    let num = 0;
    let current = 0;
    let previous = 0;

    for (const char of string.split("").reverse()) {
        current = romanNum.get(char);
        if (current >= previous) num += current;
        else num -= current;
        previous = current;
    }
    return num;
}

let result = romanToNum('CDXL');
console.log(result);
