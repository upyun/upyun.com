import home from './pages/home/index'
import NotFound from './pages/home/NotFound'
import productUss from './pages/products/file-storage'
import productCdn from './pages/products/cdn'
import productUps from './pages/products/process'
import productMarketing from './pages/products/marketing'
import productVod from './pages/products/vod'
import productLive from './pages/products/live'
import solutionAv from './pages/solutions/media'
import solutionMobile from './pages/solutions/mobile'
import solutionECommerce from './pages/solutions/ecommerce'
import solutionGame from './pages/solutions/game'
import solutionEducation from './pages/solutions/education'
import solutionFusion from './pages/solutions/fusionstorage'
import aboutUs from './pages/about/about_us'
import contact from './pages/about/contact'
import terms from './pages/about/terms'
import mobileStatsTerms from './pages/about/mobile_stats_terms'
import partners from './pages/about/partners'
import joinUs from './pages/about/join_us'
import pricing from './pages/about/pricing'
import price_instruction from './pages/about/price_instruction'
const webp = resolve => require(['./pages/others/webp.vue'], resolve)
const league = resolve => require(['./pages/others/league.vue'], resolve)
const chunyu = resolve => require(['./pages/others/chunyu.vue'], resolve)
const chunyu_tos = resolve => require(['./pages/others/chunyu_tos.vue'], resolve)
const https = resolve => require(['./pages/others/https.vue'], resolve)
const reports = resolve => require(['./pages/about/reports.vue'], resolve)
const brandnew = resolve => require(['./pages/others/brandnew.vue'], resolve)

export default [
  { path: '/', component: home },
  { path: '/products/file-storage', component: productUss },
  { path: '/products/cdn', component: productCdn },
  { path: '/products/process', component: productUps },
  { path: '/products/marketing', component: productMarketing },
  { path: '/products/vod', component: productVod },
  { path: '/products/live', component: productLive },
  { path: '/solutions/media', component: solutionAv },
  { path: '/solutions/mobile', component: solutionMobile },
  { path: '/solutions/ecommerce', component: solutionECommerce },
  { path: '/solutions/game', component: solutionGame },
  { path: '/solutions/education', component: solutionEducation },
  { path: '/solutions/fusionstorage', component: solutionFusion },
  { path: '/about_us', component: aboutUs },
  { path: '/contact', component: contact },
  { path: '/terms', component: terms },
  { path: '/mobile_stats_terms', component: mobileStatsTerms },
  { path: '/partners', component: partners },
  { path: '/join_us', component: joinUs },
  { path: '/pricing', component: pricing },
  { path: '/price_instruction', component: price_instruction },
  { path: '/webp', component: webp },
  { path: '/league', component: league },
  { path: '/chunyu', component: chunyu },
  { path: '/chunyu_tos', component: chunyu_tos },
  { path: '/media_reports', component: reports },
  { path: '/https', component: https },
  { path: '/brandnew', component: brandnew },
  { path: '*', component: NotFound }
]
