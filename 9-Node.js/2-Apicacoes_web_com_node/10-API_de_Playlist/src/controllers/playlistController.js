const playlistModels = require("../models/playlistModels");

const playlistController = {
	//GET /playlists OK
	allShow: (req, res) => {
		const allPlaylists = playlistModels.allShow();

		if (!allPlaylists) {
			res.status(404).json({ message: "not found playlists" });
		}
		res.status(200);
		res.json({ allPlaylists });
	},
	//GET /playlists/:idPlaylist OK
	show: (req, res) => {
		const { idPlaylist } = req.params;

		const playlist = playlistModels.show(+idPlaylist);

		if (!playlist) {
			res.status(404).json({ message: "Not found playlist" });
		} else {
			res.status(200).json({ playlist });
		}
	},
	//POST /playlists/create OK
	createPlaylist: (req, res) => {
		const { title, tags } = req.body;

		let musics = req.body;

		const playlist = {
			title: title,
			tags: tags,
			musics: musics ?? [],
		};

		playlistModels.createPlaylist(playlist);
		res.json();
	},
	//PUT /playlists/update/:idPlaylist
	updatePlaylist: (req, res) => {
		const { idPlaylist } = req.params;

		const { title } = req.body;
		let { tags } = req.body;

		const playlist = {
			title: title,
			tags: tags,
		};

		const playlistUpdated = playlistModels.updatePlaylist(
			+idPlaylist,
			playlist
		);
		res.json(playlistUpdated);
	},
	//DELETE /playlists/:idPlaylist/delete
	deletePlaylist: (req, res) => {
		const { idPlaylist } = req.params;

		playlistModels.deletePlaylist(idPlaylist);
		res.status(200).json({ massage: "playlist deletada com sucesso!" });
	},
	//POST /playlists/create/:idPlaylist/tags/:idTag
	createTag: (req, res) => {
		const { idPlaylist, idTagName } = req.params;

		const playlist = playlistModels.createTag(+idPlaylist, idTagName);
		res.status(200);
		res.json(playlist);
	},
	//DELETE /playlists/delete/:idPlaylist/tags/:idTag
	deleteTag: (req, res) => {
		const { idPlaylist, idTagName } = req.params;

		const playlist = playlistModels.deleteTag(+idPlaylist, idTagName);
		
		if (playlist) {
			res.status(200);
			res.json(playlist);
		}
		res.status(404);
		res.json({
			message: "A tag mencionada não existe ou já foi excluida!",
		});
	},
	//POST /playlists/:idPlaylist/music
	createMusic: (req, res) => {
		const { idPlaylist } = req.params;
		const { title, year, artist, album } = req.body;

		const music = {
			title,
			year,
			artist,
			album,
		};
		const playlist = playlistModels.createMusic(+idPlaylist, music);

		res.status(200);
		res.json(playlist);
	},
	//DELETE /playlist/:idPlaylist/music/:idMusic
	deleteMusic: (req, res) => {
		const { idPlaylist, idMusic } = req.params;

		const playlist = playlistModels.deleteMusic(+idPlaylist, +idMusic);

		if (playlist) {
			res.status(200);
			res.json(playlist);
		}
		res.status(404);
		res.json({
			message: "Essa musica não existe na playlist!",
		});
	},
};

module.exports = playlistController;
