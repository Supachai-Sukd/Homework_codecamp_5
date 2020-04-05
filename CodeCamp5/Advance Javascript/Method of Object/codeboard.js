let calculator = {
    read() {
        this.number1 = Number(prompt("Enter first number"));
        this.number2 = Number(prompt("Enter Second number"));
    },
    mul() {
        return this.number1 * this.number2;
    },
    sum() {
        return this.number1 + this.number2;
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );
  