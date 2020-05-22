import { gql } from "apollo-server";

const bookSchema = gql`
  type Book {
    id: Int!
    name: String!
    user: User
  }

  extend type Query {
    books: [Book]
    book(id: Int!): Book
  }

  extend type Mutation {
    createBook(name: String!, userId: Int): Book!
    updateBook(id: Int!, name: String!): Book
    deleteBook(id: Int!): Boolean!
    alterBookUser(id: Int!, userId: Int!): Book!
  }
`;

export default bookSchema;
