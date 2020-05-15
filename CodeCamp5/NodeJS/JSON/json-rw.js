const fs = require('fs')
let data, jsobj, users, newData

data = fs.readFileSync('./sample.json')
// console.log(data.toString());
//แปลง JSON เป็น Object เพื่อให้พร้อมใช้งาน
jsobj = JSON.parse(data)
// console.log(jsobj);
users = jsobj.users
users.map((item ,index ,array ) => {
    if (item.lastName === 'neo') item.lastName = 'Neoakrub'
    console.log(`${item.firstName} : ${item.lastName}`)
})

newData = JSON.stringify(jsobj)
fs.writeFileSync('./output.json', newData)
console.log('Save output.json OK');
