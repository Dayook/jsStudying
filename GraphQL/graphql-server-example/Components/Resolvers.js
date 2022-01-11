const { ApolloServer, gql } = require("apollo-server");

/**
 * Apollo Server needs to know how to populate data for every field in your schema
 * so that it can respond to requests for that data.
 *
 * A resolver is a function that's responsible for populating the data
 * for a single field in your sheema
 * It can populate that data in any way you define,
 * such as fetching data from a backend database or third-party API
 *
 * if you don't define a resolver for a particular field,
 * Apollo Server automatically defines a default resolver for it
 *
 */

const typeDefs = gql`
  # defining resolver
  type Query {
    numberSix: Int! # Should always return the number 6 when queried
    numberSeven: Int! # Should always return 7
  }

  type User {
    id: ID!
    name: String
  }

  type Query2 {
    user(id: ID!): User
  }

  type Library {
    branch: String!
    books: [Book!]
  }

  type Book {
    title: String!
    author: Author!
  }

  type Author {
    name: String!
  }

  type Query3 {
    libraries: [Library]
  }

  query GetBooksByLibrary {
    libraries {
      books {
        author {
          name
        }
      }
    }
  }
`;

const users = [
  {
    id: "1",
    name: "Elizabeth Bennet",
  },
  { id: "2", name: "Fitzwilliam Darcy" },
];

const resolvers = {
  Query: {
    numberSix() {
      return 6;
    },
    numberSeven() {
      return 7;
    },
  },
};

/**
 * As this example shows;
 * You define all of your sever's resolvers in a single JavaScript object.
 * This object is called resolver map
 *
 * The resolver map has top-level fields that correspond to your schema's types
 * (such as Query above)
 *
 * Each Resolver function belongs to whichever type its corresponding field belongs to.
 */

const resolvers = {
  Query: {
    user(parent, args, context, info) {
      return users.find((user) => user.id === args.id);
    },
  },
};
