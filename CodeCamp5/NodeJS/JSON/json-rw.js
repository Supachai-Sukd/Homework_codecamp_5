const fs = require('fs')
let data, jsobj, users

data = fs.readFileSync('./sample.json')
// console.log(data.toString());
//แปลง JSON เป็น Object เพื่อให้พร้อมใช้งาน
jsobj = JSON.parse(data)
// console.log(jsobj);
users = jsobj.users
users.map((item ,index ,array ) => {
    console.log(`${item.firstName} : ${item.phoneNumber}`)
})


