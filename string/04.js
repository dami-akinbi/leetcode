// EASY
// GOAL PARSER INTERPRETATION

const interpret = function (command) {
    let text = '';
    for (let i = 0; i < command.length; i++) {
        if (command[i] == 'G') text += 'G';
        if (command.substr(i, 2) == '()') text += 'o'; // captures substring
        if (command.substr(i, 4) == '(al)') text += 'al'; // captures substring
    }
    return text;
}

const answer = interpret("(al)G(al)()()G");
console.log(answer);
