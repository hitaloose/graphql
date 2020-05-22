import { gql } from "apollo-server";

const userSchema = gql`
  type User {
    id: Int!
    name: String!
    email: String!
  }

  extend type Query {
    users: [User]
    user(id: Int!): User
  }

  extend type Mutation {
    createUser(name: String!, email: String!): User!
    updateUser(id: Int!, name: String!, email: String!): User
    deleteUser(id: Int!): Boolean!
  }
`;

export default userSchema;
