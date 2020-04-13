let array1 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-01" },
  { name: "watermelon", birth: "1985-12-01" },
];
let array2 = array1.map(function(item, index, array) {
    let bornYear = item.birth.slice(0, 4)
    let calcAge = bornYear -= 2019;
    let realAge = calcAge -= calcAge + calcAge; 
    item.age = realAge
    return item
})

console.log(array2);
