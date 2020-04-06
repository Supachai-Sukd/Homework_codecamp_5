let million = 1e6;
let billion = 7.3e9;
let divide = 1.23 / 100000000;

console.log(million);
console.log(billion);
console.log(divide);

// Rounding คือการปัดเศษ Method แรก คือ
//Math.floor คือ ปัดเศษลงหมด
console.log(Math.floor(3.5));
//Math.ceil ปัดเศษขึ้นทั้งหมด
console.log(Math.ceil(3.5));
//Math.round คือ ถ้ามากกว่า .5 ปัดขึ้น น้อยกว่า .5 ปัดลง
console.log(Math.round(3.5));
console.log(Math.round(3.4));
//Math.trunc คือตัดทศนิยมทิ้ง
console.log(Math.trunc(3.5));

//Math.toFixed คือการปัดเศษโดยใส่จำนวนที่ต้องการแสดงลงในวงเล็บ
let num1 = 12.34;
console.log(num1.toFixed(1));  //12.3

let num2 = 12.34;
console.log(num2.toFixed(2)); //12.34

let num3 = 12.34;
console.log(num3.toFixed(3)); //12.340

//isNaN คือ การเช็คว่าไม้ใช้ตัวเลขจริงๆนะ
console.log(isNaN(NaN));  //true
console.log(isNaN("str")); //true
console.log(isNaN(123)); //false

//isFinite คือ การเช็คว่าเป็นจำนวนจริงไหมถ้าใช้จะ true
console.log(isFinite("15")); //true
console.log(isFinite("str")); //false เพราะเป็น NaN
console.log(isFinite(Infinity)); //false  เพราะเป็น Infinity

//parseInt รับข้อความมาเปลี่ยนเป็นค่าจำนวนเต็ม
console.log(parseInt('100px'));

//parseFloat รับข้อความมาเปลี่ยนเป็นค่าจำนวนจริง

//Math.random()
// console.log(Math.random());
// console.log(Math.random());

//Math.max จะ return ค่ามากที่สุดมา
console.log(Math.max(3,4,5,-20,0,1));  //5
//Math.min จะ return ค่าน้อยที่สุดมา
console.log(Math.min(2,5,7,10,-50,24));  //-50

//Math.pow(n,m) จะ return ค่า n กำลัง m
console.log(Math.pow(2,10)); //2 ยกกำลัง 10 = 1024












