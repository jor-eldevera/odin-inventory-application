const db = require("../db/queries");

async function getAllCategoriesPage(req, res) {
    let categories = await db.getAllCategories();
    
    res.render("allCategories", { categories: categories });
}

async function createNewCategory(req, res) {
    let name = req.body.name;
    let description = req.body.description;
    db.createNewCategory(name, description);

    res.redirect("/categories");
}

async function getSingleCategory(req, res) {
    let id = req.params.id;
    let category = await db.getSingleCategory(id);
    
    res.render("singleCategory", { category: category });
}

async function updateCategory(req, res) {
    let { id, name, description } = req.body;
    let updatedCategory = await db.updateCategory(id, name, description);

    res.render("singleCategory", { category: updatedCategory });
}

module.exports = {
    getAllCategoriesPage,
    createNewCategory,
    getSingleCategory,
    updateCategory
}