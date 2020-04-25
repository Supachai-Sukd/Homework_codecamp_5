let array1 = new Map([
    ['Test1', 500],
    ['Test2', 400],
    ['Test3', 300]
])
  



let array2 = array1.forEach( (value, key, map) => {
    console.log(`This is key ${key} : This value ${value}`);
    
})