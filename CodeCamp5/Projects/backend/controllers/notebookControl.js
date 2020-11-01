const db = require('../models')
const jwt = require('jsonwebtoken')



const getAllNoteBooks = async (req, res) => {


    const allBrands = await db.Notebook.findAll({
        where: { user_id: req.user.id },
        include: db.User.name
    })



    res.status(200).send(allBrands)
}

const getNoteBooksForAdmin = async (req, res) => {

    const targetCompany = await db.User.findOne({ where: { company_id: req.user.company_id } })

    const allBrands = await db.Notebook.findAll({
        where: { nb_company_id: targetCompany.company_id },
        include:
            db.User.name
    })
    res.status(200).send(allBrands)
}

const addNewNotebook = async (req, res) => {
    const { serialNotebook, modelNotebook, brandNotebook } = req.body
    const targetNotebook = await db.Notebook.findOne({ where: { serial_number: serialNotebook } })
    const targetCompany = await db.User.findOne({ where: { company_id: req.user.company_id } })
    if (targetNotebook) {
        res.status(400).send({ message: "Notebook already taken" })
    } else {

        await db.Notebook.create({
            brand: brandNotebook,
            serial_number: serialNotebook,
            model_name: modelNotebook,
            nb_company_id: targetCompany.company_id
        })
        res.status(201).send({ message: "Add notebook success" })
    }
}




const addNotebookToUser = async (req, res) => {
    const targetNotebook = req.params.id
    const { targetUser } = req.body

    await db.Notebook.update({
        user_id: targetUser
    }, {
        where: { id: targetNotebook }
    })

    res.status(201).send({ message: "Update notebook success" })
}

const deleteNotebook = async (req, res) => {
    const targetID = req.params.id
    await db.Notebook.destroy({
        where: { id: targetID }
    })
    res.status(204).send(targetID)
}

module.exports = {
    addNewNotebook,
    getAllNoteBooks,
    addNotebookToUser,
    deleteNotebook,
    getNoteBooksForAdmin
};
