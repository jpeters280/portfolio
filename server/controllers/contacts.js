var nodemailer      = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var auth = {
  auth: {
    api_key: '',
    domain: 'sandbox9f3c0ea7e1964c2d89a245c988c08c77.mailgun.org'
  }
}

var nodemailerMailgun = nodemailer.createTransport(mg(auth));

module.exports = {
    create: function(req, res) {
        
        var newcontact = req.body;
        if (!newcontact.address) { // this line checks to see if a bot takes the honeypot
            nodemailerMailgun.sendMail(
            	{ 	from: newcontact.email,
                    to: 'jpeters280@gmail.com',
                    subject: newcontact.subject,
                    text: 'from: ' + newcontact.firstName + ' ' + newcontact.lastName + "\r\n" + 'email: ' + newcontact.email + "\r\n" + 'Phone Number: ' + newcontact.phoneNumber + "\r\n\r\n" + newcontact.message
                },
                function(err){
                    if(err)
                        console.log(err);
                });
                }
                res.json({ success: "update success" }); // change later to simple success message
    }
    
}

