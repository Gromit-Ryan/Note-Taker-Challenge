const fs = require('fs');
const path = require('path');

const createNote = (newNote) => {
    fs.readFile('./db/db.json', (err, data) => {
        let noteArray = JSON.parse(data);

        noteArray.push(newNote);

        fs.writeFile('./db/db.json', JSON.stringify(noteArray), (err) => {
            if(err) throw err;
        })
    })
}

const deleteNote = (id) => {
    fs.readFile('./db/db.json', (err, data) => {
        let noteArray = JSON.parse(data);

        console.log(noteArray);
        const result = noteArray.filter((note) => note.id !== id);

        fs.writeFile('./db/db.json', JSON.stringify(result), (err, data) => {
            if(err) throw err;
        })
    })
}
module.exports = { createNote, deleteNote };