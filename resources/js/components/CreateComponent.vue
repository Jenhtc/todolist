// CreateComponent.vue

<template>
  <div>
    <h1>Add a task</h1>
    <form @submit.prevent="addPost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Post Title:</label>
            <input
              type="text"
              class="form-control"
              v-bind:class=" [error.errorClass]"
              v-model="post.title"
            />
            <div class="invalid-feedback">{{error.title}}</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Post Body:</label>
            <textarea
              class="form-control"
              v-bind:class=" [error.errorClass]"
              v-model="post.body"
              rows="5"
            ></textarea>
            <div class="invalid-feedback">{{error.title}}</div>
          </div>
        </div>
      </div>
      <br />
      <div class="form-group">
        <button class="btn btn-primary">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},
      error: {
        title: "",
        body: "",
        errorClass: ""
      }
    };
  },
  methods: {
    addPost() {
      let uri = "/api/post/create";
      this.axios.post(uri, this.post).then(({ data }) => {
        if (data.error) {
          this.error.errorClass = "is-invalid";

          this.error.title = data.error.title[0];
          this.error.body = data.error.body[0];
        } else {
          this.$router.push({ name: "posts" });
        }
      });
    }
  }
};
</script>