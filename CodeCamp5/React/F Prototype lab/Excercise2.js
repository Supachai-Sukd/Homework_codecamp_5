function obj () {}


let obj2 = new obj.constructor();
let obj3 = new obj()


console.log(obj2.constructor == obj);
console.log(obj3.constructor == obj);
console.log("ทำแบบ let obj2 = new obj.constructor() ไม่ได้จะได้ false");
