// EASY
// REMOVE VOWELS FROM A STRING

const removeVowels = function (word) {
    let removed = '';
    for (char of word.toLowerCase()) {
        if (!(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')) {
            removed += char;
        }
    }
    return removed;    
}

const result = removeVowels('Aeroplane');
console.log(result);
