const db = require('../models')
const { sequelize, Sequelize } = require('../models')

const Op = Sequelize.Op

const getAllCompany = async (req, res) => {
    const allCompany = await db.Company.findAll({ include: db.User })
    res.status(200).send(allCompany)
}

const createNewCompanyAndUser = async (req, res) => {
    const { userNameEmployee } = req.body
    const { companyName } = req.body
    const newCompany = await db.Company.create( {
        name: companyName
    } )
    const newUser = await db.User.create( {
        name: userNameEmployee,
        company_id: newCompany.id
    } )

    res.status(201).send(newUser)
}





module.exports = {
    getAllCompany,
    createNewCompanyAndUser
}