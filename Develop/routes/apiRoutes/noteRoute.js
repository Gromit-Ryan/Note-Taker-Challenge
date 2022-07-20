const fs = require('fs');
const uniqid = require('uniqid');
const router = require('express').Router();
const { createNote } = require('../../lib/notes');

router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if(err) throw err;
        res.send(data);
    })
})

router.post('/api/notes', (req, res) => {
    let note = {
        id: uniqid(),
        title: req.body.title,
        text: req.body.text
    }
    
    createNote(note);
    res.send('New note has been added.')
});

module.exports = router;