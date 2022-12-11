import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'
import AddPostView from '../views/AddPostView.vue'
import APost from '../views/APost.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUpView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactsView.vue')
  },
  {
    path: '/addpost',
    name: 'addpost',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddPostView.vue')
  },
  {
    path: "/api/apost/:id",
    name: "APost",
    component: APost,
  },
  { //will route to home view if none of the previous routes apply
    path: "/:catchAll(.*)",
    name: "HomeView",
    component: HomeView,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
