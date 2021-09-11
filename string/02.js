// EASY
// JEWELS AND STONES

const numJewelsInStones = function (jewels, stones) {
    let count = 0;
    for (let stone of stones) {
        for (let jewel of jewels) if (jewel == stone) count++;
    }
    return count;
}

const answer = numJewelsInStones('aA', 'aAAbbb');
console.log(answer);
