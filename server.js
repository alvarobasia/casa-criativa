const express = require("express");

const server = express();

const ideas = [
	{
		img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
		title: "Cursos de Programação",
		category: "Estudo",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing
		elit. Quas nemo, praesentium sapiente reiciendis
		nesciunt sunt, odio maxime itaque, pariatur
		exercitationem asperiores deleniti molestias dolorum
		voluptas quaerat possimus a saepe explicabo!`,
		url: "http://rocketseat.com"
	},
	{
		img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
		title: "Exercícios",
		category: "Saúde",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing
		elit. Quas nemo, praesentium sapiente reiciendis
		nesciunt sunt, odio maxime itaque, pariatur
		exercitationem asperiores deleniti molestias dolorum
		voluptas quaerat possimus a saepe explicabo!`,
		url: "http://rocketseat.com"
	},
	{
		img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
		title: "Meditação",
		category: "Mentalidade",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing
		elit. Quas nemo, praesentium sapiente reiciendis
		nesciunt sunt, odio maxime itaque, pariatur
		exercitationem asperiores deleniti molestias dolorum
		voluptas quaerat possimus a saepe explicabo!`,
		url: "http://rocketseat.com"
	},
	{
		img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
		title: "Karaokê",
		category: "Diversão em família",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing
		elit. Quas nemo, praesentium sapiente reiciendis
		nesciunt sunt, odio maxime itaque, pariatur
		exercitationem asperiores deleniti molestias dolorum
		voluptas quaerat possimus a saepe explicabo!`,
		url: "http://rocketseat.com"
	},
	{
		img: "https://image.flaticon.com/icons/svg/2729/2729038.svg",
		title: "Pintura",
		category: "Criatividade",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing
		elit. Quas nemo, praesentium sapiente reiciendis
		nesciunt sunt, odio maxime itaque, pariatur
		exercitationem asperiores deleniti molestias dolorum
		voluptas quaerat possimus a saepe explicabo!`,
		url: "http://rocketseat.com"
	},
	{
		img: "https://image.flaticon.com/icons/svg/2729/2729048.svg",
		title: "Recortes",
		category: "Criatividade",
		description: `Lorem ipsum dolor sit amet consectetur adipisicing
		elit. Quas nemo, praesentium sapiente reiciendis
		nesciunt sunt, odio maxime itaque, pariatur
		exercitationem asperiores deleniti molestias dolorum
		voluptas quaerat possimus a saepe explicabo!`,
		url: "http://rocketseat.com"
	}
];
server.use(express.static("public"));

const nunjucks = require("nunjucks");
nunjucks.configure("views", {
	express: server,
	noCache: true
});

server.get("/", function name(req, res) {
	let lastIdeias = [];

	for (let i in ideas) {
		lastIdeias.push(ideas[ideas.length - ++i]);
		if (lastIdeias.length >= 2) break;
	}

	return res.render("index.html", { ideas: lastIdeias });
});

server.get("/ideias", function name(req, res) {
	let lastIdeias = [...ideas].reverse();
	return res.render("ideias.html", { ideas: lastIdeias });
});

server.listen(3000);
