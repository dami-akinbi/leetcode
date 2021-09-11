// EASY
// SHUFFLE STRING

// code goes here
const restoreString = function (s, indices) {
    let shuffled = []; // answer as array
    for (let i = 0; i < indices.length; i++) shuffled[indices[i]] = s[i]; // nawa for this line logic
    return shuffled.join(''); // back to string
}

const answer = restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]);
console.log(answer);
