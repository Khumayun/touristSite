import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from 'vue-moment'
import './ml'

Vue.use(VueAxios, axios)
Vue.use(moment)


new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
