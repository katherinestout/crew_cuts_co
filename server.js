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


//Form for email
app.post('/form', (req, res) => {
    //console.log(req.body);

    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p> 
        
        `

        //mail options

        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: 'selina.sawayn@ethereal.email',
                 pass: 'fDQKWcp21c21dhTcdM'
            }

        });

        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'selina.sawayn@ethereal.email',
            replyTo: 'test@testaccount.com',
            subject: 'New Message',
            text: req.body.message,
            html: htmlEmail
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                return console.log(err)
            }
            console.log('Message sent', info.message);
            console.log('Message URL:', nodemailer.getTestMessageUrl(info));
        })
    })

});

app.listen(app.get('port'), function(){
    console.log('Server started on port' + app.get('port'));
});