const express = require('express')
const app = express()
const fs = require('fs')

let data = JSON.parse(fs.readFileSync('./sample.json'))
let users = data.users
let listcounter = 0

app.use('/list', (req, res, next) => {
    listcounter++
    console.log(`Request to  number :`+listcounter)
    next()
})

app.get('/list', (req, res) => {
    res.send(users)
})

app.get('/search', (req, res) => {
    res.send(users.find( x=> x.firstName === req.query.uname))
})

app.get('/users/:id', (req, res) => {
    res.send(users[req.params.id])
})

app.get('/username/:uname', (req, res) => {
    res.send(users.find( x=> x.firstName === req.params.uname))
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