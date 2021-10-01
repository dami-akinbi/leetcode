// EASY
// SORTING THE SEQUENCE

// code goes here
let s = "is2 sentence4 This1 a3";
// s = "Joseph2 Oluwadamilola1 Akinbi3";
s = "Myself2 Me1 I4 and3";
s = "is2 sentence4 This1 a3";
// console.log(s.substring(0, s.length - 1));
// console.log(s.substring(s.length - 1));

const sortSentence = function (s) {
    let text = s.split(" ");
    let final = "";
    let j;
    for (j = 1; j < text.length; j++) { // gentle looping, this was later coined
        for (let i = 0; i < text.length; i++) {
            if (text[i].substring(text[i].length - 1) == j) final += text[i].substring(0, text[i].length - 1) + " "; // had to learn substring() method well
        }
    }
    if (j == text.length) { // for the last word, just to not include space at the end
        for (let i = 0; i < text.length; i++) {
            if (text[i].substring(text[i].length - 1) == j) final += text[i].substring(0, text[i].length - 1);
        }
    }
    return final;
}

let result = sortSentence(s);
console.log(result);

// for (let i = 0; i < text.length; i++) {
//     if (text[i].substring(text[i].length - 1) == 1) final += text[i].substring(0, text[i].length - 1) + " ";
// }
// for (let i = 0; i < text.length; i++) {
//     if (text[i].substring(text[i].length - 1) == 2) final += text[i].substring(0, text[i].length - 1) + " ";
// }
// for (let i = 0; i < text.length; i++) {
//     if (text[i].substring(text[i].length - 1) == 3) final += text[i].substring(0, text[i].length - 1) + " ";
// }
// for (let i = 0; i < text.length; i++) {
//     if (text[i].substring(text[i].length - 1) == 4) final += text[i].substring(0, text[i].length - 1);
// }
// console.log(final);

// console.log(s.split(" "));
// console.log(s.split(" "));
