// EASY
// SPLIT A STRING IN BALANCED STRINGS

// code goes here
// s = "Hello world!";

// console.log(s.substring(1, 4)); // .substring(start, end) but does not include end
// console.log(s.substr(1, 4)); // .substr(start, length)

// let s = "RLRRLLRLRL";
// s = "RLLLLRRRLR";
// s = "LLLLRRRR";
// s = "RLRRRLLRLL";

const balancedStringSplit = function (s) {
    let countL = 0;
    let countR = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "R") countR++;
        if (s[i] == "L") countL++;
    }
    // console.log(`L: ${countL}, R: ${countR}`);
    if (countL === countR) {
        let count = 0;
        for (let j = 2; j <= s.length; j += 2) { // taking the string by evens
            let counterL = 0; // Ls in each substring
            let counterR = 0; // Rs in each substring
            for (let counter = 0; counter < s.substr(0, j).length; counter++) {
                if (s.substr(0, j)[counter] == "L") counterL++; // number of Ls in each substring
                if (s.substr(0, j)[counter] == "R") counterR++; // number of Rs in the same substring
            }
            if (counterL === counterR) { // testing for equality
                count++; // increase the desired count
            }
        }
        return count; // display count
        // if (s.substr(i, 2)) {}
        // if (s.substr(i, 4)) {}
        // if (s.substr(i, 6)) {}
        // if (s.substr(i, 8)) {}
    } else return `${s} is not balanced`;
}

let s = "RLRRLLRLRL";
s = "RLLLLRRRLR";
s = "LLLLRRRR";
s = "RLRRRLLRLL";

let result = balancedStringSplit(s);
console.log(result);
