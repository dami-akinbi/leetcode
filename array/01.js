// EASY
// BUILD ARRAY FROM PERMUTATION

const buildArray = function (nums) {
    let ans = [];    
    for (let i = 0; i < nums.length; i++) {
        let value = nums[nums[i]];
        ans.push(value);
    }
    return ans;
}

const result = buildArray([0, 2, 1, 5, 3, 4]);
console.log(result);

const result2 = buildArray([5, 0, 1, 2, 3, 4]);
console.log(result2);

