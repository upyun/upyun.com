<style lang="sass" src="./solution.sass" scoped></style>
<style lang="sass" scoped>
  .section-hero
    background: white
    padding: 56px 0 63px
    text-align: center
    border-top: solid 1px #f0f0f0
    .main-description
      margin-bottom: 20px
      color: #97a1ab
</style>

<template lang="pug">
layout(:colors="colorSet")
  .container.hero-inner(slot="hero")
    .info
      .title 融合云存储解决方案
      .description 很多用户在平台选型时，往往会将数据存储在多家存储厂商以保证服务可用性，然而仅靠用户单方面调整技术架构，依然很难满足此类需求。基于此，又拍云推出了融合云存储解决方案。
      .buttons
        up_button(:color="colorSet.end", type="major") 联系我们
    .icon
      img(src="./assets/fusion_large.svg")
  template(slot="page")
    .section-solutions
      .container
        .solutions
          .item
            .img: img(src="./assets/fusion-icon-1.svg")
            .title 构建多源存储架构
            .description 通过该方案，您可以很方便地构建存储架构，以又拍云存储服务作为主存储， 主动将增量文件同步到第三方存储厂商实现存储平台的融合。
          .item
            .img: img(src="./assets/fusion-icon-2.svg")
            .title 将数据平滑迁移至又拍云
            .description 通过镜像存储功能，将第三方源站的资源（文件/图片等）快速迁移至又拍云存储，迁移过程平滑、对终端用户无感知。
          .item
            .img: img(src="./assets/fusion-icon-3.svg")
            .title 支持回第三方云存储源
            .description 支持启用第三方存储源（CDN 服务优先回又拍云存储源，其次回第三方存储源）保证您服务的高可用。
    .section-hero
      .main-title 融合云存储架构
      .main-description 待又拍云存储恢复后，同步该期间回第三方存储拉取的文件到又拍云存储
      img(src="./assets/architecture.png", width="882", height="522")
    up_gradient.section-features-h(:colors="colorSet")
      .container
        .main-title 方案优势
        .features
          .item
            .img: img(src="./assets/fusion-feature-1.svg")
            .title 数据更安全
            .description 又拍云融合云存储方案是建立在客户搭建 APP 或者网站技术架构时同时使用两套不同存储厂商的存储架构的基础之上。
          .item
            .img: img(src="./assets/fusion-feature-2.svg")
            .title 服务高可用
            .description 一旦出现客户业务中断、文件不存在等情况，CDN 服务会零时延的切换到第三方存储厂商的回源地址获取文件，保障了服务的高可用。
          .item
            .img: img(src="./assets/fusion-feature-3.svg")
            .title 功能免费开放
            .description 公测阶段，针对已经使用存储加速服务的客户完全免费开放使用融合云存储服务期间所产生的文件同步出口带宽流量和资源消耗。
    .section-clients
      .container
        .main-title 他们都在使用又拍云
        .main-description 加速的不仅仅是网络，而是整个时代，而同样的时代，演绎着不同的故事...
      .clients
        .item
        .item
        .item
        .item
        .item
        .item
        .item
        .item
    more(:color="colorSet.mid")
</template>

<script>
import layout from '../../components/layout'
import colors from '../../services/colors'
import more from './more'

export default {
  data () {
    return {
      colorSet: colors.collection.green
    }
  },
  mounted () {
  },
  components: { layout, more }
}
</script>
