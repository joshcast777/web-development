// METHODS

// Property methods - Functions  inside an object
const player = {
	play: function (id) {
		console.log("Reproduciendo canción", id);
	}, 
	pause: function () {
		console.log("Pausando canción...");
	},
	createPlaylist: function (name) {
		console.log("Creando playlist", name);
	},
	playingPlaylist: function (name) {
		console.log("Reproduciendo playlist", name);
	}
}

player.deleteSong = function (id) {
	console.log("Eliminando la canción", id);
}

console.log(player);
player.play(3840);
player.pause();
player.deleteSong(3840);
player.createPlaylist("Metal");
player.playingPlaylist("Metal");