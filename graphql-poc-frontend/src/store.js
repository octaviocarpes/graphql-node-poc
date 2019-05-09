import Vue from 'vue';
import Vuex from 'vuex';
import TodoService from '@/services/todo.service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    PUSH_TODO: (state, todo) => {
      state.todos = [...state.todos, todo];
    },
  },
  actions: {
    ADD_TODO: async ({ commit }, todo) => {
      const res = await TodoService.addTodo(todo);
      console.log(res);
      commit('PUSH_TODO', res);
    },

    GET_TODOS: async ({ commit }) => {
      const res = await TodoService.getTodos();
      console.log(res);
      commit('PUSH_TODO', res.todos);
    },
  },
});
