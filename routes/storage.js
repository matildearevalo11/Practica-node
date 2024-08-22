const express = require("express");
const router = express.Router();
const { validatorGetItem } = require("../validators/storage");
const uploadMiddleware = require("../utils/handleStorage")
const { getItem, getItems, updateItem, deleteItem, createItem } = require("../controllers/storage");

router.get("/", getItems);

router.get("/:id", validatorGetItem, getItem);

router.delete("/:id", validatorGetItem, deleteItem);

router.post("/",uploadMiddleware.single("file"), createItem);

module.exports = router;