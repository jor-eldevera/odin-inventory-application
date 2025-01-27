const db = require("../db/queries");

async function getAllCategoriesPage(req, res) {
    res.render("allCategories");
}

async function createNewCategory(req, res) {
    let name = req.body.name;
    let description = req.body.description;
    db.createNewCategory(name, description);
}

module.exports = {
    getAllCategoriesPage,
    createNewCategory
}