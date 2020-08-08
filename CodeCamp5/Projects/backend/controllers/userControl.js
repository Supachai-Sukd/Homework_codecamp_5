const db = require('../models')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {
    const { username, password, name, userlevel } = req.body
    const targetUser = await db.User.findOne({ where: { username: username } })
    if (targetUser) {
        res.status(400).send({ message: "Username already taken" })
    } else {
        const salt = bcryptjs.genSaltSync(12)
        const hashedPassword = bcryptjs.hashSync(password, salt)

        await db.User.create({
            username: username,
            password: hashedPassword,
            name: name,
            userlevel: userlevel
        })

        res.status(201).send({ message: "User created" })
    }

}




const loginUser = async (req, res) => {
    const { username, password } = req.body
    const targetUser = await db.User.findOne({ where: { username: username } })
    if (!targetUser) {
        res.status(400).send({ message: 'Username or password is wrong' })
    } else {
        const isCorrectPassword = bcryptjs.compareSync(password, targetUser.password)
        if (isCorrectPassword) {
            const payload = {
                name: targetUser.name,
                id: targetUser.id,
                company_id: targetUser.company_id
            }
            const token = jwt.sign(payload, process.env.SECRET_OR_KEY, { expiresIn: 3600 })

            res.status(200).send({
                token: token,
                message: "Login successful"
            })
        } else {
            res.status(400).send({ message: 'Username or password is wrong' })
        }
    }

}

// const getAllUsers = async (req, res) => {
//     // const targetUserCompany = await db.User.findOne({ where: { company_id: company_id } })
//     // const tarGetCom = req.params.id
//     const allUsers = await db.User.findAll({
//         attributes: ['id','name', 'position', 'user_level', 'company_id']
//     }, {
//         group: ['company_id']
//     }
//         )

//     res.status(200).send(allUsers)
// }



const getAllUsers = async (req, res) => {
    const allUsers = await db.User.findAll({
        attributes: ['id','name', 'position', 'user_level']})

    res.status(200).send(allUsers)
}




const createNewCompanyAndAdmin = async (req, res) => {
    const { NameAdmin, companyName, usernameLoginAdmin, passwordLoginAdmin, levelAdmin, positionOrganize } = req.body
    const targetUser = await db.User.findOne({ where: { username: usernameLoginAdmin } })
    const targetCompany = await db.Company.findOne({ where: { name: companyName } })

    if (targetUser) {
        res.status(400).send({ message: "Username already taken" })
    } else if (targetCompany) {
        res.status(400).send({ message: "Company already taken" })
    } else {
        const salt = bcryptjs.genSaltSync(12)
        const hashedPassword = bcryptjs.hashSync(passwordLoginAdmin, salt)

        const newCompany = await db.Company.create({
            name: companyName
        })
        const newUser = await db.User.create({
            username: usernameLoginAdmin,
            password: hashedPassword,
            user_level: levelAdmin,
            name: NameAdmin,
            position: positionOrganize,
            company_id: newCompany.id
        })

        res.status(201).send(newUser)

    }

}


const employeeRegister = async (req, res) => {
    const { empUsername, empPassword, empLevel, empName, empPosition, targetCompany } = req.body
    const targetUser = await db.User.findOne({ where: { username: empUsername } })

    if (targetUser) {
        res.status(400).send({ message: "Username already taken" })
    } else {
        const salt = bcryptjs.genSaltSync(12)
        const hashedPassword = bcryptjs.hashSync(empPassword, salt)

        const empRegister = await db.User.create({
            username: empUsername,
            password: hashedPassword,
            user_level: empLevel,
            name: empName,
            position: empPosition,
            company_id: targetCompany
        }
        )

        res.status(200).send({ message: "Register is success" })
    }


}


const deleteUser = async (req, res) => {
    const targetID = req.params.id
    await db.User.destroy({
        where: { id: targetID }
    })
    res.status(204).send({ message: "Delete user success" })
}

const changeNameUser = async (req, res) => {
    const targetUserInCompany = req.params.id
    const { targetUser } = req.body

    await db.User.update({
        name: targetUser
    }, {
        where: { id: targetUserInCompany }
    })

    res.status(201).send({ message: "Change name success" })
}



module.exports = {
    loginUser,
    registerUser,
    getAllUsers,
    createNewCompanyAndAdmin,
    employeeRegister,
    deleteUser,
    changeNameUser
}