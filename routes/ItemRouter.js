const { Router } = require("express");

const itemRouter = Router();

const controller = require("../controllers/ItemController");

itemRouter.get("/:id", controller.getSingleItem);
itemRouter.delete("/:id", controller.deleteItem);

module.exports = itemRouter;