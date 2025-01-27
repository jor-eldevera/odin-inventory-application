const { Router } = require("express");

const categoryRouter = Router();

const controller = require("../controllers/CategoryController");

categoryRouter.get("/", controller.getAllCategoriesPage);

module.exports = categoryRouter;