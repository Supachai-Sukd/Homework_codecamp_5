const express = require('express')
const router = express.Router()
const notebookControllers = require('../controllers/notebookControl')
const passport = require('passport')
const authentiCation = passport.authenticate("jwt", { session:false })

router.get('/',authentiCation, notebookControllers.getAllNoteBooks)
router.get('/addminnotebooks',authentiCation, notebookControllers.getNoteBooksForAdmin)
router.post('/add',authentiCation, notebookControllers.addNewNotebook)
router.put('/update/:id',authentiCation, notebookControllers.addNotebookToUser)
router.delete('/remove/:id',authentiCation, notebookControllers.deleteNotebook)


module.exports = router