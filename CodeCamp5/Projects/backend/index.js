const db = require('./models');
const express = require('express')
const app = express()
const cors = require('cors')
const brandRouters = require('./routes/BrandRouter')
const companyRouters = require('./routes/CompanyRouter')
const notebookRouter = require('./routes/NotebookRouter')
const phonenumberRouters = require('./routes/PhonenumberRouter')
const providerRouters = require('./routes/ProviderRouter')
const userRouters = require('./routes/UserRouter')


app.use(cors())

app.use(express.json())
app.use(express.urlencoded( { extended: false } ))

app.use('/brands', brandRouters)
app.use('/companies', companyRouters)
app.use('/notebooks', notebookRouter)
app.use('/phones', phonenumberRouters)
app.use('/providers', providerRouters)
app.use('/users', userRouters)

db.sequelize.sync( {force: true} ).then( () => {
    app.listen(8000, () => {
        console.log('Server is running on port 8000')
    })
} )

