function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  console.log(this.name); //Rabbit,  undefined, undefined, undefined,
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); //undefined
Rabbit.prototype.sayHi(); //undefined
Object.getPrototypeOf(rabbit).sayHi(); //undefined
rabbit.__proto__.sayHi(); //undefined
