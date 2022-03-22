import { IContext, IArtist, ITrack, IAlbum } from "../types";

const resolvers = {
	Query: {
		getArtist: async (root: unknown, { userId }: { userId: number }, { dataSources }: IContext): Promise<IArtist> =>
			dataSources.artistsAPI.getArtist(userId),
		searchArtist: async (root: unknown, { name }: { name: string }, { dataSources }: IContext): Promise<IArtist[]> =>
			dataSources.artistsAPI.searchArtist(name),
		getArtistTopTracks: async (root: unknown, { userId }: { userId: number }, { dataSources }: IContext): Promise<ITrack[]> =>
			dataSources.artistsAPI.getArtistTopTracks(userId),
		getArtistAlbums: async (root: unknown, { userId }: { userId: number }, { dataSources }: IContext): Promise<IAlbum[]> =>
			dataSources.artistsAPI.getArtistAlbums(userId),
	},
};

export default resolvers;
