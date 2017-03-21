<style lang="sass" scoped>
@import "../../assets/animations"
.layout
  background-color: #fff
  .hero
    height: 80px
    position: relative
    background-image: linear-gradient(312deg, #3AE7F3 0%, #1e96e5 100%)
    z-index: 100
  &.chunyu-banner
    .hero
      background: #2a989d
      border-bottom: 1px solid #239398
  &.league-banner
    .hero
      background: #ebc149
      border-bottom: 1px solid #eab726
  &.https-banner
    .hero
      background: #0bacdb
      border-bottom: 1px solid #1eb3de
  &.brandnew
    .hero
      height: 548px
      .cover
        +animate(fadeInDown, .5s, .5s)
        position: relative
        top: -80px
        height: 548px
        background: url('./assets/brandnew/banner.png') center no-repeat
  &.promotion
    .hero
      height: 538px
      .cover
        +animate(fadeInDown, .5s, .5s)
        height: 458px
        background: url('./assets/promotion/banner.png') center no-repeat
      .charge-now
        position: relative
        top: -110px
        text-align: center
        +animate(fadeInUp, .5s, .5s)
</style>

<template lang="pug">
.layout
  .hero
    page_header
    slot(name="hero")
  slot(name="page")
  page_footer
</template>

<script>
import page_header from '../../components/page_header'
import page_footer from '../../components/page_footer'

export default {
  components: { page_header, page_footer },
  head: {
    title: {
      inner: '又拍云 - 加速在线业务'
    },
    meta: [
      { name: 'keywords', content: 'CDN,云加速,视频加速,音频加速,全站加速,文件加速,智能CDN,云服务,CDN加速,音视频处理,云存储', id: 'kw' },
      { name: 'description', content: '又拍云 是国内领先的CDN服务提供商，国家工信部认证通过的“可信云”，乌云众测平台认证的“安全云”，为移动时代的创业者提供新一代的CDN加速服务。', id: 'desc' }
    ]
  }
}
</script>