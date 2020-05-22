const express = require('express')
const app = express()

const userRoute = require('./userRouter')
app.use('/user', userRoute)

app.use('/pub', express.static('../public'))
app.get('/', (req, res) => {
    res.redirect('/pub/form1.html')
})

app.listen(3000, () => console.log('Express server start...'))