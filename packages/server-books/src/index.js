
import resolvers from './resolvers'


import typeDefs from './schema'

const queryResolvers = {
    Query: resolvers,
};


export default {typeDefs, queryResolvers};