// EASY
// CREATE TARGET ARRAY IN THE GIVEN ORDER

const createTargetArray = function (nums, index) {
    let target = [];
    
    for (let i = 0; i < nums.length; i++) {
        target.splice(index[i], 0, nums[i]); // I have to learn this well. Thank you Google!
    }
    
    return target;
}

let nums = [0, 1, 2, 3, 4];
nums = [1, 2, 3, 4, 0];

let index = [0, 1, 2, 2, 1];
index = [0, 1, 2, 3, 0];

let answer = createTargetArray(nums, index);
console.log(answer);

// target.splice(0,0,0);
// target.splice(1,0,1);
// target.splice(2,0,2);
// target.splice(2,0,3);
// target.splice(1,0,4);


// play with slice() 
// play with splice()
let months = ['Jan', 'Mar', 'Apr', 'Jun'];
months.splice(1, 0, 'Feb'); // replace 0 element at index 1 OR add Feb at index 1
// console.log(months);

// months.splice(4, 1, 'May'); // replace 1 element at index 4
months.splice(4, 0, 'May'); // replace 0 element at index 4 OR add May at index 4
// console.log(months);
