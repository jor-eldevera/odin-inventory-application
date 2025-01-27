const { Router } = require("express");

const homeRouter = Router();

const controller = require("../controllers/HomeController");

homeRouter.get("/", controller.getHomepage);

module.exports = homeRouter;