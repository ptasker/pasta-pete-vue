import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Pasta'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pasta',
      component: Pasta
    }
  ]
})
