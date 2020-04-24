let key = prompt("Enter fruit");
let obj = {};

while (key !== "stop") {
    let value = prompt("Enter number fruit")
    if (Number(value) > 1) {
        value += "s"
    }
    obj[key] = value;
    key = prompt("Enter your fruit");
}

console.log(obj);
