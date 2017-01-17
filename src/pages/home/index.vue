<style lang="sass" src="./home.sass" scoped></style>

<template lang="pug">
layout(:colors="colorSet")
  summit
  .slide
    .title 为 Web 和移动应用
      br
      | 提供更快、更安全的全网加速
    .sub-title
      | 通过 CDN 为网页和移动应用提供加速，支持点播和直播,
      br
      | 自主化配置，7 × 24 小时技术支持
    .buttons
      a.up-button.major 免费体验
      a.up-button 快速入门
  .dots
    .dot.active
    .dot
    .dot
    .dot
</template>

<script>
import layout from '../../components/layout'
import summit from '../../components/summit'
import colors from '../../services/colors'

export default {
  data () {
    return {
      colorSet: colors.collection[0]
    }
  },
  mounted () {
  },
  components: { layout, summit }
}
</script>
