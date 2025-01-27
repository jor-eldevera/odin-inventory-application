const pool = require("./pool");

async function createNewCategory(name, description) {
    await pool.query(`
        INSERT INTO Categories (name, description)
        VALUES
            ($1, $2);`, [name, description]);
}

module.exports = {
    createNewCategory
}