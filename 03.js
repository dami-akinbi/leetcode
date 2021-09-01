// PALINDROME NUMBER

function isPalindrome(number) {
    numberString = number.toString(); // number to string
    
    numberSplit = numberString.split(''); // splitting the string to an array of characters
    
    numberReverse = numberSplit.reverse(); // reversing the array
    
    numberJoin = numberReverse.join(''); // joining back the reversed array

    numberNumber = Number(numberJoin); // string to number
    
    return number == numberNumber;
}

let result = isPalindrome(-12321);
console.log(result);
