<style lang="sass" scoped>
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
        position: relative
        top: -80px
        height: 548px
        background: url('./assets/brandnew/banner.png') center no-repeat
  &.promotion
    .hero
      height: 620px
      .cover
        position: relative
        top: -50px
        height: 548px
        background: url('./assets/promotion/banner.png') center no-repeat
      .charge-now
        position: relative
        top: -140px
        text-align: center
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
  components: { page_header, page_footer }
}
</script>