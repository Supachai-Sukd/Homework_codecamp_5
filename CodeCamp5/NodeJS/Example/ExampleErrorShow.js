const fs = require('fs');


fs.readFile('./reademe.txt', (err, data) => {
    if (err) {
        console.log("Error nakrub");
        return;
    }
    console.log(`This is information ${data} naja`);
    console.log("Done in callback");
  });


console.log("Done outside callback");

