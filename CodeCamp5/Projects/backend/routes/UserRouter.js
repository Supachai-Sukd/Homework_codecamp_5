const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userControl')

router.get('/', userControllers)
router.get('/:id', userControllers)
router.post('/', userControllers)
router.put('/:id', userControllers)
router.delete('/:id', userControllers)


module.exports = router