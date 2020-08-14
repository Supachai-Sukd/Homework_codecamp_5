const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userControl')
const passport = require('passport')
const authentiCation = passport.authenticate("jwt", { session:false })


router.post('/register', userControllers.createNewCompanyAndAdmin)
router.post('/login', userControllers.loginUser)
router.put('/update/:id',authentiCation, userControllers.changeNameUser)
router.get('/',authentiCation, userControllers.getAllUsers)
router.post('/empregister',authentiCation, userControllers.employeeRegister)
router.delete('/remove/:id',authentiCation, userControllers.deleteUser)


module.exports = router