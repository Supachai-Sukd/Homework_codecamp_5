//Promise - all
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function pmRandom() {
  return new Promise((rs, rj) => {
    let n = getRndInteger(1, 9);
    if (n < 5) rs(n);
    else rj(n);
  });
}

const pm1 = pmRandom();
const pm2 = pmRandom();
const pm3 = pmRandom();

Promise.all([pm1, pm2, pm3])
  .then((r) => {
    console.log("Pass all");
    console.log(r);
  })
  .catch((err) => {
    console.log(`Some pm ${err}`);
    console.log(err);
  });
