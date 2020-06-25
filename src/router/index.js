import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginBlock from '../components/login/loginblock'

Vue.use(VueRouter)

  const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    component:LoginBlock
  },
  {
    path:'/order',
    component:()=>import('views/orderpage/orderpage.vue')
  },
  {
    path:'/special',
    component:()=>import('views/special/special.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
