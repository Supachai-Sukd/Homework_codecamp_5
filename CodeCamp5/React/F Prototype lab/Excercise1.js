function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;



console.log("การทำแบบ Rabbit.prototype = {}; จะทำให้ constructor หายไป");
console.log("การทำ Rabbit.prototype.eats = false จะเป็นการเปลี่ยนแปลงค่า eats ของ Rabbit เป็น false");
console.log("การทำ delete rabbit.eats จะยังได้ค่า true เพราะมันไม่ได้ตามไปลบ prototype ของ  Rabbit");
console.log("การทำ delete Rabbit.prototype.eats จะได้ undefined เพราะมันตามไปลบ prototype เลย")


console.log( rabbit.eats ); // true
