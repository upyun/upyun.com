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
            a Segmentfault
            a 开源中国
            a RubyChina
            a 36Kr
            a 加速会微链
</template>

<script>
import layout from './layout'
import brand_logos from '../../components/brand_logos'

export default {
  data () {
    return {
      logos: [
        { name: '个推', file: 'getui' },
        { name: '极光推送', file: 'jpush' },
        { name: '环信', file: 'huanxin' },
        { name: '云智慧', file: 'cloudwise' },
        { name: '诸葛IO', file: 'zhuge' },
        { name: 'APICloud', file: 'apicloud' },
        { name: 'AppCan', file: 'appcan' },
        { name: 'BearyChat', file: 'bearychat' },
        { name: 'BEECLOUD', file: 'beecloud' },
        { name: 'Coding', file: 'coding' },
        { name: 'CSDN', file: 'csdn' },
        { name: 'DevStore', file: 'devstore' },
        { name: 'FIR.im', file: 'fir' }
      ]
    }
  },
  components: { layout, brand_logos }
}
</script>
