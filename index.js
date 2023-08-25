const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();


const app = express();
const port = process.env.PORT; 
// const port = 3001; 

// Middleware
app.use(cors());
app.use(bodyParser.json());

var adminpanel=require("./routes/admin/adminpanel");
app.use("/",adminpanel)



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
