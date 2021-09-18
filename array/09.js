// EASY
// DECOMPRESS RUN LENGTH ENCODED LIST

// code goes here
const decompressRLElist = function (nums) {
    let nums2 = [], nums3 = []; // create two important arrays
    for (let i = 0; i < nums.length; i += 2) { // take first member and skip counter by 2 units
        nums2.push([nums[i], nums[i+1]]); // split the array into an array of subarrays of two members each
    }
    for (let i = 0; i < nums2.length; i++) { // in each subarray
        for (let j = nums2[i][0]; j > 0; j--) { // take first member as freq
            nums3.push(nums2[i][1]); // push second as value the no of times freq occurs
        }
    }    
    return nums3; // return desired array
}

let nums = [3, 5, 1, 3];
nums = [1, 2, 3, 4];
nums = [1, 1, 2, 3];

let answer = decompressRLElist(nums);
console.log(answer);
