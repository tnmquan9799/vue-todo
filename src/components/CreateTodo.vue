<template>
  <div class="ui basic content center aligned segment">
    <div
      class="ui animated fade button"
      tabindex="0"
      v-on:click="openForm"
      v-show="!isCreating"
    >
      <div class="visible content">Up to anything ?</div>
      <div class="hidden content">
        <i class="plus icon"></i>
      </div>
    </div>
    <div class="ui centered card" v-show="isCreating">
      <div class="content">
        <div class="ui form">
          <div class="field">
            <label>Title</label>
            <input v-model="titleText" type="text" ref="title" defaultValue />
          </div>
          <div class="field">
            <label>Description</label>
            <input
              v-model="descriptionText"
              type="text"
              ref="description"
              defaultValue
            />
          </div>
          <div class="ui two button attached buttons">
            <button class="ui basic blue button" v-on:click="sendForm">
              Create
            </button>
            <button class="ui basic red button" v-on:click="closeForm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      titleText: "",
      descriptionText: "",
      isCreating: false
    };
  },
  methods: {
    openForm() {
      this.isCreating = true;
    },
    // formatDate(date) {
    //   if (date) {
    //     return moment(String(date)).format("DD-MM-YYYY");
    //   }
    // },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
      if (this.titleText.length > 0 && this.descriptionText.length > 0) {
        const title = this.titleText;
        const description = this.descriptionText;
        let currentDate = new Date();
        const createdDate = moment(currentDate).format("DD-MM-YYYY");
        let newTodo = {
          title,
          description,
          done: false,
          createdDate
        };
        this.$emit("add-todo", newTodo);
        Swal.fire({
          position: "bottom-end",
          icon: "success",
          title: "Task is succesfully created",
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        Swal.fire({
          position: "bottom-end",
          icon: "error",
          title: "Oops...",
          text: "Remember to fill the fields"
        });
      }
      this.isCreating = false;
      this.titleText = "";
      this.descriptionText = "";
    }
  }
};
</script>
