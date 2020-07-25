const express = require('express')
const router = express.Router()
const notebookControllers = require('../controllers/notebookControl')

router.get('/', notebookControllers.getAllNoteBooks)
// router.get('/:id', notebookControllers)
router.post('/add', notebookControllers.addNewNotebook)
router.put('/update/:id', notebookControllers.addNotebookToUser)
router.delete('/remove/:id', notebookControllers.deleteNotebook)


module.exports = router