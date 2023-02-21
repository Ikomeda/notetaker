const express = require('express');
const htmlRoutes = require('./routes/htmlRouter');
const notesRoutes = require('./routes/notesRouter'); 


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(('public')))

// Gets the paths from the public directory for the index&notes.html
app.use('/', htmlRoutes);

// This is so that we have access to the backend routes with the get/push routes set up.
app.use('/api', notesRoutes);

app.listen(PORT)