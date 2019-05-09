<template>
  <div class="todos-container">
    <h1>Type your todo here! (Press enter to add your todo to the list)</h1>
    <input type="text" v-model="title" @keyup.enter="addTodo()">
    <Todo v-for="todo in todos" :key="todo.id" :title="todo.title"/>
  </div>
</template>

<script>
import Todo from '@/components/Todo.vue';
import store from '@/store';

export default {
  name: 'Todos',

  components: { Todo },

  data() {
    return {
      title: '',
    };
  },

  mounted() {
    store.dispatch('GET_TODOS');
  },

  methods: {
    addTodo() {
      store.dispatch('ADD_TODO', this.title);
    },
  },

  computed: {
    todos() {
      return store.state.todos;
    },
  },
};
</script>

<style lang="scss">

</style>
