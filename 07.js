// VALID PARENTHESES

// go through the copy-copy code
function isValid(string) {
    let stack = [];
    const brackets = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '(' || string[i] === '{' || string[i] === '[') stack.push(string[i]);
        else if (brackets[stack.pop()] !== string[i]) return false;
    }
    return stack.length ? false : true;
}

let answer = isValid('{[]}()[()]');
console.log(answer);
