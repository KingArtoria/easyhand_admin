import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  { path: '/login', name: 'Login', component: () => import('../views/login/index') },
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router
