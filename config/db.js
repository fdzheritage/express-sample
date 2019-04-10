const db = require("mariadb");
const dbConn = require('./dbConn');

let dbLayer = {
	connected: false,
	init: () => {
		// If it fails it still will create a connection object
		this.pool = db.createPool(dbConn);
		this.connected = true;
	},
	getConnection: async () => {
		if ( this.connected ) {
			return await this.pool.getConnection();
		} else {
			throw "Database not connected";
		}
	}
}

module.exports = dbLayer;
