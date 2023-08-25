
const SubscriberModel = require('../models/SubscriberModel');
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

class SubscriptionController {
  constructor(spreadsheetId, credentials) {
    this.subscriberModel = new SubscriberModel(spreadsheetId, credentials);
  }

  async subscribe(req, res) {
    const email = req.body.email;
    try {
      const exists = await this.subscriberModel.isEmailExist(email);

      if (exists) {
        return res.status(400).json({ error: "Email already exists." });
      }

      await this.subscriberModel.writeToSheet(email);

      const userMailOptions = {
        from:  `"Rptech Group" <` + process.env.EMAILUSER,
        to: email,
        subject: 'Thank You for Subscribing',
        html: fs.readFileSync(path.join(__dirname, '../views/emailTemplates/userEmailTemplate.html'), 'utf-8')
      };

      transporter.sendMail(userMailOptions, (err, info) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Email sent to user: ' + info.response);
        }
      });

      // const adminMailOptions = {
      //   from: email,
      //   to:  `"Rptech Group" <` + process.env.EMAILUSER,
      //   subject: 'New Subscription',
      //   html: fs.readFileSync(path.join(__dirname, '../views/emailTemplates/adminEmailTemplate.html'), 'utf-8').replace('{{email}}', email)
      // };

      // transporter.sendMail(adminMailOptions, (err, info) => {
      //   if (err) {
      //     console.error(err);
      //   } else {
      //     console.log('Email sent to admin: ' + info.response);
      //   }
      // });

      res.status(200).json({ message: "Successfully subscribed to the newsletter!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to subscribe, please try again.' });
    }
  }
}

module.exports = SubscriptionController;
