// for(let i = 1;i <= 9;i++){
//     alert(i);
//     if(i == 6){
//         break;
//     }
// }

let sum = 0;
while (true) {
    value = +prompt(`ใส่ตัวเลข`,``)
    if(!value) break;  //จะทำให้ตรงนี้เป็นจริงได้ต้องมีค่าเป็น False
    sum += value  //พอได้ False ปุบเราก็ให้ sum เท่ากับ sum + value
}

alert(sum)  //Show sum