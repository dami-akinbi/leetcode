// LONGEST COMMON PREFIX

// go through the copy-copy code
const longestCommonPrefix = function (words) {
    let wordsLen = words.length;
    if (wordsLen == 0) return '';
    else if (wordsLen == 1) return words[0];
    else {
        words.sort();
        let last = Math.min(words[0].length, words[wordsLen - 1].length);
        // for (let i = 0; i < last && words[0][i] == words[wordsLen - 1][i]; i++)
        let i = 0;
        while (i < last && words[0][i] == words[wordsLen - 1][i]) 
        i++;
        return words[0].substring(0, i);
    }
}

let answer = longestCommonPrefix(['damilola', 'daramola', 'daniel', 'david', 'damian']);
console.log(answer);
