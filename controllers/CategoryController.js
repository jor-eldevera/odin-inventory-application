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

async function getSingleCategory(req, res) {
    let id = req.params.id;
    let category = await db.getSingleCategory(id);
    console.log(category);
    

    res.render("singleCategory", { category: category });
}

module.exports = {
    getAllCategoriesPage,
    createNewCategory,
    getSingleCategory
}