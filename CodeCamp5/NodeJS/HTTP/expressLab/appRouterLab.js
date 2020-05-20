const express = require('express')
const app = express()



let userRouter = require('./routerLab')
app.use('/dog', userRouter)
app.use('/cat', userRouter)

app.listen(3000, () => console.log('Express start...'))