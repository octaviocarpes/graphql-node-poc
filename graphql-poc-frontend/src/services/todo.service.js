import { request } from 'graphql-request';

const buildAddQuery = title => `mutation {
    addTodo(title: "${title}") {
      id,
      title
    }
  }`;

const buildGetQuery = () => `{
  todos {
    id,
    title
  }
}`;

export default {
  addTodo(title) {
    const query = buildAddQuery(title);
    return request('http://localhost:4000/graphql', query);
  },

  getTodos() {
    const query = buildGetQuery();
    return request('http://localhost:4000/graphql', query);
  },
};
