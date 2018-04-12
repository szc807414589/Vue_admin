import Vue from 'vue'
import Router from 'vue-router'
import activePublic from '../components/activePublic'
import main from '../components/main.vue'
import home from '../components/home.vue'
import two from '../components/two.vue'
import three from '../components/three.vue'
import demo from '../components/demo.vue'
import login from '../components/login.vue'
import feedback from '../components/feedback.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  base: __dirname,
  routes: [
    {path: '/', redirect: "/main"},
    {
      path: '/login',
      component: login
    },
    {
      path: '/main',
      component:main,
      children: [
        {name: 'home', path: '/home', component: home},
        {name: 'activePublic', path: '/activePublic', component: activePublic},
        {name: 'two', path: '/two', component: two},
        {name: 'three', path: '/three', component: three},
        {name: 'demo', path: '/demo', component: demo},
        {name: 'feedback', path: '/feedback', component: feedback},
      ]
    }
  ]
})

export default router

