const db = require('../models')




const getAllPhones = async (req, res) => {
    const allBrands = await db.Phone.findAll({
        where: { user_id: req.user.id },
        include: db.User.name
    })
    res.status(200).send(allBrands)
}

const getPhoneForAdmin = async (req, res) => {
    const targetCompany = await db.User.findOne({ where: { company_id: req.user.company_id } })

    const allBrands = await db.Phone.findAll({
        where: { phone_company_id: targetCompany.company_id },
        include:
            db.User.name
    })
    res.status(200).send(allBrands)

}



const addNewPhones = async (req, res) => {
    const { phoneNum, providerOfPhone } = req.body
    const targetPhone = await db.Phone.findOne({ where: { phone_number: phoneNum } })
    const targetCompany = await db.User.findOne({ where: { company_id: req.user.company_id } })
    if (targetPhone) {
        res.status(400).send({ message: "Phone number already taken" })
    } else {
        const newPhone = await db.Phone.create({
            phone_number: phoneNum,
            provider: providerOfPhone,
            phone_company_id: targetCompany.company_id
        })

        res.status(201).send({ message: "Add phone number success" })
    }
}





const addPhonesToUser = async (req, res) => {
    const targetPhone = req.params.id
    const { targetUser } = req.body

    await db.Phone.update({
        user_id: targetUser
    }, {
        where: { id: targetPhone }
    })

    res.status(201).send({ message: "Update phone number success" })
}


const deletePhoneNumber = async (req, res) => {
    const targetID = req.params.id
    await db.Phone.destroy({
        where: { id: targetID }
    })
    res.status(204).send(targetID)
}


module.exports = {
    getAllPhones,
    addNewPhones,
    addPhonesToUser,
    deletePhoneNumber,
    getPhoneForAdmin
};