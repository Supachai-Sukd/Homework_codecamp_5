import { isNumber } from "util";

// filter เลขที่มากกว่า 10
let array1 = [1, 2, 30, 400].filter(function(x) {
    return x > 10;
})
console.log(array1);
//#####################################################################################
//#####################################################################################

// filter เลขคี่
let array2 = [1, 2, 3, 4].filter(function(x) {
    return  (x % 2 !== 0)
})
console.log(array2);
//#####################################################################################
//#####################################################################################

// filter Number
let array3 = [1, "1", 2, {}].filter(function(x) {
  return x === parseInt(x)
})
console.log(array3);
//#####################################################################################
//#####################################################################################

// filter ตัวอักษร > 6
let array4 = ["apple", "banana", "orange", "pineapple", "watermeon"].filter(function(x) {
    return x.length > 6;
})
console.log(array4);
