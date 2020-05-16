let pi = 3.14
const user = {name : 'John',age:30}

let circleArea = (r) => {
    return pi*r**2
}

let getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min+1)) + min;
}

module.exports.circleArea = circleArea
module.exports.getRandom = getRandom
module.exports.user = user
