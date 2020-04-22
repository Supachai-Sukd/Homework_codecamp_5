let array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
  ]
let array2 = array1.map(function(item, index, array) {
   return (`<tr>
   <td>${item.name}</td> 
   <td>${item.birth}</td>
  </tr>`
)

})

console.log(array2);
