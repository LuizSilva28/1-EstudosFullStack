const express = require("express");
const gamesController = require("./src/crontroller/games-controller");
const app = express();

app.use(express.json());

app.post("/", (req, res) => {
	res.json({ message: "Hello word!" });
});

app.get("/games", gamesController.index);
app.get("/games/:id", gamesController.show);

app.post("/games", gamesController.save);
app.post("/games/:id/genres", gamesController.addGenre);

app.put("/games/:id", gamesController.update);
app.delete("/games/:id", gamesController.delete);
//			/games/3/genres/action-adventure
app.delete("/games/:id/genres/:name", gamesController.removeGenre);

const PORT = 3000;

app.listen(PORT, () => console.log("Servidor iniciado"));
