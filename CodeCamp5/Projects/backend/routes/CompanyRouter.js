const express = require('express')
const router = express.Router()
const companyControllers = require('../controllers/companyControl')


router.get('/', companyControllers.getAllCompany)




module.exports = router