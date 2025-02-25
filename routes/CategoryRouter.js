const { Router } = require("express");

const categoryRouter = Router();

const controller = require("../controllers/CategoryController");
const itemController = require("../controllers/ItemController");

categoryRouter.get("/", controller.getAllCategoriesPage);
categoryRouter.post("/", controller.createNewCategory);
categoryRouter.get("/:id", controller.getSingleCategory);
categoryRouter.post("/:id", itemController.createNewItem);
categoryRouter.put("/:id", controller.updateCategory);
categoryRouter.delete("/:id", controller.deleteCategory);

module.exports = categoryRouter;