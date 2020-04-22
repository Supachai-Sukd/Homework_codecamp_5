let array1 = [1, "1", 2, {}] 
let array2 = array1.map(function(item, index, array) {
    return typeof(item)
})

console.log(array2);
