const express = require('express')
const app = express()
const fs = require('fs')

let data = JSON.parse(fs.readFileSync('./sample.json'))
let users = data.users

app.get('/users/:id', (req, res) => {
    res.send(users[req.params.id])
})

app.get('/list', (req, res) => {
    res.send(users)
})

app.get('/listname', (req, res) => {
    let outHTML = '<ol>'
    users.forEach( x=> {
        outHTML += `<li> ${x.firstName} ${x.lastName} <b> ${x.emailAddress} </b> </li>`
    })
    outHTML += '</ol>'
    res.send(outHTML)
})

app.listen(3000, () => console.log('Express server start'))