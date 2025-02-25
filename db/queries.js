const pool = require("./pool");

async function createNewCategory(name, description) {
    await pool.query(`
        INSERT INTO Categories (name, description)
        VALUES
            ($1, $2);`, [name, description]);
}

async function getAllCategories() {
    const { rows } = await pool.query("SELECT * FROM categories;");
    
    return rows;
}

async function getSingleCategory(id) {
    const { rows } = await pool.query(`SELECT * FROM categories WHERE id = $1;`, [id]);
    
    return rows[0];
}

async function updateCategory(id, name, description) {
    const { rows } = await pool.query(`
        UPDATE categories
        SET
            name = $1,
            description = $2
        WHERE id = $3
        RETURNING *;`, [name, description, id]);
    return rows[0];
}

async function deleteCategory(id) {
    const { rowCount } = await pool.query(`
        DELETE FROM categories
        WHERE id = $1;`, [id]);

    return rowCount;
}

async function getItemsByCategory(id) {
    const { rows } = await pool.query(`
        SELECT * FROM items
        WHERE category_id = $1;`, [id]);

    return rows;
}

async function createNewItem(name, description, price, quantity, category_id) {
    const { rows } = await pool.query(`
        INSERT INTO items (name, description, price, quantity, category_id)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;`, [name, description, price, quantity, category_id]);

    return rows[0];
}

async function getSingleItem(id) {
    const { rows } = await pool.query(`
        SELECT * FROM items
        WHERE id = $1;`, [id]);

    return rows[0];
}

async function deleteItem(id) {
    const { rowCount } = await pool.query(`
        DELETE FROM items
        WHERE id = $1;`, [id]);

    return rowCount;
}

module.exports = {
    createNewCategory,
    getAllCategories,
    getSingleCategory,
    updateCategory,
    deleteCategory,
    getItemsByCategory,
    createNewItem,
    getSingleItem,
    deleteItem
}