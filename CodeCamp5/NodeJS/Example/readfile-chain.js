const fs = require("fs");

const getfile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => resolve(data));
  });
};

getfile("./start.txt")
  .then((data) => {
    console.log(`${data}`);
    return getfile(`${data}`);
  })
  .then((data) => {
    console.log(`${data}`);
    return getfile(`${data}`);
  })
  .then((data) => {
    console.log(`${data}`);
    return getfile(`${data}`);
  });
