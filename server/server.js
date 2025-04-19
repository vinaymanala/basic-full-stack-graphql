// server.js (with "type": "module" in package.json)
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const users = [
  { id: "1", name: "John Doe", age: 23, isMarried: false },
  { id: "2", name: "Savy Kyle", age: 32, isMarried: true },
  { id: "3", name: "Sawn Michaels", age: 30, isMarried: true },
];

const typeDefs = `
  type Query {
    getUsers: [User]
    getUserById(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, age: Int!, isMarried: Boolean!): User
  }

  type User {
    id: ID
    name: String
    age: Int
    isMarried: Boolean
  }
`;

const resolvers = {
  Query: {
    getUsers: () => users,
    getUserById: (parent, args) => users.find((u) => u.id === args.id),
  },
  Mutation: {
    createUser: (parent, { name, age, isMarried }) => {
      const newUser = {
        id: (users.length + 1).toString(),
        name,
        age,
        isMarried,
      };
      users.push(newUser);
      return newUser;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("🚀 Server running on", url);
