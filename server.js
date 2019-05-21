//dependencies
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer= require('nodemailer');

//variables
const routes = require('./routes/routes');
const app = express();

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//set port
app.set('port', (process.env.PORT || 3001));

//Routing
app.use('/', routes);

app.listen(app.get('port'), function(){
    console.log('Server started on port' + app.get('port'));
});