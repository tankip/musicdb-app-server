import { createTestClient, ApolloServerTestClient } from 'apollo-server-testing';
import { ApolloServer } from 'apollo-server-express';

import resolvers from '../resolvers';
import typeDefs from '../typeDefs';

const testServer = ( dataSources: any ): ApolloServerTestClient => {
    return createTestClient(new ApolloServer({ typeDefs, resolvers, dataSources}))
}

export default testServer;