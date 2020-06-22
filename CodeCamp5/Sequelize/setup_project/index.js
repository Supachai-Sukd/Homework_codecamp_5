const db = require('./models');
const express = require('express')
const app = express()
const cors = require('cors')
const managerRouters = require('./routes/Manager')
const branchRouters = require('./routes/Branch')
const accountRouter = require('./routes/Account')
const customerRouters = require('./routes/Customer')


app.use(cors())

app.use(express.json())
app.use(express.urlencoded( { extended: false } ))

app.use('/managers', managerRouters)
app.use('/branchs', branchRouters)
app.use('/accounts', accountRouter)
app.use('/customers', customerRouters)

db.sequelize.sync( {force: false} ).then( () => {
    app.listen(8000, () => {
        console.log('Server is running on port 8000')
    })
} )

