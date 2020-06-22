const db = require('../models')
const { sequelize, Sequelize } = require('../models')

const Op = Sequelize.Op

const getAllBranchs = async (req, res) => {
    const allBranchs = await db.Branch.findAll({ include: db.Manager })
    res.status(200).send(allBranchs)
}

const createNewBranchsAndManager = async (req, res) => {
    const { managerName, managerExperience } = req.body
    const { branchName, branchSize } = req.body
    const newManager = await db.Manager.create( {
        name: managerName,
        experience: managerExperience
    } )
    const newBranch = await db.Branch.create( {
        name: branchName,
        size: branchSize,
        manager_id: newManager.id
    } )

    res.status(201).send(newBranch)
}

module.exports = {
    getAllBranchs,
    createNewBranchsAndManager
}