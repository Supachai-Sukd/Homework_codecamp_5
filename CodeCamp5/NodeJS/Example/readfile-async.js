const fs = require("fs");

const getFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => resolve(data) )
    })
}

async function rungetFile() {
    try {
    const data = await getFile('./start.txt')
    console.log(`${data}`)
    const data1 = await getFile(data)
    console.log(`${data1}`)
    const data2 = await getFile(data1)
    console.log(`${data2}`)
    const data3 = await getFile(data2)
    console.log(`${data3}`)  
} catch(err) {
    console.error('error :  ' + err);
    
}
}

rungetFile()