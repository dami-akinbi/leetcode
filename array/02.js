// EASY
// CONCATENATION OF ARRAY

const getConcatenation = function (nums) {
    let ans = [];
    for (let count = 0; count <= 1; count++) {
        for (i of nums) ans.push(i);
    }
    return ans;
}

const result = getConcatenation([1, 2, 1]);
console.log(result);
