import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";

import resolvers from "./resolvers";
import typeDefs from "./typeDefs";
import dataSources from "./dataSources";

const port = process.env.PORT || 3005;

const main = async () => {
	const app = express();
	app.use(
		cors({
			origin: "*",
			allowedHeaders: "*",
			exposedHeaders: "*",
		})
	);

	app.get("/", (req, res) => {
		res.send("GraphQL API that wraps the Deezer Music backend");
	});
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		dataSources
	});
	await server.start();

	server.applyMiddleware({ app });

	app.listen({ port }, () => {
		console.log(`🚀 Server ready at port ${port}`);
	});
};

main();
