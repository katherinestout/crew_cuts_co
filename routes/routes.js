const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');




//Form for email
router.post('/form/api', (req, res) => {
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
                user: 'kailee.funk@ethereal.email',
                pass: 'X6A6VqR8dZhQ2Sngcc'
            }

        });

        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'kailee.funk@ethereal.email',
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

module.exports = router;