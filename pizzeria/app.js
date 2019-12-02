const APIRoutes = require('./api/routes/routesapp');
const commandeRoutes = require('./commande/routes');
const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended : true
}));
app.use(bodyParser.json());

const mongoose = require('mongoose');
database = 'mongodb://localhost:27017/data';

mongoose.connect(database, (err) => {
    if (err)
        throw err;
    console.log('Connected to the database')
});


app.use(APIRoutes);
app.use(commandeRoutes);

app.listen(3000);
console.log("Waiting on localhost:3000");