const fs = require('fs');
const uniqid = require('uniqid');
const router = require('express').Router();
const { createNote, deleteNote } = require('../../lib/notes');
const { notesArray } = require('../../db/db.json');

router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if(err) throw err;
        res.send(data);
    })
})

router.post('/api/notes', (req, res) => {
    let note = {
        title: req.body.title,
        text: req.body.text,
        id: uniqid()
    }
    createNote(note);
    res.send('New note has been added.')
});

router.delete('/api/notes/:id', (req, res) => {
    deleteNote(req.params.id);
    res.send('Note has been deleted.');
})

module.exports = router;