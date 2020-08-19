// let year = prompt(`ปีแรกที่จัด Codecamp คือปีอะไร`);

// if(year == 2018){
//     alert(`ถูกต้อง ${year}`);
//     alert(`เก่งมากๆ ${year}`);
// }
// else if(year == 2019 || year == 2017){
//     alert(`ใกล้แล้วอีกนิดเดียว ${year}`);
// }
// else{
//     
//     alert(`กด F5 ลองใหม่นะ ${year}`);
// }


// year == 2018 ? alert(`ถูกต้อง ${year}`) : alert(`ผิดนะ ${year}`);

// let name = prompt(`คุณชื่ออะไร`);

// if(name == 'Bank' || name == 'bank'){
//     alert(`เก่งมาก ${name}`);
// }
// else{
//     alert(`คุณไม่รู้จักชื่อฉัน`);
// }

// let score = prompt(`Enter your score`);

// if(score >= 80 && score <= 100){
//     alert(`คะแนน ${score} ได้ Grade A`);
// }
// else if(score >= 70 && score <= 79){
//     alert(`คะแนน ${score} ได้ Grade B`);
// }
// else if(score >= 60 && score <= 69){
//     alert(`คะแนน ${score} ได้ Grade C`);
// }
// else if(score >= 50 && score <= 59){
//     alert(`คะแนน ${score} ได้ Grade D`);
// }
// else if(score > 100){
//     alert(`คุณกรอกคะแนนผิด คุณกรอกคะแนนมา ${score} โปรดกรอกใหม่`);
// }
// else{
//     alert(`ตั้งใจอีกนิดนะคะแนนคุณได้ ${score} ได้ Grade F`);
// }

let age = prompt(`How old are you ?`);
let price;
age < 18  ?  ((price = 2000) ,(alert(`ต่ำกว่า 18 ราคา ${price}`))) 
    : ((price = 3500),(alert(`อายุ 18 ขึ้นไป ราคา ${price}`)));