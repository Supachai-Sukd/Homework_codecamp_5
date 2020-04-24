let key = prompt("Enter key");
let obj = {}

while (key !== "stop") {
    let value = prompt("Enter value: ");
    obj[key] = value;
    key = prompt("Enter key: ");
}

alert(obj)