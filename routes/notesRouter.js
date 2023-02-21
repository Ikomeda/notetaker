const express = require('express');
const router = express.Router();
const fs = require('fs');
const fsPromises = require('fs').promises;
const uuid = require('uuid');
const path = require('path');

// gets the current notes that are saved to the database
router.route('/notes')
    .get((req, res) => {
    fsPromises.readFile('./db/db.json').then((data) => 
    {res.json(JSON.parse(data))})
    })

    // reads the db.json file and then parses the new data and saves it to the db.json on clicking the save button.
    .post((req, res) => {
        const {title, text} = req.body;
        if (!title, !text) {
            return res.status(400).sendStatus('You must provide a title and text')
        }
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            }

                const parsedData = JSON.parse(data);
                const newNote = {
                    title,
                    text,
                    id: uuid.v4()
                };
                console.log(parsedData);
                parsedData.push(newNote);
                fs.writeFile('./db/db.json', JSON.stringify(parsedData), (err) => {
                    if (err) {
                        return res.status(500).send("This some bullshit!");
                    }
                    res.json({
                        status: "Note Saved",
                        body: newNote,
                    });
                });


        
        });
    });
// router.delete('/notes', (req, res) =>
//     fs.writeFile('./db/db.json', JSON.stringify)
//     );
module.exports = router;