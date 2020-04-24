let array1 = [1, 2, 3, 4]
let array2 = array1.map(function(item, index, array) {
    return item += ""
})

console.log(array2);
