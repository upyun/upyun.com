<style lang="sass" src="./products.sass" scoped></style>
<style lang="sass" scoped>
@import "../../assets/susy"
@import "../../assets/animations"
.section-certificate
  padding: 55px 0 48px
  height: 560px
  background-color: #ffffff
  background: url('./assets/certificate-type-bg.png') center no-repeat
  background-size: cover
  .main-title
    color: #ffffff
  .scenes
    padding: 0px 70px
    margin-top: 70px
    .item
      +gallery(4 of 12 4)
      text-align: center
      height: 320px
      border-radius: 6px
      background-color: #ffffff
      position: relative
      .top
        width: 80px
        height: 80px
        border-radius: 40px
        background-color: #ffffff
        position: absolute
        top: -40px
        left: 50%
        margin-left: -40px
      .top-dv-icon
        border: 4px solid #ff4d64
        &:before
          content: ''
          display: block
          width: 80px
          height: 80px
          background: url('./assets/certificate-icon-type-1.svg')
          background-size: 100% 100%
          position: relative
          left: 1px
      .top-ov-icon
        border: 4px solid #ff6162
        &:before
          content: ''
          display: block
          width: 80px
          height: 80px
          background: url('./assets/certificate-icon-type-2.svg')
          background-size: 100% 100%
          position: relative
          left: -3px
      .top-ev-icon
        border: 4px solid #ffb492
        &:before
          content: ''
          display: block
          width: 80px
          height: 80px
          background: url('./assets/certificate-icon-type-3.svg')
          background-size: 100% 100%
          position: relative
          left: -4px
      &:nth-child(1)
        box-shadow: 0px 0px 6px #ff4d64
      &:nth-child(2)
        box-shadow: 0px 0px 6px #ff6162
      &:nth-child(3)
        box-shadow: 0px 0px 6px #ffb492
      .item-name
        font-size: 20px
        font-weight: bold
        margin-top: 60px
      .star-line
        color: #ff4d64
        span
          font-size: 18px
          font-weight: bold
        .star
          display: inline-block
          width: 20px
          height: 20px
          position: relative
          top: 2px
          background: url('./assets/star.svg') no-repeat
          background-size: 100% 100%
      ul
        list-style: none
        padding: 0
        li
          color: #97a1ab
          font-size: 16px
          margin-top: 10px
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
        up_button(:color="colorSet.mid", type="major", url="/contact") 联系我们
    .icon
      icon
  template(slot="page")
    .section-fetures
      .container
        .main-title 产品特性
        .features
          .item
            img(src="./assets/certificate-icon-3.svg")
            .title 智能判断
            .description 能同时识别色情、广告、暴恐、涉政等不同信息，实时标记。
          .item
            img(src="./assets/certificate-icon-2.svg")
            .title 准确率高
            .description 识别迅速，准确率高，其中色情识别率经市场验证为 99.7%。
          .item
            img(src="./assets/certificate-icon-5.svg")
            .title 结果可视化
            .description 识别结果直接在UCD控制台展示，用户无需二次开发即可处理违规内容，全网唯一。
          .item
            img(src="./assets/certificate-icon-4.svg")
            .title 人工智能
            .description 构建专业深度神经网络，经过大数据分析、双反馈学习等海量训练，并能持续升级。
          .item
            img(src="./assets/certificate-icon-1.svg")
            .title 支持广泛
            .description 同时覆盖图片、直播、视频点播等多类型媒体内容。
          .item
            img(src="./assets/certificate-icon-6.svg")
            .title 接入方便
            .description 开放的 API 接口，支持快速接入，及时获取识别结果。
    .section-hero
      .container
        .main-title 产品特性
        .main-description(style="width: 612px; margin-bottom: 47px")
          span 按分类展示内容、识别结果，支持人工对内容
          br
          span 进行处理。
        img.hero-img(src="./assets/live_architecture.png", width=1017, height=641)
    .section-hero(style="background: #fcfcfc")
      .container
        .main-title 人工智能
        .main-description(style="width: 612px; margin-bottom: 47px")
          span 采用深度神经网络，经过大数据分析、人工样本标记、
          br
          span 双向学习等训练，保证识别准确率。
        img.hero-img(src="./assets/live_architecture.png", width=1017, height=641)
    .section-scenes
      .container
        .main-title 应用场景
        .scenes
          .item
            .img: img(src="./assets/certificate-sence-1.svg")
            .title 直播监控
            .description UCD 服务能同时监控多组直播流，实时标记判断结果，无需投入开发资源即可实现并行监控。
          .item
            .img: img(src="./assets/certificate-sence-2.svg")
            .title 视频点播
            .description UCD 服务能快速处理各种时长的视频，实时截图标记时间点，缩短人工查看时长，大幅度提高准确度。
          .item
            .img: img(src="./assets/certificate-sence-3.svg")
            .title 海量图片
            .description UCD 服务能帮助社交应用、UGC 网站等快速识别每日海量图片，节省成本降低网站安全风险。
    section_pricing(selection="audit", :color="colorSet.mid")
</template>

<script>
import layout from '../../components/layout'
import colors from '../../services/colors'
import section_pricing from './section_pricing'
import section_help from './section_help'
import icon from './hero_icons/certificate_icon'

export default {
  data () {
    return {
      colorSet: colors.collection.red,
      animated: false
    }
  },
  head: {
    title: {
      inner: 'SSL 证书 - 安全、便捷，一站式申购、管理'
    },
    meta: [
      { name: 'keywords', content: 'SSL 证书,Symantec,GeoTrust,TrustAsia,Let’s Encrypt,全站 HTTPS', id: 'kw' },
      { name: 'description', content: '申购、管理一站式服务，快速实现全站 HTTPS。', id: 'desc' }
    ]
  },
  components: { layout, section_help, section_pricing, icon }
}
</script>
