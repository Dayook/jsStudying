const { ApolloServer, gql } = require("apollo-server");

/**
 * 스키마는 타입 정의의 collection이다
 */

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Author {
    name: String
    books: [Book]
  }

  type Query {
    books: [Book]
    authors: [Author]
  }
`;

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

/**
 * Define a Resolver
 * We've defined our data set, but Apollo Server doesn't know that
 * it should use that dataset when it's executing a query.
 * To fix this, we create a Resolver
 */

const resolvers = {
  Query: {
    books: () => books,
  },
};

/**
 * We've created our schema, dataset, resolver
 * provide this information to Apollo Server when we initialize it.
 */
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
