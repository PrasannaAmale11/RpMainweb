const ContactModel = require('../models/contactModole');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAILUSER,
    pass: process.env.EMAILPASSWORD
  }
});

class ContactController {
  constructor(spreadsheetId, credentials) {
    this.contactModel = new ContactModel(spreadsheetId, credentials);
  }

  async create(req, res) {
    const { fullName, email, query} = req.body;

    try {
      await this.contactModel.writeToSheet( fullName, email, query);

      const userMailOptions = {
        from: `"Rptech Group" <` + process.env.EMAILUSER,
        to: email,
        subject: 'Thanks for your feedback',
        html: fs.readFileSync(path.join(__dirname, '../views/emailTemplates/userContactemail.html'), 'utf-8')
      };

      transporter.sendMail(userMailOptions, (err, info) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Email sent to user: ' + info.response);
        }
      });

      const adminMailOptions = {
        from: email,
        to: `"Rptech Group" <` + process.env.EMAILUSER,
        subject: 'New on person contacted',
        html: fs.readFileSync(path.join(__dirname, '../views/emailTemplates/adminContactemail.html'), 'utf-8')
        .replace('{{fullName}}', fullName)
        .replace('{{email}}', email)
        .replace('{{query}}', query)
      };

      transporter.sendMail(adminMailOptions, (err, info) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Email sent to admin: ' + info.response);
        }
      });

      res.status(200).json({ message: "Your message has been received. We will get back to you soon." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to submit the form, please try again.' });
    }
  }
}

module.exports = ContactController;
