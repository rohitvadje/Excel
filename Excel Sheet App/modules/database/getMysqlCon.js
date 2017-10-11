var mysql = require('mysql');
var conproperties = require('././resources/properties_local');
exports.con = function () {
	var con = mysql.createConnection({
		host: conproperties.host,
		user: conproperties.user,
		password: conproperties.password,
		database: conproperties.database
	});
	return con;
}

