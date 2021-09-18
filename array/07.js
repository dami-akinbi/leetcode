// EASY
// HOW MANY NUMBERS ARE SMALLER THAN THE CURRENT NUMBER

const smallerNumbersThanCurrent = function (nums) {
    let nums2 = [];
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j] && i != j) count++;
        }
        nums2.push(count);
    }
    return nums2;
}

let nums = [8, 1, 2, 2, 3];
nums = [6, 5, 4, 8];
nums = [7, 7, 7, 7];

let answer = smallerNumbersThanCurrent(nums);
console.log(answer);
