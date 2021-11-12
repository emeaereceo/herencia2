console.log('Conectado');
let miIife = (() => {
	let funcionPrivada = (url, id) => {
		id.setAttribute('src', url);
	};
	return {
		funcionPublica: (url, id) => funcionPrivada(url, id),
	};
})();

class Multimedia {
	constructor(url) {
		this.url = url;
	}
	get getUrl() {
		return this.url;
	}
	setInicio() {
		return `Este metodo es para realizar un cambio en la URL del video`;
	}
}

class Reproductor extends Multimedia {
	constructor(url, id) {
		super(url);
		this.id = id;
	}
	playMultimedia() {
		miIife.funcionPublica(this.getUrl, this.id);
	}
	setInicio(time) {
		this.id.setAttribute('src', `${this.getUrl}?start=${time}`);
	}
}

const vistaMusic = new Reproductor(
	'https://www.youtube.com/embed/IOFE6Vq6Zsc',
	musica
);
vistaMusic.playMultimedia();
vistaMusic.setInicio(336);

const vistaPeli = new Reproductor(
	'https://www.youtube.com/embed/NW_4Gir2AMU',
	peliculas
);
vistaPeli.playMultimedia();
vistaPeli.setInicio(30);

const vistaSerie = new Reproductor(
	'https://www.youtube.com/embed/HhesaQXLuRY',
	series
);
vistaSerie.playMultimedia();
vistaSerie.setInicio(50);
