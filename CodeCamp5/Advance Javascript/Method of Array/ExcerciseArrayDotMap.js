let array1 = [1, 2, 30, 400].map(function (x) {
  return x * 2;
});

console.log(array1);

let array2 = [1, 2, 3, 4];
let array22 = array2.map(function(item, index, array) {
    return (` "${item}" `)
})

console.log(array22);

let array3 = [1, "1", 2, {}];
let array33 = array3.map(function(item, index, array) {
    return typeof(item);
})

console.log(array33);

let array4 = ["apple", "banana", "orange"];
let array44 = array4.map(function(item, index, array) {
    return item.toUpperCase();
})

console.log(array44);

let array5 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
]
let array55 = array5.map(function(item, index, array) {
    return item.name;
})

console.log(array55);

let array6 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
]
let array66 = array6.map(function(item, index, array) {
    return item.age;
})

console.log(array66);

let array7 = [
    { name: "apple", surname: "London" },
    { name: "banana", surname: "Bangkok" },
    { name: "watermelon", surname: "Singapore" },
]
let array77 = array7.map(function(item, index, array) {
    return (`${item.name}  ${item.surname}`)
})

console.log(array77);

let array8 = [1,3,4,5,6,7,8];
let array88 = array8.map(function(item, index, array) {
    let result;
    if (item % 2 == 0) {
        item += "even"
    } else {
        item += "odd"
    }
    return item.slice(1);
    
})

console.log(array88);


let array9 = [1, -3, 2, 8, -4, 5]
let array99 = array9.map(function(item, index, array) {
    let result;
    if (item < 0) {
        item -= item + item
    } else {
        item = item
    }
    return item
})

console.log(array99);


let array10 = [100, 200.25, 300.84, 400.3]
let array1010 = array10.map(function(item, index, array) {
    return item.toFixed(2);
})

console.log(array1010);


let array11 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-01" },
    { name: "watermelon", birth: "1985-12-01" },
]
let array1111 = array11.map(function(item, index, array) {
    let total;
    let sumAge;
    total = item.birth.slice(0, 4) - 2019;
    sumAge = total -= total + total;
    item.age = sumAge;
    return item
})

console.log(array1111);
