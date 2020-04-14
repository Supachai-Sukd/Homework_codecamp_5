function sumInput() {
  let numbers = /^[0-9]+$/;
  let total = [];
  let result = 0;

  let read = prompt(`Enter number`);
  for (let i = 0; read.match(numbers); i++) {
    total[i] = read;

    result += total[i];

    read = prompt(`Enter number`);
  }
  let resultOfMap = total.map(function (item, index, array) {
    return item;
  });
  alert(resultOfMap);
}

sumInput();
