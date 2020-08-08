const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userControl')
// const authentiCation = passport.authenticate("jwt", { session:false })


router.post('/register', userControllers.createNewCompanyAndAdmin)
router.post('/login', userControllers.loginUser)
router.put('/update/:id', userControllers.changeNameUser)
router.get('/',userControllers.getAllUsers)
router.post('/empregister', userControllers.employeeRegister)
router.delete('/remove/:id', userControllers.deleteUser)


module.exports = router