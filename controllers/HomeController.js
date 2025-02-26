const db = require("../db/queries");

async function getHomepage(req, res) {
    // get statistics
    const statistics = await db.getStatistics();

    res.render("index", { statistics: statistics });
}

module.exports = {
    getHomepage
}