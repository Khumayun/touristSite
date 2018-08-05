import Vue from 'vue'
import Router from 'vue-router'

import AbstractPublicPage from './views/AbstractPublicPage'
import MainPage from './views/public/MainPage'

Vue.use(Router)

export default new Router({
  routes:
    [
      {
        path: '/',
        component: AbstractPublicPage,
        children: [
          {
            path: '/',
            name: 'main-page',
            component: MainPage
          }
        ]
      }
    ]
})
