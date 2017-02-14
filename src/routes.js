import home from './pages/home/index'
import productUss from './pages/product/uss'
import productCdn from './pages/product/cdn'
import productUps from './pages/product/ups'
import productMobile from './pages/product/mobile'
import productVod from './pages/product/vod'
import productLive from './pages/product/live'

export default [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/product/uss',
    name: 'uss',
    component: productUss
  },
  {
    path: '/product/cdn',
    name: 'cdn',
    component: productCdn
  },
  {
    path: '/product/ups',
    name: 'ups',
    component: productUps
  },
  {
    path: '/product/mobile',
    name: 'mobile',
    component: productMobile
  },
  {
    path: '/product/vod',
    name: 'vod',
    component: productVod
  },
  {
    path: '/product/live',
    name: 'live',
    component: productLive
  }
]
