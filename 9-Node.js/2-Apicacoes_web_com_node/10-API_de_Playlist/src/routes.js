const express = require("express");
const router = express.Router();

const playlistController = require("./controllers/playlistController");

router.get("/playlists", playlistController.allShow);
router.get("/playlists/:idPlaylist", playlistController.show);
router.post("/playlists/create", playlistController.createPlaylist);
router.put("/playlists/update/:idPlaylist", playlistController.updatePlaylist);
router.delete(
	"/playlists/:idPlaylist/delete",
	playlistController.deletePlaylist
);

router.post(
	"/playlists/create/:idPlaylist/tags/:idTagName",
	playlistController.createTag
);
router.delete(
	"/playlists/delete/:idPlaylist/tags/:idTagName",
	playlistController.deleteTag
);

router.post("/playlists/:idPlaylist/music", playlistController.createMusic);
router.delete(
	"/playlists/:idPlaylist/music/:idMusic",
	playlistController.deleteMusic
);

module.exports = router;
