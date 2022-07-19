const fs = require('fs');
const path = require('path');

const viewNotes = () => {
    fs.readFile('../db/db.json', (err, data) => {
        if(err) throw err;
        res.send(data);
    })
}

const createNote = (newNote) => {
    fs.readFile('../db/db.json', (err, data) => {
        let newData = JSON.parse(data);

        newData.push(newNote);

        fs.writeFile('../db/db.json', JSON.stringify(newData), (err) => {
            if(err) throw err;
            res.send('New note has been added.');
        })
    })
}

module.exports = { viewNotes, createNote };