const gql = require('graphql-tag');
const { ApolloServer } = require('apollo-server');

// typeDefs


// resolvers


const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(4000)
.then(console.log('listening on 4000'))