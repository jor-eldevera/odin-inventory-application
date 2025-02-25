const { Router } = require("express");

const itemRouter = Router();

const controller = require("../controllers/ItemController");

itemRouter.post("/", controller.createNewItem);

module.exports = itemRouter;