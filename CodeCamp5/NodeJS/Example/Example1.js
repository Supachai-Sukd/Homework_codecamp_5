const os = require('os');

let to = os.totalmem()


let free = os.freemem()

console.log(`Total ram = ${to} total free = ${free}`);
console.log(`Usage = ${to - free}`);
console.log(os.hostname());
