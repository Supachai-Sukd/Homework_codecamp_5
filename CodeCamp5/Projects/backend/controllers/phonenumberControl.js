const db = require('../models')



const getAllPhones = async (req, res) => {
    const allBrands = await db.Phone.findAll()
    res.status(200).send(allBrands)
}

const addNewPhones = async (req, res) => {
    const { phoneNum , providerOfPhone} = req.body
    const targetPhone = await db.Phone.findOne({ where: { phone_number: phoneNum } })
    if (targetPhone) {
        res.status(400).send({ message: "Phone number already taken" })
     } else {

        await db.Phone.create({
            phone_number: phoneNum,
            provider: providerOfPhone
           })
        res.status(201).send({ message: "Add phone number success" })
    }
}


module.exports = {
    getAllPhones,
    addNewPhones
};