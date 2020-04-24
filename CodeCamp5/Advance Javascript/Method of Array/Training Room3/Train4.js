let array1 = ["apple", "banana", "orange"]
let array2 = array1.map(function(item, index, array) {
    return item.toUpperCase();
})

console.log(array2);
