var mysql = require('mysql');

export var connection = mysql.createConnection({
	host: process.env.S_HOST,
	user: process.env.S_USER,
	password: process.env.S_PASSWORD,
	database: process.env.S_DATABASE,
	port: process.env.S_PORT
});

export async function queryExecute(str, value) {
	connection.connect();
	let data = await new Promise((resolve, reject) => {
		connection.query(str, value, function (error, results) {
			resolve(results);
		});
	});
	return data;
}
