const db = require('../models')





const addPhoneToUser = async (req, res) => {
    const { dayAddPhone, identityPhone, phoneOfUser } = req.body
    const targetPhone = await db.Ownphone.findOne({ where: { phone_id: identityPhone } })
    if (targetPhone) {
        res.status(400).send({ message: "Phone number already add to user !!" })
    } else {
        const newEditPhone = await db.User.create({

        })

       const sumphone = await db.Ownphone.create({
            day: dayAddPhone,
            phone_id: identityPhone,
            user_phone_id: phoneOfUser
        })
        res.status(201).send({ message: "Edit phone success" })
    }
}

const getPhoneAndUser = async (req, res) => {
    const fetchPhone = await db.Phone.findAll({
        include: User
    })
   
    res.status(200).send(fetchPhone)
}



module.exports = {
    getPhoneAndUser,
    addPhoneToUser
};