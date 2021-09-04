// EASY
// DEFANGING AN IP ADDRESS

const defangIPaddr = function (address) {
    let finalAddress = '';
    for (char of address) {
        if (char == '.') finalAddress += '[' + char + ']';
        else finalAddress += char;
    }
    return finalAddress;
}

const result = defangIPaddr('255.100.50.0');
console.log(result);
