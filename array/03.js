// EASY
// RUNNING SUM OF 1D ARRAY

const runningSum = function (nums) {
    let nums2 = [];
    for (let i = 0; i < nums.length; i++) {
        let answer = 0;
        for (let j = 0; j <= i; j++) answer += nums[j];
        nums2.push(answer);
    }
    return nums2;
}

const result = runningSum([1, 1, 1, 1, 1]);
console.log(result);
