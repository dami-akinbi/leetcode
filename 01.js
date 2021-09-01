// TWO SUM

function twoSum(array, target) { // using a named function
    let indexes = []; // creating an empty array for final result
    for (let i = 0; i < array.length - 1; i++) { // using double loops
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == target) {
                indexes.push(i);
                indexes.push(j); // pushing the indexes of the solutions
            }
        }
    }
    return indexes; // returning the result
}

const result = twoSum([2, 4, 10, 11], 15); // an example
console.log(result); // logging the result