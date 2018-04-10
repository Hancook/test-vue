import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import List from '@/components/list'
import Edit from '@/components/edit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: _dirname,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/edit:id',
      name: 'edit',
      component: Edit
    }
  ]
})
