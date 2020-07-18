const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userControl')

// router.get('/', userControllers)
// router.get('/:id', userControllers)
router.post('/register', userControllers.registerUser)
router.post('/login', userControllers.loginUser)
router.get('/', userControllers.getAllUsers)
router.put('/update/:id', userControllers.updateCompanyAndUser)
// router.delete('/:id', userControllers)


module.exports = router