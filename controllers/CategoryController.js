const db = require("../db/queries");

async function getAllCategoriesPage(req, res) {
    res.render("allCategories");
}

module.exports = {
    getAllCategoriesPage
}