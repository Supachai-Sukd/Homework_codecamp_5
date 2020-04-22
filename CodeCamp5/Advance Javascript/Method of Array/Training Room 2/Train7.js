let array1 = [
    { name: "apple", surname: "London" },
    { name: "banana", surname: "Bangkok" },
    { name: "watermelon", surname: "Singapore" },
  ]
let array2 = array1.map(function(item, index, array) {
    return (`${item.name} ${item.surname}`)
})
console.log(array2);
