<template>
  <section class="card">
    <div class="content" v-show="!isEditing">
      <div :class="{ isDone: todo.done }" class="content">
        <div class="header">{{ todo.title }}</div>
        <div class="meta">{{ todo.description }}</div>
        <div class="extra content">
          <span class="right floated edit icon" v-on:click="showForm">
            <i class="edit icon"></i>
          </span>

          <span class="right floated trash icon" v-on:click="deleteTodo(todo)">
            <i class="trash icon"></i>
          </span>
        </div>
      </div>
    </div>

    <div class="content" v-show="isEditing">
      <div class="ui form">
        <div class="field">
          <label>Title</label>
          <input type="text" v-model="todo.title" />
        </div>
        <div class="field">
          <label>Description</label>
          <input type="text" v-model="todo.description" />
        </div>
        <div class="ui two button attached buttons">
          <button class="ui basic blue button" v-on:click="hideForm">Done !</button>
        </div>
      </div>
    </div>

    <div
      class="ui bottom attached green basic button"
      v-show="todo.done"
      v-on:click="completeTodo(todo)"
    >Completed</div>
    <div
      class="ui bottom attached red basic button"
      v-show="!todo.done"
      v-on:click="completeTodo(todo)"
    >Pending</div>
  </section>
</template>

<script type="text/javascript">
export default {
  props: ["todo"],
  data() {
    return {
      isEditing: false
    };
  },
  methods: {
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
      Swal.fire({
        position: "bottom-end",
        icon: "success",
        title: "Task is succesfully editted",
        showConfirmButton: false,
        timer: 1500
      });
    },
    deleteTodo(todo) {
      this.$emit("delete-todo", todo);
      Swal.fire({
        position: "bottom-end",
        icon: "success",
        title: "Task is succesfully deleted",
        showConfirmButton: false,
        timer: 1500
      });
    },
    completeTodo(todo) {
      this.$emit("complete-todo", todo);
    }
  }
};
</script>
