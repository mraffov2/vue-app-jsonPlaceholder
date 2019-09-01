<template>
    <div class="container">
        <div class="row justify-content-center mt-3">
            <div v-if="succesMessage" class="alert alert-success col-12 col-sm-12 col-lg-7" role="alert">
                Post created!
            </div>
            <div v-if="wrongMessage" class="alert alert-warning col-12 col-sm-12 col-lg-7" role="alert">
                Something wrong, Try again
            </div>
            <div class="col-12 col-sm-12 col-lg-7">
                <h1 class="mt-3">Create Post</h1>
                <h3 v-if="send" class="text-center">Sending...</h3>
                <form v-on:submit.prevent="addPost" id="form">
                <div class="row">
                    <div class="col-md-12">
                    <div class="form-group">
                        <label>Post title:</label>
                        <input type="text" class="form-control" v-model="post.title">
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                    <div class="form-group">
                        <label>Post decrption:</label>
                        <input type="text" class="form-control" v-model="post.body">
                    </div>
                    </div>
                </div><br />
                <p v-if="!validation" class="text-danger text-center">All field are required</p>
                <div class="form-group">
                    <button class="btn btn-primary">Add Post</button>
                </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    data(){
      return{
        send: false,
        wrongMessage: false,
        succesMessage : false,
        validation: true,
        post:{}
      }
    },
    methods: {
     async addPost(){
        if(this.post.title == '' || this.post.body == '') {
            this.validation = false
        }else {
            this.send = true;
            let uri = 'https://jsonplaceholder.typicode.com/posts';
            await this.axios.post(uri, this.post).then((response) => {
            if (response.status == 201) {
                this.post.title = ''
                this.post.body = ''
                this.send = false
                this.succesMessage = true;
            } else{
                this.wrongMessage = true;
                this.send = false
            }
        });
        }
      }
    }
  }
</script>