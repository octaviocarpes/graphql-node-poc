<template>
  <div class="todo-container">
    <h2>{{ title }}</h2>
    <button>Done!</button>
  </div>
</template>

<script>
export default {
  name: 'Todo',

  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-container {
  display: flex;
}
</style>
