<template>
  <div>
    <div class="stat">
      <p>
        Completed Tasks:
        {{
        todos.filter(todo => {
        return todo.done === true;
        }).length
        }}
      </p>
      <p>
        Pending Tasks:
        {{
        todos.filter(todo => {
        return todo.done === false;
        }).length
        }}
      </p>
      <div class="ui buttons">
        <button class="positive ui button" v-on:click="clearCompleted">Clear completed</button>
        <div class="or"></div>
        <button class="ui negative button" v-on:click="clearAll">Clear all</button>
      </div>
    </div>
    <div class="ui link cards three column container">
      <todo
        v-on:delete-todo="deleteTodo"
        v-on:complete-todo="completeTodo"
        v-for="todo in todos"
        :key="todo.id"
        v-bind:todo="todo"
      ></todo>
    </div>
  </div>
</template>

<script type="text/javascript">
import Todo from "./Todo";

export default {
  props: ["todos"],
  components: {
    Todo
  },
  methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done = !this.todos[todoIndex].done;
    },
    clearAll() {
      this.$emit("clear-all");
    },
    clearCompleted() {
      this.$emit("clear-completed");
    }
  }
};
</script>

