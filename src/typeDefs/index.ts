import { gql } from "apollo-server-express";

const typeDefs = gql`
	scalar DateTime
	type Artist {
		id: Int
		name: String
		picture: String
		nb_fan: Int
		nb_album: Int
	}

	type Track {
		id: Int
		title: String
		duration: Int
	}

	type Album {
		id: Int
		title: String
		cover: String
		release_date: DateTime
	}

	type Query {
		getArtist(userId: Int!): Artist
		searchArtist(name: String!): [Artist]
		getArtistTopTracks(userId: Int!): [Track]
		getArtistAlbums(userId: Int!): [Album]
	}

`;

export default typeDefs;
