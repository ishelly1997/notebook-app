const express = require('express');
//const res = require('express/lib/response');
//const uuid = require('uuid');
/* const path = require('path');
const notes = require('./db/db.json'); */
const PORT = process.env.PORT || 3001;
const app = express();
const api = require('./routes/api');
const html = require('./routes/html');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', api);
app.use('/', html);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});