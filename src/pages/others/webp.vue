<style lang="sass" src="./webp.sass" scoped></style>

<template lang="pug">
layout
  div(slot="hero")
    //- .cover
  div(slot="page")
    section.section-one
      h1.title WebP 是图片格式的发展趋势
      p.description-main 又拍云让您的图片大小减少 70%!
      p.description-sub 网页、APP 图片加载缓慢？图片太多，流量太大？
      p.description-sub 这是使用 WebP 格式对图片的影响演示
      form(id="uploadForm" action="https://v0.api.upyun.com/uprocess" method="POST" enctype="multipart/form-data")
        input(name="file" type="file" id="select-file")
        a(id="button-upload") 上传体验
    section.section-two
      .animate-format
        .animated-gif
          .picture
            span
              img(src="./assets/webp/loading.gif" id="img-animated-gif")
            .tag 动态 GIF
            #cover-gif
              img(src="./assets/webp/loading.gif")
              span 图片加载中
          .text
            span.picture-size 图片大小：
              span.picture-size-value 获取中
            span.picture-ratio 图片尺寸：
              span.picture-ratio-value 获取中
        .transfer-arrow
        .to-animated-webp
          .picture
            span
              img(src="./assets/webp/loading.gif" id="img-to-animated-webp")
            .tag 动态 WebP
            #cover-webp
              img(src="./assets/webp/loading.gif")
              span 正在转成 WebP
          .text
            span.picture-size 图片大小：
              span.picture-size-value 获取中
              span.save-size 0%
            span.picture-ratio 图片尺寸：
              span.picture-ratio-value 获取中
      .normal-format
        .gif
          .picture
            span
              img(src="./assets/webp/loading.gif" id="img-gif")
            .tag GIF
          .text
            span.picture-size 图片大小：
              span.picture-size-value 获取中
            span.picture-ratio 图片尺寸：
              span.picture-ratio-value 获取中
        .gif-to-webp
          .picture
            span
              img(src="./assets/webp/loading.gif" id="img-gif-to-webp")
            .tag WebP
          .text
            span.picture-size 图片大小：
              span.picture-size-value 获取中
              span.save-size 0%
            span.picture-ratio 图片尺寸：
              span.picture-ratio-value 获取中
        .png
          .picture
            span
              img(src="./assets/webp/loading.gif" id="img-png")
            .tag PNG
          .text
            span.picture-size 图片大小：
              span.picture-size-value 获取中
            span.picture-ratio 图片尺寸：
              span.picture-ratio-value 获取中
        .png-to-webp
          .picture
            span
              img(src="./assets/webp/loading.gif" id="img-png-to-webp")
            .tag WebP
          .text
            span.picture-size 图片大小：
              span.picture-size-value 获取中
              span.save-size 0%
            span.picture-ratio 图片尺寸：
              span.picture-ratio-value 获取中
        .jpg
          .picture
            span
              img(src="./assets/webp/loading.gif" id="img-jpg")
            .tag JPG
          .text
            span.picture-size 图片大小：
              span.picture-size-value 获取中
            span.picture-ratio 图片尺寸：
              span.picture-ratio-value 获取中
        .jpg-to-webp
          .picture
            span
              img(src="./assets/webp/loading.gif" id="img-jpg-to-webp")
            .tag WebP
          .text
            span.picture-size 图片大小：
              span.picture-size-value 获取中
              span.save-size 0%
            span.picture-ratio 图片尺寸：
              span.picture-ratio-value 获取中
    footer
      .box
        span.change 换一批
        span.goto 前往查看又拍云
          a(href='http://docs.upyun.com/cloud/image/#_2' target='_blank') WebP 开发文档
</template>

<script>
import layout from './layout'
import webpInit from './webp.js'

export default {
  data () {
    return {
    }
  },
  components: { layout },
  mounted () {
    webpInit()
  },
  head: {
    title: {
      inner: 'WebP - 图片格式的发展趋势',
    },
    meta: [
      { name: 'keywords', content: 'WebP，动态 WebP，图片瘦身，图片格式转换' },
      { name: 'description', content: '网页、APP 图片加载缓慢？图片太多，流量太大？WebP（动态 WebP），在同等质量下，让您的图片大小平均减少 70%' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'renderer', content: 'webkit' }
    ]
  }
}
</script>

