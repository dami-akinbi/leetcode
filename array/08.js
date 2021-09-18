// EASY
// DECODE XORED ARRAY

// code goes here
// let arr = [1, 0, 2, 1];
// let encoded = [];

// for (let i = 0; i < arr.length - 1; i++) {
//     encoded[i] = arr[i] ^ arr[i + 1];
// }
// console.log(encoded);

// reverse
const decode = function (encoded, first) {
    let arr = [];
    
    for (let i = 0; i < encoded.length; i++) {
        arr[0] = first;
        arr[i + 1] = arr[i] ^ encoded[i]; // helped from a video/algorithm on YouTube
    }
    return arr;
}

let encoded = [1, 2, 3];
encoded = [6, 2, 7, 3];
let first = 1;
first = 4;

let answer = decode(encoded, first);
console.log(answer);
