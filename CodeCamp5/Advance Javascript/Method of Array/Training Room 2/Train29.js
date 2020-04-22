let array1 = ["peach", 1, -3, "2", {}, []].filter(function(x) {
    return x === String(x)
})

console.log(array1);
