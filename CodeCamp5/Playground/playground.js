// function Calculator () {
//     this.read = function () {
//         this.num1 = Number(prompt(`Enter first number`));
//         this.num2 = Number(prompt(`Enter second number`));
//     }
//     this.sum = function () {
//         return this.num1 + this.num2;
//     }
//     this.mul = function () {
//         return this.num1 * this.num2;
//     }
// }

// let calc1 = new Calculator()

function Accumulator (startMoney) {
    this.value = startMoney;
    this.read = function () {
        let temp = prompt(`Enter number`);
        this.value += Number(temp)
    }
}

let accu = new Accumulator(20)