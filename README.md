# Project Name

Brief project description

## Installation

1. Clone the repository:

2. Install dependencies:

## Usage

1. Configure the project:

- Update the MongoDB connection string in `config/db`.
- ...

2. Start the server: `nodemon index.js`.

## Note:-

- I've hosted this api on render.com.
- API url - `https:///furation.onrender.com/`

## URLS:-

# Import thunderclient config in your thunderclient extension.

1.  To retrieve all items from the database, send a GET request to

        https://furation.onrender.com/api/items.

2.  To retrieve a specific item by its ID, send a GET request to below url, replacing :id with the actual item ID.

        https://furation.onrender.com/api/items/:id

3.  To create a new item, send a POST request to below url with a JSON payload containing the item data.

        https://furation.onrender.com/api/items

4.  To update an existing item by its ID, send a PUT request to below url , replacing :id with the actual item ID, and include the updated item data in the request body.

        https://furation.onrender.com/api/items/:id

5.  To delete an item by its ID, send a DELETE request to below url, replacing :id with the actual item ID.

        https://furation.onrender.com/api/items/:id
