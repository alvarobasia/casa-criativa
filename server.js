const express = require("express");

const server = express();

const db = require("./db");

server.use(express.static("public"));

const nunjucks = require("nunjucks");
nunjucks.configure("views", {
	express: server,
	noCache: true
});

server.use(express.urlencoded({ extended: true }));

server.get("/", function name(req, res) {
	db.all(`SELECT * FROM ideas`, (err, rows) => {
		if (err) {
			console.log(err);
			return res.send("Erro no banco de dados.");
		}

		let lastIdeias = [];

		for (let i in rows) {
			lastIdeias.push(rows[rows.length - ++i]);
			if (lastIdeias.length >= 2) break;
		}

		return res.render("index.html", { ideas: lastIdeias });
	});
});

server.get("/ideias", function name(req, res) {
	db.all(`SELECT * FROM ideas`, (err, rows) => {
		if (err) {
			console.log(err);
			return res.send("Erro no banco de dados.");
		}
		let lastIdeias = [...rows].reverse();
		return res.render("ideias.html", { ideas: lastIdeias });
	});
});

server.post("/", (req, res) => {
	db.run(
		`
	    INSERT INTO ideas(
	      image,
	      title,
	      category,
	      description,
	      link
	    ) VALUES (?,?,?,?,?);
	`,
		[
			req.body.image,
			req.body.title,
			req.body.category,
			req.body.description,
			req.body.link
		],
		err => {
			if (err) {
				console.log(err);
				return res.send("Erro no banco de dados.");
			}
			return res.redirect("/ideias");
		}
	);

	return;
});

server.listen(3000);
