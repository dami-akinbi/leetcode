// EASY
// SHUFFLE THE ARRAY

const shuffle = function (nums, n) {
    let first = nums.slice(0, n);
    let second = nums.slice(n, 2*n);

    let final = [];

    for (let i = 0; i < n; i++) {
        final.push(first[i]);
        final.push(second[i]);
    }

    return final;
}

let answer = shuffle([2,5,1,3,4,7], 3);
answer = shuffle([1,2,3,4,4,3,2,1], 4);
answer = shuffle([1,1,2,2], 2);
console.log(answer);
