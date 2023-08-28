import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListBlogDetails from '../views/BlogDetails.vue'
import Login from '../views/LoginView.vue'
import AuthorBlog from '../views/BlogAuthor.vue'
import Register from '../views/RegisterView.vue'
import PostBlog from '../views/PostBlog.vue'
import UpdatePostBlogDetails from '../views/UpdateBlog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/list-blog/:id',
    name: 'ListBlogDetails',
    component: ListBlogDetails
  },
  {
    path: '/author/blog',
    name: AuthorBlog,
    component: AuthorBlog
  },
  {
    path: '/post-blog',
    name: 'PostBlog',
    component: PostBlog
  },
  {
    path: '/update-post-blog/:id',
    name: 'UpdatePostBlogDetails',
    component: UpdatePostBlogDetails
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
