import home from './pages/home/index'
import productUss from './pages/product/uss'
import productCdn from './pages/product/cdn'
import productUps from './pages/product/ups'
import productMobile from './pages/product/mobile'
import productVod from './pages/product/vod'
import productLive from './pages/product/live'
import solutionAv from './pages/solution/av'
import solutionMobile from './pages/solution/mobile'
import solutionECommerce from './pages/solution/e-commerce'

export default [
  { path: '/', component: home },
  { path: '/product/uss', component: productUss },
  { path: '/product/cdn', component: productCdn },
  { path: '/product/ups', component: productUps },
  { path: '/product/mobile', component: productMobile },
  { path: '/product/vod', component: productVod },
  { path: '/product/live', component: productLive },
  { path: '/solution/av', component: solutionAv },
  { path: '/solution/mobile', component: solutionMobile },
  { path: '/solution/e-commerce', component: solutionECommerce }
]
