let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// This one found the food
speedy.eat("apple");
console.log(speedy.stomach); // apple

// This one also has it, why? fix please.
for (let prop in lazy) {
  let isOwn = lazy.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`Lazy ${prop}`);
  } else {
    console.log(`Inherited: ${prop}`);
  }
}
