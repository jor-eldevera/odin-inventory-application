const db = require("../db/queries");

async function getHomepage(req, res) {
    res.render("index");
}

module.exports = {
    getHomepage
}