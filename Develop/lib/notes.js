const fs = require('fs');
const path = require('path');

const createNote = (newNote, noteArray) => {
    fs.readFile('./db/db.json', (err, data) => {
        let noteArray = JSON.parse(data);

        noteArray.push(newNote);

        fs.writeFile('./db/db.json', JSON.stringify(noteArray), (err) => {
            if(err) throw err;
        })
    })
}


module.exports = { createNote };