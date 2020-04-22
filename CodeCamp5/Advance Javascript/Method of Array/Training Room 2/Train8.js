let array1 = [1,3,4,5,6,7,8]
let array2 = array1.map(function(item, index, array) {
    if (item % 2 == 0) {
        item = "even"
    } else {
        item = "odd"
    }
    return item
})

console.log(array2);
