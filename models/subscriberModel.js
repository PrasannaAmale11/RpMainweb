
const { google } = require("googleapis");

class SubscriberModel {
  constructor(spreadsheetId, credentials) {
    this.spreadsheetId = spreadsheetId;
    this.credentials = credentials;
  }

  async isEmailExist(email) {
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: this.credentials,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const client = await auth.getClient();
      const sheets = google.sheets({ version: "v4", auth: client });

      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: this.spreadsheetId,
        range: "Sheet4",
      });

      const values = response.data.values;

      if (values && values.length) {
        return values.some((row) => row[0] === email);
      }

      return false;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async writeToSheet(email) {
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: this.credentials,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const client = await auth.getClient();
      const sheets = google.sheets({ version: "v4", auth: client });

      const currentDate = new Date().toString();

      await sheets.spreadsheets.values.append({
        spreadsheetId: this.spreadsheetId,
        range: "Sheet4",
        valueInputOption: "USER_ENTERED",
        resource: { values: [[email, currentDate]] },
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = SubscriberModel;
