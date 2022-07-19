const uniqid = require('uniqid');
const router = require('express').Router();
const { notes } = require('../../db/db.json');
const { viewNotes, createNote } = require('../../lib/notes');

router.get('/api/notes', (req, res) => {
    viewNotes();
})

router.post('/api/notes', (req, res) => {
    let note = {
        id: uniqid(),
        title: req.body.title,
        text: req.body.text
    }
    createNote(note);
});

module.exports = router;