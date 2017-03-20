<style lang="sass" src="./layout.sass" scoped></style>
<template lang="pug">
.layout
  .hero(:style="{ 'background-image': 'linear-gradient(312deg, ' + oldColors.start + ' 0%, ' + oldColors.end + ' 100%)', height: `${heroHeight}px`, overflow: heroOverflow }")
    .cover(:style="{ 'background-image': 'linear-gradient(312deg, ' + newColors.start + ' 0%, ' + newColors.end + ' 100%)', 'opacity': coverOpacity }")
    page_header
    slot(name="hero")
  slot(name="page")
  page_footer
</template>

<script>
import page_header from './page_header'
import page_footer from './page_footer'

export default {
  data () {
    return {
      oldColors: {},
      newColors: {},
      coverOpacity: 0
    }
  },
  props: {
    colors: {},
    heroHeight: {
      default: 620
    },
    heroOverflow: ''
  },
  methods: {
    switch (from, to) {
      this.oldColors = from
      this.newColors = to
      setTimeout(() => {
        this.coverOpacity = 1
      }, 10)
    }
  },
  mounted () {
    var newColors = this.colors
    var oldColors = JSON.parse(window.sessionStorage.getItem('up_colors')) || newColors
    this.switch(oldColors, newColors)
    window.sessionStorage.setItem('up_colors', JSON.stringify(newColors))
  },
  head: {
    title: {
      inner: '又拍云 - 加速在线业务'
    },
    meta: [
      { name: 'keywords', content: 'CDN,云加速,视频加速,音频加速,全站加速,文件加速,智能CDN,云服务,CDN加速,音视频处理,云存储', id: 'kw' },
      { name: 'description', content: '又拍云 是国内领先的CDN服务提供商，国家工信部认证通过的“可信云”，乌云众测平台认证的“安全云”，为移动时代的创业者提供新一代的CDN加速服务。', id: 'desc' }
    ]
  },
  components: { page_header, page_footer }
}
</script>
