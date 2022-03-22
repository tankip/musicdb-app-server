import { RESTDataSource } from "apollo-datasource-rest";
import { IArtist, ITrack, IAlbum } from "../types";

export default class ArtistsAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = process.env.BASE_URL;
	}

	async getArtist(userId: number): Promise<IArtist> {
		return await this.get(`/artist/${userId}`);
	}

	async searchArtist(name: string): Promise<IArtist[]> {
		const result = await this.get(`search/artist?q=${name}&strict=on`);
		return result.data;
	}

	async getArtistTopTracks(userId: number): Promise<ITrack[]> {
		const result = await this.get(`/artist/${userId}/top?limit=5`);
		return result.data;
	}

	async getArtistAlbums(userId: number): Promise<IAlbum[]> {
		const result = await this.get(`/artist/${userId}/albums`);
		return result.data;
	}
}
