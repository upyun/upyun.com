import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueRouter from '@upyun/vue-router'
import routes from './routes'
import 'normalize.css'
import './assets/global.sass'
import up_gradient from './components/up_gradient'
import up_button from './components/up_button'
import config from '../config'
import AMap from 'vue-amap'

Vue.use(AMap)
AMap.initAMapApiLoader({
  key: '7992a672d92cdf725ff50c351047a820',
  plugin: ['AMap.OverView', 'AMap.ToolBar', 'AMap.MapType']
})

import VueHead from 'vue-head'
Vue.use(VueHead, {
  separator: '-',
  complement: '又拍云'
})

Vue.use(VueRouter)
Vue.component('up_gradient', up_gradient)
Vue.component('up_button', up_button)

Vue.mixin({
  created: function () {
    this.$links = config.links
  }
})

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

new Vue({
  el: '#app',
  data () {
    return {
      session: {}
    }
  },
  render: h => h('div', { attrs: {id: 'app'} }, [h('router-view')]),
  created () {
    window.rootApp = this
  },
  router
})
