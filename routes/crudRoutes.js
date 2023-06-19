const express = require("express");
const router = express.Router();
const {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} = require("../controller/crudController");

router.get("/api/items", getAllItems);
router.get("/api/items/:id", getItemById);
router.post("/api/items", createItem);
router.put("/api/items/:id", updateItem);
router.delete("/api/items/:id", deleteItem);

module.exports = router;
