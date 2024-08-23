import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Error404 from '../components/result/404.vue'

const routes = [
  {
    path: '/',
    assetsPublicPath: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "WXHUB",
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: "NOT FOUND - WXHUB",
    },
  },
  {
    path: '/:pathMatch(.*)*', // 捕获所有无法匹配的路径
    name: 'Error404',
    component: Error404,
    meta: {
      title: "NOT FOUND - WXHUB",
    },
  }
]
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
