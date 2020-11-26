let globArr = [];

function spltString(str) {
  let spaceString = str.split(' ')
  spaceString.forEach(function(obj) {
    
    globArr.push("/#" + obj)
  })
  return spaceString
}

console.log(spltString("Test1 Test2"))
console.log("#");