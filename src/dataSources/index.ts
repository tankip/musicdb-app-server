import ArtistsAPI from "./artistsApi";

const dataSources = () => {
	return {
		artistsAPI: new ArtistsAPI(),
	};
};

export default dataSources;
