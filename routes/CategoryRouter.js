const { Router } = require("express");

const categoryRouter = Router();

const controller = require("../controllers/CategoryController");

categoryRouter.get("/", controller.getAllCategoriesPage);
categoryRouter.post("/", controller.createNewCategory);

module.exports = categoryRouter;