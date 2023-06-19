require('dotenv').config();
require("./config/db");
const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');


const app = express();
app.use(CORS());
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes

app.get('/', (req, res) => {
  res.send('Api by Lakhvinder Singh!')
})
    


module.exports = app;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})