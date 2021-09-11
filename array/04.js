// EASY
// RICHEST CUSTOMER WEALTH

const maximumWealth = function (accounts) {
    let answerArray = [];
    for (let i = 0; i < accounts.length; i++) {
        let answer = 0;
        for (let j = 0; j < accounts[i].length; j++) answer += accounts[i][j];
        answerArray.push(answer);
    }
    return Math.max(...answerArray);
}

let sample = [ [2, 8, 7], [7, 1, 3], [1, 9, 5] ];
const result = maximumWealth(sample);
console.log(result);
