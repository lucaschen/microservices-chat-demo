import { gql } from "apollo-server";

const schema = gql`
  scalar Date

  type User {
    username: ID!
  }

  type UserSession {
    createdAt: Date!
    expiresAt: Date!
    user: User!
  }

  type Mutation {
    createUser(password: String!, username: String!): User!
    createUserSession(password: String!, username: String!): UserSession!
    deleteUserSession(me: Boolean!): Boolean!
  }

  type Query {
    userSession(me: Boolean!): UserSession
  }
`;

export default schema;
