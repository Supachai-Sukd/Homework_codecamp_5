const db = require('../Sequelize/setup_project/models')

db.sequelize.sync().then( () => {
    console.log("Database is Sync")
} )