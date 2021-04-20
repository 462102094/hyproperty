import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/main/home/index'
import login from '@/main/home/login'
import test from '@/main/home/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
