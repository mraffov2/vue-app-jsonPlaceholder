import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import FormPost from '@/components/FormPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/addpost',
      name: 'CreatePost',
      component: FormPost
    }
  ]
})
