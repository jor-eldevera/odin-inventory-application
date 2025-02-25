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
    
    try {
        let category = await db.getSingleCategory(id);
        
        if (category === undefined) {
            return res.status(404).json({ message: 'Category not found' });
        }
    
        return res.render("singleCategory", { category: category });
    } catch (err) {
        console.error("getSingleCategory: " + err.message);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
    
}

async function updateCategory(req, res) {
    let { id, name, description } = req.body;
    let updatedCategory = await db.updateCategory(id, name, description);

    res.render("singleCategory", { category: updatedCategory });
}

async function deleteCategory(req, res) {
    let { id } = req.params;
    try {
        const rowCount = await db.deleteCategory(id);
    
        if (rowCount === 0) {
            return res.status(404).json({ message: 'Category not found' });
        }
    
        // For API requests, send JSON response
        return res.status(200).json({ message: 'Category deleted successfully' });

    } catch (err) {
        console.error("deleteCategory: " + err.message);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    getAllCategoriesPage,
    createNewCategory,
    getSingleCategory,
    updateCategory,
    deleteCategory
}