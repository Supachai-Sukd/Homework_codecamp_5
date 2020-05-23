let pockets = {
  money: 2000,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: pockets,
};

let table = {
  pen: 3,
  __proto__: bed,
};

let head = {
  glasses: 1,
  __proto__: table,
};

console.log(head); //glasses: 1
console.log(head.pen); //3
console.log(head.sheet);  //1
console.log(head.pillow); //2
console.log(head.money); //2000




