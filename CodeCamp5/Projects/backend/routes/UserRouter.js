const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userControl')

// router.get('/', userControllers)
// router.get('/:id', userControllers)
router.post('/register', userControllers.registerUser)
router.post('/login', userControllers.loginUser)
router.post('/registeradmin', userControllers.createNewCompanyAndAdmin)
router.get('/', userControllers.getAllUsers)
router.post('/empregister', userControllers.employeeRegister)
// router.put('/empregister', userControllers.employeeRegisterToCompany)
// router.delete('/:id', userControllers)


module.exports = router