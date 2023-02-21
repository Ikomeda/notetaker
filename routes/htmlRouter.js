const express = require('express');
const path = require('path');
const router = express.Router();
const root = path.join(__dirname, '../public');

// Gets the home page
router.get('/', (req, res) => {
    res.sendFile(`${root}`, '/index.html');
})

// Gets the notes page
router.get('/notes', (req, res) => {
    res.sendFile(`${root}/notes.html`);
})

module.exports = router;