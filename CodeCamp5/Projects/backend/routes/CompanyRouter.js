const express = require('express')
const router = express.Router()
const companyControllers = require('../controllers/companyControl')


router.get('/', companyControllers.getAllCompany)
router.post('/create', companyControllers.createNewCompanyAndUser)



module.exports = router