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
        { name: 'Teambition', file: 'teambition', link: 'https://www.teambition.com/' },
        { name: '多备份', file: 'duobeifen', link: 'https://www.dbfen.com/' },
        { name: '个推', file: 'getui', link: 'http://www.getui.com/' },
        { name: '环信', file: 'huanxin', link: 'http://www.easemob.com/' },
        { name: '极光推送', file: 'jpush', link: 'https://www.jpush.cn/' },
        { name: '云智慧', file: 'cloudwise', link: 'http://www.cloudwise.com/' },
        { name: '诸葛IO', file: 'zhuge', link: 'http://zhugeio.com/' },
        { name: 'APICloud', file: 'apicloud', link: 'http://www.apicloud.com/' },
        { name: 'AppCan', file: 'appcan', link: 'http://www.appcan.cn/' },
        { name: 'BearyChat', file: 'bearychat', link: 'https://bearychat.com/' },
        { name: 'BEECLOUD', file: 'beecloud', link: 'https://beecloud.cn/' },
        { name: 'Coding', file: 'coding', link: 'https://beecloud.cn/' },
        { name: 'CSDN', file: 'csdn', link: 'http://www.csdn.net/' },
        { name: 'DaoCloud', file: 'daocloud', link: 'http://www.daocloud.io/' },
        { name: 'DevStore', file: 'devstore', link: 'http://www.devstore.cn/' },
        { name: 'FIR.im', file: 'fir', link: 'http://fir.im/' },
        { name: 'GitCafe', file: 'gitcafe', link: 'https://gitcafe.com/' },
        { name: 'hiStarter', file: 'hiStarter', link: 'http://www.histarter.com/' },
        { name: '极客学院', file: 'jikexueyuan', link: 'http://www.jikexueyuan.com/' },
        { name: '时速云', file: 'shisuyun', link: 'https://www.tenxcloud.com/' },
        { name: 'OneAPM', file: 'oneapm', link: 'https://www.oneapm.com/' },
        { name: 'PING++', file: 'ping++', link: 'https://pingxx.com/' },
        { name: 'Tower', file: 'tower', link: 'https://tower.im/' },
        { name: '洋葱', file: 'yangcong', link: 'https://www.yangcong.com/' },
        { name: '爱内测', file: 'aineice', link: 'http://www.ineice.com/' },
        { name: 'TalkingData', file: 'talkingdata', link: 'https://www.talkingdata.com/' },
        { name: '明道', file: 'mingdao', link: 'https://www.mingdao.com/home' },
        { name: 'EduSoho', file: 'EduSoho', link: 'http://www.edusoho.com/' },
        { name: '听云', file: 'tingyun', link: 'https://account.tingyun.com/reg/register?userFrom=upyun01' },
        { name: 'WLGF', file: 'wlgf', link: 'http://www.nsoad.com/' }
      ]
    }
  },
  head: {
    title: { inner: '合作伙伴' }
  },
  components: { layout, brand_logos }
}
</script>
