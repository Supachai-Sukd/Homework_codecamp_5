let callbackValue;
function hello4(err, value) {
  callbackValue = value;
}

function tryHello4(callbackFunction) {
  let returnValue = 'returnValue';
  let callbackValue = 'callbackValue';
  callbackFunction(null, callbackValue);
  return returnValue;
}

console.log(tryHello4(hello4)); // print returnValue เพราะว่าใน tryHello4 รีเทิน
// returnValue ออกมา
console.log(callbackValue); // print callbackValue อันนี้ไปเรียก global 
//และเจ้า ตัวแปรตัวนี้มันทำงานต่อจากการเรียกฟังชั่นใน log ข้างบน เลยได้ผลลัพจาก parameter ที่ 2 
//ซึ่ง parameter ที่ 2 นั้นในฟังชั่น tryHello4 นั้นมันเท่ากับสตริง callbackValue นั้นเอง

