<style lang="sass" src="./solution.sass" scoped></style>

<template lang="pug">
layout(:colors="colorSet")
  .container.hero-inner(slot="hero")
    .info
      .title 在线教育解决方案
      .description 学习不只在课堂。 一方面网络让传播的渠道增多、让分享的成本下降, 另一方面人们的时间也在碎片化, 一杯咖啡、一趟地铁、一小段路的时间就能听别人为你翻一本书、讲一个故事、认识一个新世界。
      .buttons
        up_button(:color="colorSet.end", type="major") 联系我们
    .icon
      img(src="./assets/education_large.svg")
  template(slot="page")
    .section-solutions
      .container
        .solutions
          .item
            .img: img(src="./assets/education-icon-1.svg")
            .title 直播课堂
            .description 针对在线教育一对多的教学场景，支持通过RTMP、HLS、HTTP-FLV 多协议直播输出，帮助多终端保持最优体验。
          .item
            .img: img(src="./assets/education-icon-2.svg")
            .title 支持直播录制、回看
            .description 可将直播录制成用户需要的视频格式，可作为课程回看或录播课程，同时可以选择将录制的内容上传到云存储。
          .item
            .img: img(src="./assets/education-icon-3.svg")
            .title 内容版权保护
            .description 在线教育直播/录播课程内容经常被盗用，又拍云支持 IP 、回源鉴权、User-Agent 防盗链等多重防盗链。
    .section-features
      .container
        .main-title 我们的优势
        .main-description 又拍云自主研发的全网加速解决方案，全站加速较传统 CDN 更快 10%
        .item
          .left
            img(src="./assets/education-feature-1.svg")
          .right
            .title 极致加速体验
            .description CDN 覆盖各大运营商，通过线路探测，多源链路负载均衡，冗余数据过滤、文件压缩，使加速体验一路飙升。
        .item
          .left
            .title 海量存储
            .description 又拍云存储单存储集群支持 PB 级容量，单数据中心支持 EB 级容量，全网轻松应对 ZB 级的异构化数据。
          .right
            img(src="./assets/education-feature-2.svg")
        .item
          .left
            img(src="./assets/education-feature-3.svg")
          .right
            .title 实时统计监控
            .description 丰富的数据统计分析、方便的日志下载和 7*24 小时全网实时性能监控，时刻掌控业务全局。
    .section-clients
      .container
        .main-title 他们都在使用又拍云
        .main-description 加速的不仅仅是网络，而是整个时代，而同样的时代，演绎着不同的故事...
      .clients
        .item: img(src="/static/logos/gaodunjiaoyu-grey.png")
        .item: img(src="/static/logos/yingyuqupeiyin-grey.png")
        .item: img(src="/static/logos/edusoho-grey.png")
        .item: img(src="/static/logos/yunxuetang-grey.png")
        .item: img(src="/static/logos/shidaiguanghua-grey.png")
        .item: img(src="/static/logos/51cto-grey.png")
        .item: img(src="/static/logos/yingfujiaoyu-grey.png")
        .item: img(src="/static/logos/hujiangyingyu-grey.png")
    more(:color="colorSet.mid")
</template>

<script>
import layout from '../../components/layout'
import colors from '../../services/colors'
import more from './more'

export default {
  data () {
    return {
      colorSet: colors.collection.orange
    }
  },
  mounted () {
  },
  components: { layout, more }
}
</script>
