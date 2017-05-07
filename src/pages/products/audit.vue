<style lang="sass" src="./products.sass" scoped></style>
<style lang="sass" scoped>
@import "../../assets/susy"
@import "../../assets/animations"
.section-scenes
  padding-bottom: 30px
  .scenes .item
    margin-bottom: 40px
</style>

<template lang="pug">
layout(:colors="colorSet")
  .container.hero-inner(slot="hero")
    .info
      .title 内容识别服务 UCD
      .description 又拍云内容识别服务（UPYUN Content Detection，简称 UCD）通过人工智能、大数据分析提供专业信息安全解决方案，能实时处理多媒体内容（图片、视频、直播等），识别色情、广告、暴恐等信息，为企业大幅度节省安全成本，提高安全处理效率。
      .buttons
        up_button(:color="colorSet.mid", type="major", url="https://console.upyun.com/toolbox/audit/" target="_blank") 免费试用
        up_button(url="/contact" target="_blank") 联系我们
      p.price 识别率高，色情识别率可达 99.7%
    .icon
      icon
  template(slot="page")
    .section-fetures
      .container
        .main-title 产品特性
        .features
          .item
            img(src="./assets/audit-icon-1.svg")
            .title 智能判断
            .description 能同时识别色情、广告、暴恐、涉政等不同信息，实时标记。
          .item
            img(src="./assets/audit-icon-2.svg")
            .title 准确率高
            .description 识别迅速，准确率高，其中色情识别率经市场验证为 99.7%。
          .item
            img(src="./assets/audit-icon-3.svg")
            .title 结果可视化
            .description 识别结果直接在UCD控制台展示，用户无需二次开发即可处理违规内容，全网唯一。
          .item
            img(src="./assets/audit-icon-4.svg")
            .title 人工智能
            .description 构建专业深度神经网络，经过大数据分析、双反馈学习等海量训练，并能持续升级。
          .item
            img(src="./assets/audit-icon-5.svg")
            .title 支持广泛
            .description 同时覆盖图片、直播、视频点播等多类型媒体内容。
          .item
            img(src="./assets/audit-icon-6.svg")
            .title 接入方便
            .description 开放的 API 接口，支持快速接入，及时获取识别结果。
    .section-hero
      .container
        .main-title 图形化控制台
        .main-description(style="width: 612px; margin-bottom: 47px")
          span 按分类展示内容、识别结果，支持人工对内容
          br
          span 进行处理。
        img.hero-img(src="./assets/graphical-console.svg", width=1017, height=641)
    .section-hero(style="background: #fcfcfc")
      .container
        .main-title 人工智能
        .main-description(style="width: 612px; margin-bottom: 47px")
          span 采用深度神经网络，经过大数据分析、人工样本标记、
          br
          span 双向学习等训练，保证识别准确率。
        img.hero-img(src="./assets/artificial-intelligence.svg", width=1170)
    .section-scenes
      .container
        .main-title 应用场景
        .scenes
          .item
            .img: img(src="./assets/audit-sence-1.svg", width=111, height=80)
            .title 直播监控
            .description UCD 服务能同时监控多组直播流，实时标记判断结果，无需投入开发资源即可实现并行监控。
          .item
            .img: img(src="./assets/audit-sence-2.svg", width=111, height=80)
            .title 视频点播
            .description UCD 服务能快速处理各种时长的视频，实时截图标记时间点，缩短人工查看时长，大幅度提高准确度。
          .item
            .img: img(src="./assets/audit-sence-3.svg", width=111, height=80)
            .title 海量图片
            .description UCD 服务能帮助社交应用、UGC 网站等快速识别每日海量图片，节省成本降低网站安全风险。
    section_pricing(selection="audit", :color="colorSet.mid")
</template>

<script>
import layout from '../../components/layout'
import colors from '../../services/colors'
import section_pricing from './section_pricing'
import section_help from './section_help'
import icon from './hero_icons/audit_icon'

export default {
  data () {
    return {
      colorSet: colors.collection.bluePurple,
      animated: false
    }
  },
  head: {
    title: {
      inner: '内容识别服务_基于人工智能的图片识别|短视频识别|直播识别云服务'
    },
    meta: [
      { name: 'keywords', content: '鉴黄，内容识别，内容检测，图片鉴黄，直播鉴黄，人工智能，色情识别，广告识别，可视化控制台', id: 'kw' },
      { name: 'description', content: '又拍云内容识别服务是基于人工智能、大数据分析而研发的新型信息安全解决方案，支持实时处理多媒体内容（图片、视频、直播等），色情、广告、暴恐等信息识别率高达99.7%。', id: 'desc' }
    ]
  },
  components: { layout, section_help, section_pricing, icon }
}
</script>
