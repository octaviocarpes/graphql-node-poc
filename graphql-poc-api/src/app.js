const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema')

let idCount = 1
let todos = [{ id: `todo-${idCount}`, title: 'Hello world!'}]

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    todos: () => todos
  },

  Mutation: {
    addTodo: (parent, { title }) => {
      idCount++
      const todo = { id: `todo-${idCount}`, title: title }
      todos.push(todo)
      return todo
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);