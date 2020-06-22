const express = require('express')
const router = express.Router()
const branchControllers = require('../controllers/Branch')

router.get('/', branchControllers.getAllBranchs)
router.post('/', branchControllers.createNewBranchsAndManager)


module.exports = router