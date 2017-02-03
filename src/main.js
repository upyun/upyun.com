import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import 'normalize.css'
import './assets/global.sass'
import up_gradient from './components/up_gradient'
import up_button from './components/up_button'

Vue.use(VueRouter)
Vue.component('up_gradient', up_gradient)
Vue.component('up_button', up_button)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  data () {
    return {
      session: {}
    }
  },
  render: h => h('router-view'),
  created () {
    window.rootApp = this
  },
  router
})
