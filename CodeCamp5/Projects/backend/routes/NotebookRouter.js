const express = require('express')
const router = express.Router()
const notebookControllers = require('../controllers/notebookControl')

router.get('/', notebookControllers)
router.get('/:id', notebookControllers)
router.post('/', notebookControllers)
router.put('/:id', notebookControllers)
router.delete('/:id', notebookControllers)


module.exports = router