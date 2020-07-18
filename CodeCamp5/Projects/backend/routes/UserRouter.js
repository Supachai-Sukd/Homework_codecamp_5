const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userControl')

// router.get('/', userControllers)
// router.get('/:id', userControllers)
router.post('/register', userControllers.registerUser)
router.post('/login', userControllers.loginUser)
router.get('/', userControllers.getAllUsers)
// router.put('/:id', userControllers)
// router.delete('/:id', userControllers)


module.exports = router