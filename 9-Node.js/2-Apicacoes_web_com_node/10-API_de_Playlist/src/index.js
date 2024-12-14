const express = require("express");
const path = require("node:path");
const router = require("./routes");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());

app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// 1_ Preparar o ambiente; OK
// 2_Revisar os requesitos; OK

// Uma playlist deve ter, pelo menos, nome e uma lista de tags para classificá-la. OK
//   const playlist = { id:id, title: title, tags:[], musics: [music] } OK
//   const music = { id:id, title: title, year: year, artist: artist, album: album } OK

// Rotas:

// Deve ser possível obter uma lista de todas as playlists existentes, bem como uma playlist individualmente.
//GET /playlists OK
//GET /playlists/:idPlaylist OK

// Deve ser possível cadastrar novas playlists, com ou sem músicas nela.
//GET /playlists/create OK
//POST /playlists/create OK

// Deve ser possível atualizar o nome e a lista de tags de uma playlist.
//PUT /playlists/update/:idPlaylist OK
//PUT /playlists/update/:idPlaylist/tags/:idTag OK
//DELETE /playlists/delete/:idPlaylist/tags/:idTag OK

// Deve ser possível excluir uma playlist.
//DELETE /playlists/:idPlaylist/delete OK

//Deve ser possível adicionar e remover músicas em uma playlist.
//POST /playlists/:idPlaylist/music OK
//DELETE /playlist/:idPlaylist/music/:idMusic OK
