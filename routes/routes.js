const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

require('dotenv').config();

//Form for email
router.post('/form', (req, res) => {
    //console.log(req.body);

    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h2>Crew Cuts Email Notification</h2>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Phone: ${req.body.phone}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p> 
        
        `

        //mail options

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                 pass: process.env.PASSWORD
            }

        });

        let mailOptions = {
            from: 'test@gmail.com',
            to: process.env.EMAIL,
            replyTo: 'test@gmail.com',
            subject: 'Crew Cuts Request',
            text: req.body.message,
            html: htmlEmail
        };

        transporter.sendMail(mailOptions, (err) => {
            if(err){ 
                return console.log(err, 'There was an error!')
            }
            console.log('Message sent:');
            
           // console.log('Message URL:', nodemailer.getTestMessageUrl(info));
        })
    })

});


module.exports = router;