const Sqlite3 = require("sqlite3").verbose();
const db = new Sqlite3.Database("./project.db");

db.serialize(() => {
	db.run(`
	  CREATE TABLE IF NOT EXISTS ideas(
	    id INTEGER PRIMARY KEY AUTOINCREMENT,
	    image TEXT,
	    title TEXT,
	    category TEXT,
	    description TEXT,
	    link TEXT
	);`);
	// db.run(
	// 	`
	//     INSERT INTO ideas(
	//       image,
	//       title,
	//       category,
	//       description,
	//       link
	//     ) VALUES (?,?,?,?,?);
	// `,
	// 	[
	// 		"https://image.flaticon.com/icons/svg/2729/2729007.svg",
	// 		"Cursos de Programação",
	// 		"Estudo",
	// 		`Lorem ipsum dolor sit amet consectetur adipisicing
	// 	elit. Quas nemo, praesentium sapiente reiciendis
	// 	nesciunt sunt, odio maxime itaque, pariatur
	// 	exercitationem asperiores deleniti molestias dolorum
	// 	voluptas quaerat possimus a saepe explicabo!`,
	// 		"http://rocketseat.com"
	// 	],
	// 	err => {
	// 		if (err) return console.log(err);
	// 	}
	// );
	// db.all(`SELECT * FROM ideas`, (err, rows) => {
	// 	if (err) return console.log(err);
	// 	console.log(rows);
	// });
	//db.run("DROP TABLE ideas");
	// db.run(`
	//     DELETE FROM ideas WHERE id = ?
	// `, [1], ()=>{
	//   if (err) return console.log(err);
	// })
});

module.exports = db;
