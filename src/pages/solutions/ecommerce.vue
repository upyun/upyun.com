<style lang="sass" src="./solutions.sass" scoped></style>

<template lang="pug">
layout(:colors="colorSet")
  .container.hero-inner(slot="hero")
    .info
      .title 电商 & O2O 解决方案
      .description 电子商务开启了“运筹于指掌之中”的时代，网络购物已深入大众，成为生活的一部分。在保证终端消费者能随时随地方便购物的同时，也给各大电子商务网站的安全性、可靠性、流畅性提出了更高的要求。
      .buttons
        router-link(to="/contact", class="up_button major", :style="{ color: colorSet.end }") 联系我们
    .icon
      icon
  template(slot="page")
    .section-solutions
      .container
        .solutions
          .item
            .img: img(src="./assets/e-commerce-icon-1.svg")
            .title 全网访问加速
            .description 全网内容动静分离，将资源存储在又拍云存储并搭配 CDN ，轻松搞定突发流量，大幅提升访问速度。
          .item
            .img: img(src="./assets/e-commerce-icon-2.svg")
            .title 高效的音视频、图片处理
            .description 依托超大规模的处理集群，提供图片缩略图、水印、裁剪、格式转换、音视频转码等全方位处理服务。
          .item
            .img: img(src="./assets/e-commerce-icon-3.svg")
            .title 从容应对秒杀活动
            .description TB 级的带宽资源预留，应对未知超额访问，并能在活动前对缓存内容进行主动预热，从容应对访问高峰。
    .section-features
      .container
        .main-title 我们的优势
        .main-description 又拍云自主研发的全网加速解决方案，全站加速较传统 CDN 更快 10%
        .item
          .left
            img(src="./assets/e-commerce-feature-1.svg")
          .right
            .title 更高覆盖率
            .description 又拍云 CDN 网络覆盖各大运营商，更有丰富海外节点，解决链路互通难题。
        .item
          .left
            .title 充足带宽，弹性计费
            .description 全网常备 T 级带宽、按实际使用量弹性计费，让企业合理花费每一分钱
          .right
            img(src="./assets/e-commerce-feature-2.svg")
        .item
          .left
            img(src="./assets/e-commerce-feature-3.svg")
          .right
            .title 实时统计监控
            .description 丰富的数据统计分析、方便的日志下载和 7*24 小时全网实时性能监控，时刻掌控业务全局。
    .section-clients
      .container
        .main-title 他们都在使用又拍云
        .main-description 加速的不仅仅是网络，而是整个时代，而同样的时代，演绎着不同的故事...
      .clients
        .item: img(src="/static/logos/mogujie-grey.png")
        .item: img(src="/static/logos/dangdang-grey.png")
        .item: img(src="/static/logos/meituan-grey.png")
        .item: img(src="/static/logos/beibei-grey.png")
        .item: img(src="/static/logos/smzdm-grey.png")
        .item: img(src="/static/logos/dxy-grey.png")
        .item: img(src="/static/logos/youzan-grey.png")
        .item: img(src="/static/logos/tongcheng-grey.png")
    more(:color="colorSet.mid")
</template>

<script>
import layout from '../../components/layout'
import colors from '../../services/colors'
import more from './more'
import icon from './hero_icons/e-commerce_icon'

export default {
  data () {
    return {
      colorSet: colors.collection.purple
    }
  },
  head: {
    title: { inner: '电商&O2O行业解决方案' },
    meta: [
      { name: 'keywords', content: '电商云、电商解决方案、内容防护、图片防盗、电商直播、弹性扩容、又拍云、电商托管', id: 'kw' },
      { name: 'description', content: '又拍电商云TB级带宽预留，全网CDN加速，让你轻松应对大型促销活动等访问高峰。并提供电商直播、20余种音视频、图片处理功能，帮助电商企业产品和运营快速迭代。', id: 'desc' }
    ]
  },
  components: { layout, more, icon }
}
</script>
