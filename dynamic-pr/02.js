// EASY
// FIBONACCI NUMBER

const fib = function (n) {
    if (n === 0) return 0;
    else if (n === 1) return 1;
    else return fib(n-1) + fib(n-2);
}

let result = fib(2);
console.log(result);

// another way - space optimized method
// function fib2(n) {
//     let a = 1, b = 1, c, i;
//     if (n === 0) return 0;
//     else if (n === 1) return 1;
//     else {
//         for (i = 2; i <= n; i++) {
//             c = a + b;
//             a = b;
//             b = c;
//         }
//         return b;
//     }
// }

// let answer = fib2(5);
// console.log(answer);
