require('dotenv').config()
const db = require('./models');
const express = require('express')
const app = express()
const cors = require('cors')
const companyRouters = require('./routes/companyRouter')
const notebookRouter = require('./routes/notebookRouter')
const userRouters = require('./routes/userRouter')
const phoneRouters = require('./routes/phoneRouter')


require('./config/passport')


app.use(cors())

app.use(express.json())
app.use(express.urlencoded( { extended: false } ))

app.use('/phones', phoneRouters)
app.use('/companies', companyRouters)
app.use('/notebooks', notebookRouter)
app.use('/users', userRouters)

db.sequelize.sync( {force: false} ).then( () => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
} )

