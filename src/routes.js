import home from './pages/home/index'
import productUss from './pages/product/uss'
import productCdn from './pages/product/cdn'
import productUps from './pages/product/ups'

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
  }
]
