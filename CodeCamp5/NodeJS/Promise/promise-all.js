//Promise - all
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const pm1 = new Promise( (rs, rj) => {
    let n  = getRndInteger(1, 9)
        if (n < 5) rs(n)
        else rj(n)
})
const pm2 = new Promise( (rs, rj) => {
    let n  = getRndInteger(1, 9)
        if (n < 5) rs(n)
        else rj(n)
})
const pm3 = new Promise( (rs, rj) => {
    let n  = getRndInteger(1, 9)
        if (n < 5) rs(n)
        else rj(n)
})

Promise.all( [pm1, pm2, pm3]).then( (r) => {
    console.log('Pass all')
    console.log(r);
    
}).catch( (err) => {
    console.log(`Some pm ${err}`)
    console.log(err)
    
})