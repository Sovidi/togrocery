var mysql = require('mysql');

var connection = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
	port: process.env.PORT
});

connection.connect();


export async function queryExecute(str, value) {
	let data = await new Promise((resolve, reject) => {
		connection.query(str, value, function (error, results) {
			resolve(results);
		});
	});
	return data;
}
