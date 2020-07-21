const express = require('express')
const router = express.Router()
const phonesControllers = require('../controllers/phonenumberControl')

router.get('/', phonesControllers.getAllPhones)
// router.get('/:id', phoneControllers)
router.post('/add', phonesControllers.addNewPhones)
router.put('/update/:id', phonesControllers.addPhonesToUser)
router.delete('/remove/:id', phonesControllers.deletePhoneNumber)


module.exports = router