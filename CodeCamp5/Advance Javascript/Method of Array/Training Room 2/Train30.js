let array1 = ["APPLE", "appLE", "PEACH", "PEach"].filter(function(x) {
    return x == x.toUpperCase()
})

console.log(array1);
