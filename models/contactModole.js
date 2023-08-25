const { google } = require("googleapis");

class ContactModel {
  constructor(spreadsheetId, credentials) {
    this.spreadsheetId = spreadsheetId;
    this.credentials = credentials;
  }

  async writeToSheet(fullName, email, query) {
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: this.credentials,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const client = await auth.getClient();
      const sheets = google.sheets({ version: "v4", auth: client });

      const currentDate = new Date().toString();

      const values = [[fullName, email, query, currentDate]];

      await sheets.spreadsheets.values.append({
        spreadsheetId: this.spreadsheetId,
        range: "Sheet3",
        valueInputOption: "USER_ENTERED",
        resource: { values },
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = ContactModel;
