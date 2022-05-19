const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
    readAndDelete
  } = require('../helpers/fsUtils');
  

router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

router.post('/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();


    readAndAppend(newNote, './db/db.json');
    res.json(newNote);
});

// now the bonus section
    router.delete('/notes/:id', (req, res) => {
        const filteredData = readAndDelete(req.params.id, './db/db.json');
        res.json({ok: true} );
} )




module.exports = router;



// ===========================================================
// tutor section
// const { response } = require('express');
// const store = require('../db/store');
// const router = require('express').Router();

// router.get('/notes', (req, res) => {
//     store.getNotes()
//     .then((notes) => {
//         return res.json(notes)
//     })
//     .catch((err) => res.status(500).json(err));
// })

// module.exports = router;
