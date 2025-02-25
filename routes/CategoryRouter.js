const { Router } = require("express");

const categoryRouter = Router();

const controller = require("../controllers/CategoryController");

categoryRouter.get("/", controller.getAllCategoriesPage);
categoryRouter.post("/", controller.createNewCategory);
categoryRouter.get("/:id", controller.getSingleCategory);
categoryRouter.put("/:id", controller.updateCategory);
categoryRouter.delete("/:id", controller.deleteCategory);

module.exports = categoryRouter;