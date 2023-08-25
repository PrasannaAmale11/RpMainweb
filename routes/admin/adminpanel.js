const express = require('express');
const router = express.Router();
require('dotenv').config();
const SubscriptionController = require('../../controllers/subscriptionController');
const ContactController = require('../../controllers/contactController');
const credentials = require("../../credentials.json");

const spreadsheetId = process.env.SPREDSHEET; // Replace with your Google Sheets ID
const spreadsheetIdone = process.env.SPREDSHEET; // Replace with your Google Sheets ID

const subscriptionController = new SubscriptionController(spreadsheetId, credentials);
const contactController = new ContactController(spreadsheetIdone, credentials);

// Define a POST route for subscribing
router.post('/subscribe', (req, res) => {
  subscriptionController.subscribe(req, res);
});

// Define a POST route for submitting the contact form
router.post('/submit-form', (req, res) => {
  contactController.create(req, res);
});

module.exports = router;
