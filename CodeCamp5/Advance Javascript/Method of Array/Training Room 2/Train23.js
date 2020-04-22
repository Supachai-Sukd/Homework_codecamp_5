let array1 = [1, "1", 2, {}].filter(function(x) {
    return x === Number(x)
})

console.log(array1);
