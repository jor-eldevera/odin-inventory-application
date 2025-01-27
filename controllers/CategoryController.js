const db = require("../db/queries");

async function getAllCategoriesPage(req, res) {
    let categories = await db.getAllCategories();
    console.log(categories);
    
    res.render("allCategories", { categories: categories });
}

async function createNewCategory(req, res) {
    let name = req.body.name;
    let description = req.body.description;
    db.createNewCategory(name, description);

    res.redirect("/categories");
}

module.exports = {
    getAllCategoriesPage,
    createNewCategory
}