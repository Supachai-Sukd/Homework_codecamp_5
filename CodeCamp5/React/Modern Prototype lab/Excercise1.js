let dict = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join();
    },
  },
});

dict.banana = "Banana";
dict.__proto__ = "Grape";

for (let key in dict) {
  console.log(key);
}

console.log(dict);
