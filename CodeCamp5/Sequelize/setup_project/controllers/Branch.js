const db = require('../models')
const { sequelize, Sequelize } = require('../models')

const Op = Sequelize.Op

const getAllBranchs = async (req, res) => {
    const allBranchs = await db.Branch.findAll()
    res.status(200).send(allBranchs)
}

const createNewBranchsAndManager = async (req, res) => {
    const { managerName, managerExperience } = req.body
    const { branchName, branchSize } = req.body
}

module.exports = {
    getAllBranchs,
    createNewBranchsAndManager
}