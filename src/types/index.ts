import ArtistsAPI from "../dataSources/artistsApi";

export interface IDataSources {
    artistsAPI: ArtistsAPI;
}

export interface IContext {
	dataSources: IDataSources;
}

export interface IArtist {
	id: number;
	name: string;
	picture: string;
	nb_fan: number;
	nb_album: number;
}
export interface ITrack {
	id: number;
	title: string;
	duration: number;
}

export interface IAlbum {
	id: number;
	title: string;
	cover: string;
	release_date: Date;
}
