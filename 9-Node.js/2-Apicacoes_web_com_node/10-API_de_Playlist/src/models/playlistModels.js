let playlists = [
	{
		id: 1,
		title: "As Melhores Antigas",
		tags: ["#nacionais", "#rock", "#Pop"],
		musics: [
			{
				id: 1,
				title: "Teto de vidro",
				year: 2003,
				artist: "Pitty",
				album: " Admirável Chip Novo",
			},
			{
				id: 2,
				title: "Um minuto para o fim do mundo",
				year: 2005,
				artist: "CPM 22",
				album: "Felicidade Instantânea",
			},
		],
	},
	{
		id: 2,
		title: "Raps",
		tags: ["#nacionais", "#rap"],
		musics: [
			{
				id: 1,
				title: "Visão ta ouro",
				year: 2016,
				artist: "Tribo da Periferia, Duckjay",
				album: " 4° Último",
			},
			{
				id: 2,
				title: "Não troco",
				year: 2017,
				artist: "Hungria Hip Hop",
				album: "Não Troco",
			},
		],
	},
];

module.exports = {
	allShow: () => {
		return playlists;
	},
	show: (idPlaylist) => {
		let playlist = playlists.find(
			(playlist) => playlist.id === idPlaylist
		);

		return playlist;
	},

	// create/playlist
	createPlaylist: (title, tags, musics) => {
		const playlist = {
			id: Math.floor(Math.random() * 9999),
			title: title,
			tags: tags,
			musics: musics,
		};

		playlists.push(playlist);
	},

	// // atualizar/playlist

	updatePlaylist: (idPlaylist, playlistObject) => {
		let playlistIndex = playlists.findIndex(
			(playlist) => playlist.id === idPlaylist
		);

		playlists[playlistIndex].title = playlistObject.title;

		if (playlistObject.tags) {
			playlists[playlistIndex].tags = playlistObject.tags;
		}

		return playlists[playlistIndex];
	},

	// // deleter/playlist

	deletePlaylist: (id) => {
		let playlistIndex = playlists.findIndex(
			(playlist) => playlist.id === id
		);
		playlists.splice(playlistIndex, 1);
	},

	// // create/tag

	createTag: (IdPlaylist, idTagName) => {
		let playlist = playlists.find((playlist) => playlist.id === IdPlaylist);

		playlist.tags.push(`#${idTagName}`);

		return playlist;
	},
	// // deleter/tags
	deleteTag: (IdPlaylist, idTagName) => {
		const tagname = `#${idTagName}`;
		let playlist = playlists.find((playlist) => playlist.id === IdPlaylist);

		let tagIndex = playlist.tags.findIndex((tag) => tag === tagname);

		console.log(tagIndex);
		if (tagIndex >= 0) {
			playlist.tags.splice(tagIndex, 1);
			return playlist;
		}
	},

	// create/music
	createMusic: (IdPlaylist, music) => {
		console.log(IdPlaylist);
		let playlist = playlists.find((playlist) => playlist.id === IdPlaylist);

		const newMusic = {
			id: Math.floor(Math.random() * 9999),
			...music,
		};

		console.log(playlist);

		playlist.musics.push(newMusic);

		return playlist;
	},

	// delete/music
	deleteMusic: (IdPlaylist, idMusic) => {
		console.log(IdPlaylist);
		let playlist = playlists.find((playlist) => playlist.id === IdPlaylist);
		console.log("______________");
		console.log(playlist);
		console.log("______________");
		let musicIndex = playlist.musics.findIndex((music) => music.id === idMusic);
		console.log(musicIndex);
		console.log("______________");
		if (musicIndex >= 0) {
			playlist.musics.splice(musicIndex, 1);
			return playlist;
		}

	},
};
