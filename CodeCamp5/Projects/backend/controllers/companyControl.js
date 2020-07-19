const db = require('../models')


const getAllCompany = async (req, res) => {
    const allCompany = await db.Company.findAll({ include: db.User })
    res.status(200).send(allCompany)
}







module.exports = {
    getAllCompany
}