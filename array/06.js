// EASY
// KIDS WITH THE GREATEST NUMBER OF CANDIES

const kidsWithCandies = function (candies, extraCandies) {
    let result = [];
    
    for (let candy = 0; candy < candies.length; candy++) {
        let answer = candies[candy] + extraCandies >= Math.max(...candies); // if after adding the extra candy to each candy number, the result is not greater than the initial max number in candy array
        result.push(answer);
    }
    return result;
}

let candies = [2, 3, 5, 1, 3], extraCandies = 3;
candies = [4, 2, 1, 1, 2], extraCandies = 1;
candies = [12, 1, 12], extraCandies = 10;

let answer = kidsWithCandies(candies, extraCandies);
console.log(answer);
