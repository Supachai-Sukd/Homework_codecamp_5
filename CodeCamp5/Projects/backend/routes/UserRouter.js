const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userControl')


router.post('/register', userControllers.createNewCompanyAndAdmin)
router.post('/login', userControllers.loginUser)
router.post('/registeradmin', userControllers.createNewCompanyAndAdmin)
router.get('/', userControllers.getAllUsers)
router.post('/empregister', userControllers.employeeRegister)
router.delete('/remove/:id', userControllers.deleteUser)


module.exports = router