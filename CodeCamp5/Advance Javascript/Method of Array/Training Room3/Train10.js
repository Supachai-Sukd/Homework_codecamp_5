let array1 = [100, 200.25, 300.84, 400.3]
let array2 = array1.map(function(item, index, array) {
    return item.toFixed(2)
})

console.log(array2);
