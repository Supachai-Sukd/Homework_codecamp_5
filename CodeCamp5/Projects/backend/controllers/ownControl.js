const db = require('../models')



const getPhoneAndUser = async (req, res) => {
    const allItemsAndUser = await db.Own.findAll()
    res.status(200).send(allItemsAndUser)
}

const addPhoneToUser = async (req, res) => {
    const { serialNotebook, modelNotebook , brandNotebook} = req.body
    const targetNotebook = await db.Notebook.findOne({ where: { serial_number: serialNotebook } })
    if (targetNotebook) {
        res.status(400).send({ message: "Notebook already taken" })
     } else {

        await db.Notebook.create({
            brand: brandNotebook,
            serial_number: serialNotebook,
            model_name: modelNotebook
        })
        res.status(201).send({ message: "Add notebook success" })
    }
}


const getNotebookAndUser = async (req, res) => {
    const allBrands = await db.Notebook.findAll()
    res.status(200).send(allBrands)
}

const addNotebookToUser = async (req, res) => {
    const { serialNotebook, modelNotebook , brandNotebook} = req.body
    const targetNotebook = await db.Notebook.findOne({ where: { serial_number: serialNotebook } })
    if (targetNotebook) {
        res.status(400).send({ message: "Notebook already taken" })
     } else {

        await db.Notebook.create({
            brand: brandNotebook,
            serial_number: serialNotebook,
            model_name: modelNotebook
        })
        res.status(201).send({ message: "Add notebook success" })
    }
}


module.exports = {
    getNotebookAndUser,
    getPhoneAndUser,
    addNotebookToUser,
    addPhoneToUser
};