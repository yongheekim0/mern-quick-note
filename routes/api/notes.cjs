const express = require('express')
const router = express.Router()
const notesControl = require('../../controllers/api/notes.cjs')
const ensureLoggedIn = require('../../config/ensureLoggedIn.cjs')


router.get('/', ensureLoggedIn, notesControl.index)
router.post('/new', ensureLoggedIn, notesControl.create);
router.delete('/:id',  ensureLoggedIn, notesControl.delete)



module.exports = router
