const express = require('express')
const router = express.Router()
const phoneControllers = require('../controllers/phonenumberControl')

router.get('/', phoneControllers.getAllPhones)
// router.get('/:id', phoneControllers)
router.post('/add', phoneControllers.addNewPhones)
// router.put('/:id', phoneControllers)
// router.delete('/:id', phoneControllers)


module.exports = router