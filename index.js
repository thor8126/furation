require("dotenv").config();
require("./config/db");
const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");

const app = express();
app.use(CORS());
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  const string = `
  Api by Lakhvinder Singh!,


1.  To retrieve all items from the database, send a GET request to

        https:///furation.onrender.com/api/items.

2.  To retrieve a specific item by its ID, send a GET request to below url, replacing :id with the actual item ID.

        https:///furation.onrender.com/api/items/:id

3.  To create a new item, send a POST request to below url with a JSON payload containing the item data.

        https:///furation.onrender.com/api/items

4.  To update an existing item by its ID, send a PUT request to below url , replacing :id with the actual item ID, and include the updated item data in the request body.

        https:///furation.onrender.com/api/items/:id

5.  To delete an item by its ID, send a DELETE request to below url, replacing :id with the actual item ID.

        https:///furation.onrender.com/api/items/:id`;

  res.send(string);
});

app.use("/", require("./routes/crudRoutes"));

module.exports = app;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
