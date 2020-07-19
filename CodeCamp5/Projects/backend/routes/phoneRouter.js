const express = require('express')
const router = express.Router()
const phoneControllers = require('../controllers/phonenumberControl')
const editphoneControllers = require('../controllers/ownphoneControl')

router.get('/', phoneControllers.getAllPhones)
// router.get('/:id', phoneControllers)
router.post('/add', phoneControllers.addNewPhones)
router.post('/edit', editphoneControllers.addPhoneToUser)
router.get('/resultupdate', editphoneControllers.getPhoneAndUser)
// router.put('/:id', phoneControllers)
// router.delete('/:id', phoneControllers)


module.exports = router