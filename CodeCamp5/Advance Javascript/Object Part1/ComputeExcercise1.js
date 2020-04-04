let key = prompt("Enter key: ");
let obj = {};

while (key !== "stop") {
    let value = prompt("Enter value: ");
    obj[key] = value;
    key = prompt("Enter key: ");
}

console.log(obj);

// let key = prompt("Enter fruit key: ");
// let obj = {};

// while (key !== "stop") {
//     let value = prompt(`Enter number of ${key} `);
//     if (Number(value) > 1) {
//         key += "s";
//     }
//     obj[key] = value;
//     key = prompt("Enter fruit name: ");
// }

// console.log(obj);

// let isEmpty = (obj) => {
//     for (let key in obj) {
//         return false
//     }
//     return true
// }

// let sum = (obj) => {
//     let total = 0;
//     for (let key in obj) {
//         total += obj[key];
//     }
//     return total;
// }

// let salaries = {
//     john : 100,
//     ann : 160,
//     pete : 130
// }