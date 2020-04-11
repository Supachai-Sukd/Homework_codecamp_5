function aclean(arr) {
  let result = new Map();
  let anagramTeeruk;
  for (let str of arr) {
    let sorted = str.split("").sort().join("");
    if (result.has(sorted)) {
      result.get(sorted).push(str);
    } else {
      result.set(sorted, [str]);
    }
  }
  let resultArr = Array.from(result.values());
  let obj1 = resultArr[0];
  console.log(obj1);
  let obj2 = resultArr[1];
  console.log(obj2);
  let obj3 = resultArr[2];
  console.log(obj3);
  let obj4 = resultArr[3];
  console.log(obj4);

  anagramTeeruk = `${obj1} ${obj2[0]} ${obj4[0]}`;

  return anagramTeeruk;
}
let array = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(array));
