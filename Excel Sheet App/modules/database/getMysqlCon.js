var mysql = require('mysql');
exports.con = function () {
	var con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "root"
	});
	return con;
}

