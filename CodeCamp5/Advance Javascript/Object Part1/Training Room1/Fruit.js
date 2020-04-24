let key = prompt("Enter your fruit");
let obj = {};

while (key !== "stop") {
  let value = prompt(`Enter number of ${key}`);

  if (Number(value) > 1) {
    key += "s";
  }
  obj[key] = value;
  key = prompt("Enter your fruit");
}

alert(`${obj.key} ${obj.value}`);
