<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <router-link :to="{ name: 'Posts' }" class="navbar-brand">
        Post
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'CreatePost' }" class="nav-link">
              Create Post
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- CONTENT -->
    <div class="container">
      <div>
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
</style>
