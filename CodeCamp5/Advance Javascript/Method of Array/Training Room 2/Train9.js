let array1 = [1, -3, 2, 8, -4, 5]
let array2 = array1.map(function(item, index, array) {
    if (item < 0) {
        item -= item + item
    }
    return item
})

console.log(array2);
