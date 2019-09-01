<template>
  <div class="container">
    <div>
      <h1 class="text-center">Posts JsonPlaceholder</h1>
    </div>
    <div v-if="posts.length !== 0" class="row">
      <div v-for="post in posts" class="card col-11 col-sm-11 col-lg-6 mt-3">
        <div class="card-body">
          <h5 class="card-title">
            {{post.title}}
          </h5>
          <p class="card-text">
            {{post.body}}
          </p>
        </div>
      </div>
    </div>
    <div v-else>
      <h3 class="text-center">Loading...</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  data () {
    return {
      posts : []
    }
  },

  created: function () {
    this.getAxiosPosts();
  },

  methods: {
    async getAxiosPosts()
    {
      let uri = 'https://jsonplaceholder.typicode.com/posts';
      await this.axios.get(uri).then((response) => {
        this.posts =  response.data;
      });
    },
  }
}
</script>


<style>

</style>
