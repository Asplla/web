import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "wxhub iptv",
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: "Xu's System Status",
    },
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  //beforeEach是router的钩子函数，在进入路由前执行
  if(to.meta.title){
    //判断是否有标题
    document.title = String(to.meta.title)
  }
  //执行进入路由，如果不写就不会进入目标页
  next()
})

export default router
