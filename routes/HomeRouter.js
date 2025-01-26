const { Router } = require("express");

const homeRouter = Router();

const controller = require("../controllers/HomeController");

module.exports = homeRouter;