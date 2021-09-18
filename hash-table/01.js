// EASY
// NUMBER OF GOOD PAIRS

const numIdenticalPairs = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) 
    for (let j = 1; j < nums.length; j++) 
    if (nums[i] == nums[j] && i < j) count++;
    return count;
}

let nums = [1, 2, 3, 1, 1, 3];
nums = [1, 1, 1, 1];

let answer = numIdenticalPairs(nums);
console.log(answer); // this is not HASH TABLE implementation I know. I am still learning

// Object
// let sample = {
//     "Anu": 3,
//     "Bimbo": 5,
//     "Damilare": 8
// }
// sample["Olukayode"] = 9;
// console.log(sample);
// console.log(sample.hasOwnProperty("Bimbo"));

// Map
// let sample2 = new Map();
// sample2.set("Anu", 3);
// sample2.set("Bimbo", 5)
// sample2.set("Damilola", 8);
// console.log(sample2.get("Damilola"));
// console.log(sample2.size);
// for (let [key, value] of sample2) {
//     console.log(`${key} = ${value}`);
// }

// Custom Hash Table
// class HashTable {
//     constructor() {
//         this.table = new Array(127);
//         this.size = 0;
//     }
//     _hash(key) {
//         let hash = 0;
//         for (let i = 0; i < key.length; i++) hash += key.charCodeAt(i);
//         return hash % this.table.length;
//     }
//     set(key, value) {
//         const index = this._hash(key);
//         this.table[index] = [key, value];
//         this.size++;
//     }
//     get(key) {
//         const target = this._hash(key);
//         return this.table[target];
//     }
//     remove(key) {
//         const index = this._hash(key);
//         if (this.table[index] && this.table[index].length) {
//             this.table[index] = [];
//             this.size--;
//             return true;
//         } else return false;
//     }
// }

// Custom Hash Table with the collision avoidance applied
// class HashTable {
//     constructor() {
//         this.table = new Array(127);
//         this.size = 0;
//     }
//     _hash(key) {
//         let hash = 0;
//         for (let i = 0; i < key.length; i++) hash += key.charCodeAt(i);
//         return hash % this.table.length;
//     }
//     set(key, value) {
//         const index = this._hash(key);
//         if (this.table[index]) {
//             for (let i = 0; i < this.table[index].length; i++) {
//                 if (this.table[index][i][0] === key) {
//                     this.table[index][i][1] = value;
//                     return;
//                 }
//             }
//             this.table[index].push([key, value]);
//         } else {
//             this.table[index] = [];
//             this.table[index].push([key, value]);
//         }
//         this.size++;
//     }
//     get(key) {
//         const index = this._hash(key);
//         if (this.table[index]) {
//             for (let i = 0; i < this.table.length; i++) {
//                 if (this.table[index][i][0] === key) 
//                     return this.table[index][i][1];
//             }
//         }
//         return undefined;
//     }
//     remove(key) {
//         const index = this._hash(key);
//         if (this.table[index] && this.table[index].length) {
//             for (let i = 0; i < this.table.length; i++) {
//                 if (this.table[index][i][0] === key) {
//                     this.table[index].splice(i, 1);
//                     this.size--;
//                     return true;
//                 }
//             }
//         } else return false;
//     }
//     display() {
//         this.table.forEach((values, index) => {
//             const chainedValues = values.map( ([key, value]) => `[ ${key}: ${value} ]` );
//             console.log(`${index}: ${chainedValues}`);
//         })
//     }
// }
