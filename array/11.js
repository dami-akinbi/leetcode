// EASY
// SUM OF ALL ODD LENGTH SUBARRAYS

// code goes here

// for (let i = 0; i <= arr.length; i++) {
//     if (arr.slice(0, i).length % 2 !== 0) {
//         console.log(arr.slice(0, i));
//     }
// }

const sumOddLengthSubarrays = function (arr) {
    // had to build a sum function to add each array element
    const theSum = function (testArr) {
        let total = 0;
        for (let i = 0; i < testArr.length; i++) total += testArr[i];
        return total;
    }
    
    // this is the real logic code for the function
    let total = 0;
    for (let i = 0; i <= arr.length; i++) {
        for (let j = 0; j <= arr.length; j++) {
            if (arr.slice(j, i).length % 2 !== 0 && j < i) {
                // console.log(arr.slice(j, i));
                total += theSum(arr.slice(j, i));
            }
        }
    }
    return total;    
}

let answer = sumOddLengthSubarrays([1, 4, 2, 5, 3]);
console.log(answer);


// let answer = theSum([1, 2, 3, 4, 5, 6]);
// console.log(answer);

// console.log(arr.slice(0, 3)); // [1, 4, 2];
// arr.splice(0, 0, 3);
