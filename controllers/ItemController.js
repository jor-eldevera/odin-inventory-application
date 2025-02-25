const db = require("../db/queries");

async function createNewItem(req, res) {
    let { name, description, price, quantity, category_id } = req.body;

    try {
        let item = await db.createNewItem(name, description, price, quantity, category_id);
        res.redirect(`/categories/${category_id}`);
    } catch (err) {
        console.error("createNewItem:", err);  // Log the full error object
        
        // Handle specific error cases
        if (err.code === '23505') {  // Postgres unique violation
            return res.status(409).json({ message: 'Item already exists' });
        }
        if (err.name === 'ValidationError') {
            return res.status(400).json({ message: err.message });
        }
        
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function getSingleItem(req, res) {
    let { id } = req.params;
    let item = await db.getSingleItem(id);
    res.render("singleItem", { item: item });
}

module.exports = {
    createNewItem,
    getSingleItem
}