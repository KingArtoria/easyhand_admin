import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  { path: '/login', name: 'Login', component: () => import('../views/login/index') },
  { path: '/index', name: 'Index', component: () => import('../views/index/index') },
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
// 路由守卫
router.beforeEach((to, from, next) => {
  // 判断是否登录
  const isLogin = localStorage.userInfo ? true : false
  if (to.path === '/login') {
    next()
  } else {
    isLogin ? next() : next('/login')
  }
})
export default router
