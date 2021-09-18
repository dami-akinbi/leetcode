// EASY
// COUNT ITEMS MATCHING A RULE

// code goes here
let items = [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"],
    ["tablespoon", "silver", "towers"]
];
let ruleKey = "type";
let ruleValue = "table";

const countMatches = function (items, ruleKey, ruleValue) {
    let count = 0;
    if (ruleKey == "type") {
        for (let i = 0; i < items.length; i++) {
            if (items[i][0] == ruleValue) count++;
        }
        return count;
    }
    else if (ruleKey == "color") {
        for (let i = 0; i < items.length; i++) {
            if (items[i][1] == ruleValue) count++;
        }
        return count;
    }
    else if (ruleKey == "name") {
        for (let i = 0; i < items.length; i++) {
            if (items[i][2] == ruleValue) count++;
        }
        return count;
    }
    else {
        return "Invalid input";
    }
}

let result = countMatches(items, ruleKey, ruleValue);
console.log(result);
