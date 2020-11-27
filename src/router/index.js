
import Vue from 'vue'
import VueRouter from 'vue-router'
import Parent from '_c/Parent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Parent
  }
]

const router = new VueRouter({
  routes
})

export default router
