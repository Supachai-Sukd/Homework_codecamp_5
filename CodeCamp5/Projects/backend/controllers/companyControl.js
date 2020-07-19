const db = require('../models')
const { sequelize, Sequelize } = require('../models')

const Op = Sequelize.Op

const getAllCompany = async (req, res) => {
    const allCompany = await db.Company.findAll({ include: db.User })
    res.status(200).send(allCompany)
}







module.exports = {
    getAllCompany
}