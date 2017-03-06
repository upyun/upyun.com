<style lang="sass" scoped>
.layout
  .hero
    height: 80px
    position: relative
    background-image: linear-gradient(312deg, #2fbbfb 0%, #1e96e5 100%)
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