<style lang="sass" scoped>
.layout
  .hero
    height: 440px
    position: relative
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
  head: {
    meta: [
      { name: 'keywords', content: 'CDN,云加速,视频加速,音频加速,全站加速,文件加速,智能CDN,云服务,CDN加速,音视频处理,云存储', id: 'kw' },
      { name: 'description', content: '又拍云 是国内领先的CDN服务提供商，国家工信部认证通过的“可信云”，乌云众测平台认证的“安全云”，为移动时代的创业者提供新一代的CDN加速服务。', id: 'desc' }
    ]
  },
  components: { page_header, page_footer }
}
</script>
