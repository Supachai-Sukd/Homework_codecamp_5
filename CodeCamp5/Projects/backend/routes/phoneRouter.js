const express = require('express')
const router = express.Router()
const phonesControllers = require('../controllers/phonenumberControl')
const passport = require('passport')
const authentiCation = passport.authenticate("jwt", { session:false })

router.get('/',authentiCation, phonesControllers.getAllPhones)
// router.get('/:id', phoneControllers)
router.post('/add',authentiCation, phonesControllers.addNewPhones)
router.put('/update/:id',authentiCation, phonesControllers.addPhonesToUser)
router.delete('/remove/:id',authentiCation, phonesControllers.deletePhoneNumber)


module.exports = router