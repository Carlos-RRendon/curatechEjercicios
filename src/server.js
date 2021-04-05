const express = require ('express'),
    bodyParser = require('body-parser');

const app = express();

app.set('port',3000);

app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use('/' , require('./index.routes'));

module.exports = app;