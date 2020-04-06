function sum (a, b) {
    return a + b;
}

console.log(`This is sum of above function is ${sum(5,9)}`);

let = guestList = "Guest : \n * John\n * Pete\n * Mary"
console.log(guestList);

let heyMan = "Hey \"Bank\" ";
console.log(heyMan);

let str = "Happy new year 2020";
console.log(str.length); //19
console.log("Hello".length); //5

let str1 = "Heal";
console.log(str1[0]); //H
console.log(str1[1]); //e
console.log(str1[2]); //a
console.log(str1[3]);  //l
//ปล ถ้าใส่นอกเหนือหรือเกินจำนวนในข้อความมันจะ undefined

for ( let char of "Hello haha") {
    console.log(char); 
}

//Edit string
let str2 = "Hi";
str2 = "j" + str2[1];
console.log(str2); //ji

//Text transform
console.log("Some Upper case to Lower Case".toLowerCase());
console.log("every lower case to upper case".toUpperCase());

//ค้นหาข้อความ ตัว indexOf จะหาเจอแค่ตัวแรกเท่านั้น
let str4 = 'Widget with id';

console.log( str4.indexOf('Widget') ); // 0, พบที่ตำแหน่งแรก
console.log( str4.indexOf('widget') ); // -1, ไม่พบ เพราะว่าตัว “W” กับ “w”
console.log( str4.indexOf("id") ); // 1, "id" พบที่ตำแหน่งที่ 1

