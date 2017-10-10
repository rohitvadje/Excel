var mysql = require('mysql');
exports.con = function () {
	var con = mysql.createConnection({
		host: "localhost",
		user: "yourusername",
		password: "yourpassword"
	});
	return con;
}

