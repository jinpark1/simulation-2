require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const app = express();
const massive = require('massive');


app.use( bodyParser.json() );
massive(process.env.CONNECTION_STRING).then(database => { app.set('db', database); });


// house api
app.get('/api/houses', controller.get);
app.post('/api/house', controller.create);
app.delete('/api/houses/:id', controller.delete)

const port = 4000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`) });