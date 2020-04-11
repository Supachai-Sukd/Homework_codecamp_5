function aclean(arr) {
  let result = new Map()

  for (let str of arr) {
      let sorted = str.split('').sort().join('')
      if (result.has(sorted)) {
          result.get(sorted).push(str)
      } else {
          result.set(sorted, [str])
      }
  }
  return Array.from(result.values())
}
let array = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(array));
