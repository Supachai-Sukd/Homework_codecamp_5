const express = require('express')
const app = express()

const userRoute = require('./userRouter')
app.use('/user', userRoute)

app.use(express.static('../public'))

app.listen(3000, () => console.log('Express server start...'))