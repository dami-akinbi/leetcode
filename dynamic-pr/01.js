// EASY
// COUNTING BITS

// let result = parseInt("123", 10);
// result = parseInt("1111011", 2);
// result = (123).toString(2);
// console.log(typeof result);

const countBits = function (n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        let digits = (i).toString(2); // converts each i to stringed-base-two
        let count = 0;
        for (let digit of digits) if (digit == "1") count++; // counts the 1's in each binary rep of i
        arr.push(count); // pushes count to arr
    }
    return arr;
}

let n = 5;
n = 2;
let answer = countBits(n);
console.log(answer);
