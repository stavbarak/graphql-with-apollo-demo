const gql = require('graphql-tag');
const { ApolloServer } = require('apollo-server');

// typeDefs
const typeDefs = gql`
type User {
    email: String!
    avatar: String!
    friends: [User]!
}

type Query {
    me: User!
}
`

// resolvers
const resolvers = {
    Query: {
        me() {
            return {
                email: "bla",
                avatar: "bla",
                friends: []
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(4000)
.then(console.log('listening on 4000'))