<template class="background">
  <div>
    <div class="nav-bar"><h1>TODO APP</h1></div>
    <todo-list v-bind:todos="todos"></todo-list>
    <create-todo v-on:add-todo="addTodo"></create-todo>
  </div>
</template>

<script>
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";

export default {
  name: "app",
  components: {
    TodoList,
    CreateTodo
  },

  data() {
    return {
      todos: []
    };
  },

  methods: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
    }
  },

  mounted() {
    console.log("App mounted!");
    if (localStorage.getItem("todos"))
      this.todos = JSON.parse(localStorage.getItem("todos"));
  },

  watch: {
    todos: {
      handler() {
        console.log("Todos changed!");
        localStorage.setItem("todos", JSON.stringify(this.todos));
      },
      deep: true
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.isDone {
  text-decoration: line-through;
}

.stat {
  margin: 30px;
  text-align: center;
}

.nav-bar {
  padding: 20px;
  text-align: center;
  height: 60px;
  margin-bottom: 15px;
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
}
</style>
