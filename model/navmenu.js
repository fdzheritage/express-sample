const db = require('../config/db');

module.exports = class {
    static async getNavMenu(pageKey) {
        let connection = await db.getConnection();
        const rows = await connection.query("SELECT pageKey, label FROM `navmenu`, page WHERE page.pageId=navmenu.pageId ORDER BY menuOrder");
        connection.end();
        return rows;
    };
}
