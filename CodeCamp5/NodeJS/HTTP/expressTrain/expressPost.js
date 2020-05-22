const express = require('express')
const app = express()
const fs = require('fs')
const bodyParser = require('body-parser')

let data = JSON.parse(fs.readFileSync('./sample.json'))
users = data.users

app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/pub', express.static('../public'))
app.get('/', (req, res) => {
    res.redirect('/pub/form1.html')
})

app.post('/dosearch', (req, res) => {
    console.log(req.body)
    res.send(users.filter( x => x.firstName.includes(req.body.firstname)))
})



app.listen(3000, () => console.log('Express server start...'))