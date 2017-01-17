/* eslint-disable no-new */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import 'normalize.css'
import './assets/global.sass'

Vue.use(VueRouter)

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
