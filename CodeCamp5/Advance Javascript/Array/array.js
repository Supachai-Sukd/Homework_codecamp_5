let fruits = ["banana","grape","durian"]
console.log(fruits[1]); //grape
fruits.push("mango");  //add mango
console.log(fruits[3]); //print mango
fruits.shift() //เอาอันหน้าออก
console.log(fruits[2]); //mango
fruits.pop() //เอาตัวท้ายออกคือ ตัด mango ออก
console.log(fruits);  //grape durian
fruits.unshift("orange")
console.log(fruits); //orange grape durian
//method push and unshift สามารถเพิ่มข้อมูลได้ทีหลายตัว
fruits.push("coconut","passion fruit") //เพิ่มไปต่อท้าย
fruits.unshift("shabu","sushi") //เพิ่มไปข้างหน้า
console.log(fruits); 
// 'shabu', 
// 'sushi', 
// 'orange', 
// 'grape', 
// 'durian', 
// 'coconut', 
// 'passion fruit'

//Methods array push/pop จะเร็วกว่า shift/unshift

//loop arry
for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for (let fruitsResult of fruits) {
    console.log(fruitsResult);
}
for (let keyMan in fruits) {
    console.log(fruits[keyMan]);
}
//loop ข้างบนทั้งหมดให้ผลดังนี้
// 'shabu', 
// 'sushi', 
// 'orange', 
// 'grape', 
// 'durian', 
// 'coconut', 
// 'passion fruit'

//array หลายมิติ
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(matrix[1][1]); //5
