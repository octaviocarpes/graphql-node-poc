const { gql } = require('apollo-server-express')

module.exports = typeDefs = gql`
type Query {
  hello: String,
  todos: [Todo!]!,
  todo(title: String!): Todo!
}

type Mutation {
  addTodo(title: String!): Todo!
}

type Todo {
  id: String!,
  title: String!
}
`;