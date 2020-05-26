import { ApolloServer } from 'apollo-server';
import './database';

import typeDefs from './app/schemas';
import resolvers from './app/resolvers';

export default new ApolloServer({ typeDefs, resolvers });
