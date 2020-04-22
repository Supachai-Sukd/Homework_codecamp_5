let array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-01" },
    { name: "watermelon", birth: "1985-12-01" },
  ]
let array2 = array1.map(function(item, index, array) {
    let calcAge = item.birth.slice(0, 4);
    let resultAge = 2019 - calcAge 
    item.age = resultAge
    return item
})

console.log(array2);
