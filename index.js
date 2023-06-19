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
  const html = `
    <html>
      <head>
        <title>API Documentation</title>
      </head>
      <body>
        <h1>API by Lakhvinder Singh!</h1>
        <h1>Hosted Url: https://furation.onrender.com/</h1>
        <h3>You'll need thunderclient or postman to test these apis.</h3>
        <h5>* Import thunderclient config from root for testing urls.</h5>
        <h2>Endpoints:</h2>

        <ol>
          <li>
            To retrieve all items from the database, send a GET request to:
            <pre>https://furation.onrender.com/api/items</pre>
          </li>

          <li>
            To retrieve a specific item by its ID, send a GET request to the following URL, replacing <code>:id</code> with the actual item ID:
            <pre>https://furation.onrender.com/api/items/:id</pre>
          </li>

          <li>
            To create a new item, send a POST request to the following URL with a JSON payload containing the item data:
            <pre>https://furation.onrender.com/api/items</pre>
          </li>

          <li>
            To update an existing item by its ID, send a PUT request to the following URL, replacing <code>:id</code> with the actual item ID, and include the updated item data in the request body:
            <pre>https://furation.onrender.com/api/items/:id</pre>
          </li>

          <li>
            To delete an item by its ID, send a DELETE request to the following URL, replacing <code>:id</code> with the actual item ID:
            <pre>https://furation.onrender.com/api/items/:id</pre>
          </li>
        </ol>
      </body>
    </html>
  `;

  res.header("Content-Type", "text/html");
  res.send(html);
});

app.use("/", require("./routes/crudRoutes"));

// for deployment
module.exports = app;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
