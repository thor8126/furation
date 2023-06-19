const { SampleSchema } = require("../models/sample");

// GET /api/items - Retrieve all items from the database
module.exports.getAllItems = async (req, res) => {
  try {
    const items = await SampleSchema.find();
    res.json(items);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the items." });
  }
};

// GET /api/items/:id - Retrieve a specific item by its ID
module.exports.getItemById = async (req, res) => {
  try {
    const item = await SampleSchema.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "Item not found." });
    }
    res.json(item);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the item." });
  }
};

// POST /api/items - Create a new item in the database
module.exports.createItem = async (req, res) => {
  try {
    const newItem = new SampleSchema(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the item." });
  }
};

// PUT /api/items/:id - Update an existing item by its ID
module.exports.updateItem = async (req, res) => {
  try {
    const item = await SampleSchema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!item) {
      return res.status(404).json({ error: "Item not found." });
    }
    res.json(item);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the item." });
  }
};

// DELETE /api/items/:id - Delete an item by its ID
module.exports.deleteItem = async (req, res) => {
  try {
    const item = await SampleSchema.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "Item not found." });
    }
    res.sendStatus(204);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the item." });
  }
};
