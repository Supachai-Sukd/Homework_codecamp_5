let fruits = ["Apple", "Orange"];
fruits.push("Pear");
console.log(fruits);
console.log(fruits.shift());
console.log(fruits);
fruits.unshift("Apple");
console.log(fruits);
fruits.push("Pineapple", "Grape");
console.log(fruits);
fruits.unshift("Lemon", "Durian");
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruitNakrub of fruits) {
  console.log(fruitNakrub);
}

for (let key in fruits) {
  console.log(fruits[key]);
}

let styles = ["Jazz", "Blues"];
styles.push("RockRoll");
console.log(styles);
styles[1] = "Classics";

console.log(styles);
styles.shift()
console.log(styles);
styles.unshift("Rap","Raggae");
console.log(styles);
