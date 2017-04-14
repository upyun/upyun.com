<style lang="sass" src="./about.sass" scoped></style>
<style lang="sass" scoped>
.links
  text-align: center
  font-size: 20px
  a
    display: inline-block
    margin-right: 20px
</style>

<template lang="pug">
layout
  div(slot="hero")
    .cover
  div(slot="page")
    .about-page
      .container
        .unit
          .title 合作伙伴
          .sub-title 携手打造云服务生态圈，合作共赢
          brand_logos(:logos="logos", style="margin-top: 40px")
        .unit
          .title 友情链接
          .links
            a(href="http://segmentfault.com/" target="_blank") Segmentfault
            a(href="http://www.oschina.net/" target="_blank") 开源中国
            a(href="https://ruby-china.org/" target="_blank") RubyChina
            a(href="http://36kr.com/" target="_blank") 36Kr
            a(href="http://jiasuhui.com/" target="_blank") 加速会
            a(href="http://www.welian.com/" target="_blank") 微链
</template>

<script>
import layout from './layout'
import brand_logos from '../../components/brand_logos'

export default {
  data () {
    return {
      logos: [
        { name: 'Teambition', file: 'teambition', link: 'https://www.teambition.com/' },
        { name: '多备份', file: 'duobeifen', link: 'https://www.dbfen.com/' },
        { name: '个推', file: 'getui', link: 'http://www.getui.com/' },
        { name: '环信', file: 'huanxin', link: 'http://www.easemob.com/' },
        { name: '极光推送', file: 'jpush', link: 'https://www.jpush.cn/' },
        { name: '诸葛io', file: 'zhugeio', link: 'http://zhugeio.com/' },
        { name: 'APICloud', file: 'apicloud', link: 'http://www.apicloud.com/' },
        { name: 'AppCan', file: 'appcan', link: 'http://www.appcan.cn/' },
        { name: 'BearyChat', file: 'bearychat', link: 'https://bearychat.com/' },
        { name: 'BEECLOUD', file: 'beecloud', link: 'https://beecloud.cn/' },
        { name: 'Coding', file: 'coding', link: 'https://coding.net/' },
        { name: 'DevStore', file: 'devstore', link: 'http://www.devstore.cn/' },
        { name: 'FIR.im', file: 'fir', link: 'http://fir.im/' },
        { name: '时速云', file: 'shisuyun', link: 'https://www.tenxcloud.com/' },
        { name: 'OneAPM', file: 'oneapm', link: 'https://www.oneapm.com/' },
        { name: 'Tower', file: 'tower', link: 'https://tower.im/' },
        { name: '明道', file: 'mingdao', link: 'https://www.mingdao.com/home' },
        { name: 'EduSoho', file: 'EduSoho', link: 'http://www.edusoho.com/' },
        { name: '听云', file: 'tingyun', link: 'https://account.tingyun.com/reg/register?userFrom=upyun01' },
        { name: 'WLGF', file: 'wlgf', link: 'http://www.nsoad.com/' },
        { name: '数人云', file: 'shurenyun', link: 'https://www.shurenyun.com/' },
        { name: '野狗', file: 'wilddog', link: 'https://www.wilddog.com/' },
        { name: '蒲公英', file: 'pgyer', link: 'https://www.pgyer.com/' }
      ]
    }
  },
  head: {
    title: { inner: '合作伙伴' }
  },
  components: { layout, brand_logos }
}
</script>
