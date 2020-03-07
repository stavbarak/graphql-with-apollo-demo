const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
      id: ID!
      firstName: String!
      lastName: String!
      age: Int
      position: String
      companyId: String
  }

  type Company {
      id: ID!
      name: String!
      location: String!
  }

  input UsersInput {
      companyId: String
      position: String
  }

  input CompanyInput {
      location: String
  }

  input NewCompanyInput {
      name: String!
      location: String!
  }

  input NewUserInput {
      firstName: String!
      lastName: String!
      age: Int
      position: String
      companyId: String
  }

  input SingleItemInput {
      id: ID!
  }

  type Query {
      companies(input: CompanyInput): [Company]!
      company(input: SingleItemInput!): Company!
      users(input: UsersInput): [User]!
      user(input: SingleItemInput!): User!
  }

  type Mutation {
      addCompany(input: NewCompanyInput!): Company!
      addUser(input: NewUserInput!): User!
  }

`;

module.exports = typeDefs
