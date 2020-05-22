import { gql } from "apollo-server";

import BookSchema from "./BookSchema";
import UserSchema from "./UserSchema";

export default gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }

  ${UserSchema}
  ${BookSchema}
`;
