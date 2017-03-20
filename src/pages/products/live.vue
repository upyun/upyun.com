<style lang="sass" src="./products.sass" scoped></style>
<style lang="sass" scoped>
  @import "../../assets/susy"
  .section-fetures
    .main-description
      width: 618px
    .features
      .item
        +gallery(3)
        margin-bottom: 0
  .section-2-parts
    .inner
      background: none
      overflow: hidden
      .left
        padding-left: 82px
        .icons
          margin-top: 54px
          img
            margin-right: 40px
      .right
        height: 530px
        background: url(./assets/live-img-large.png) center no-repeat
        background-size: 664px
        margin-right: -80px
  .section-scenes
    .scenes
      .item
        margin-bottom: gutter()
  .section-develop
    background: #fcfcfc
    padding: 56px 0 70px
    text-align: center
    .main-description
      width: 570px
    .up_button
      display: block
      margin: 52px auto 73px
      width: 194px
    .list
      text-align: left
      width: 1022px
      font-size: 20px
      margin-top: 60px
      +container
      .col
        +gallery(3)
</style>

<template lang="pug">
layout(:colors="colorSet")
  .container.hero-inner(slot="hero")
    .info
      .title 直播 UPLive
      .description 又拍云直播（UPLive）是基于又拍云内容分发网络为直播应用提供超低延迟、高码率、高并发的整套从推流端到播放端的一站式解决方案。包括实时转码，实时录制，分发加速，水印，截图，秒级禁播，延时直播等功能。
      .buttons
        up_button(:color="colorSet.end", type="major", :url="$links.console", target="_blank") 免费试用
        up_button(url="#section-pricing") 查看价格
    .icon
      icon
  template(slot="page")
    .section-fetures
      .container
        .main-title 产品特性
        .main-description 又拍云流媒体直播产品旨在提供更稳定、更实时、功能更完善的流媒体直播解决方案，为直播用户提供更好的视觉享受与互动效果
        .features
          .item
            img(src="./assets/live-icon-1.svg")
            .title 推流
            .description 可通过 FMLE 、OBS 等第三方软件，或使用又拍云推流 SDK 自主开发推流软件进行推流。
          .item
            img(src="./assets/live-icon-2.svg")
            .title 转码
            .description 可将用户推流的原始码率转实时换成需要的不同低码率文件，供不同用户端播放。
          .item
            img(src="./assets/live-icon-3.svg")
            .title 录制
            .description 可将推流内容，根据自定义时间分段录制成用户需要的格式，作为回看或点播资源。
          .item
            img(src="./assets/live-icon-4.svg")
            .title 视频截图
            .description 支持实时对直播流进行画面截取，可用于内容审核、直播间封面缩略图。
          .item
            img(src="./assets/live-icon-5.svg")
            .title 视频水印
            .description 可对直播，可对直播视频加水印，实现对内容版权以及品牌形象进行保护。
          .item
            img(src="./assets/live-icon-6.svg")
            .title 延播
            .description 可使直播流延迟一定时间，再对外进行播放，方便内容审查和某些特定业务需求。
          .item
            img(src="./assets/live-icon-7.svg")
            .title 秒级禁播
            .description 支持秒级中止直播，用于对非法直播内容进行实时禁播。
          .item
            img(src="./assets/live-icon-8.svg")
            .title 美颜滤镜
            .description 推流 SDK 集成美颜滤镜功能，支持多种滤镜，可自定义。
    .section-hero
      .container
        .main-title 又拍云直播架构
        .main-description(style="width: 612px; margin-bottom: 47px") 直播源站支持自主源站或又拍云源，为支持用户在不同终端播放，
          br
          | 支持 RTMP、HLS、HTTP-flv 播放输出，通过又拍云 CDN 网络分发在全国各地终端。
        img.hero-img(src="./assets/live_architecture.png", width=1017, height=641)
    up_gradient.section-2-parts(:colors="colorSet")
      .inner
        .container
          .left
            .main-title 延迟测试
            .description 互动直播类场景对实时性要求较高，又拍云通过智能调度、链路保障、追帧处理、丢帧处理以及业界首创的 HLS+ 技术，将延迟控制在 4s 以内
            .icons
              img(src="./assets/live-img-1.svg")
              img(src="./assets/live-img-2.svg")
              img(src="./assets/live-img-3.svg")
          .right
    .section-develop
      .container
        .main-title 简化开发 提供跨平台 SDK
        .main-description 提供功能丰富的跨平台推流端、播放端 SDK 工具包，帮助您无缝对接原有业务、降低开发成本、缩短上线周期
        up_button(:color="colorSet.mid", url="http://docs.upyun.com/download/#live-sdk", target="_blank") 查看 SDK 文档
        img(src="./assets/live-develop.png", width="875", height="154")
        .list
          .col
            .item 自由配置音视频采集
            .item H.264、AAC 编码
            .item 支持前后摄像头
            .item 自动对焦
            .item 手动调整对焦点
            .item 闪光灯操作
          .col
            .item 多分辨率编码
            .item 弱网丢帧策略
            .item 后台音频推流
            .item 水印功能
            .item 美颜功能
            .item 带安全验证的推流地址
          .col
            .item 单音频播放
            .item 一屏多画
            .item 首屏秒开
            .item 延迟消除技术
            .item 音画同步调整
            .item RTMP/HLS/HTTP-FLV
            .item 播放
          .col
            .item 点播支持
            .item SEEK 功能
            .item 视频缓冲、缓冲进度
            .item 预连接，后播放功能
            .item 亮度及音量调整
            .item 静音播放
    .section-scenes
      .container
        .main-title 应用场景
        .scenes
          .item
            .img
              img(src="./assets/live-sence-1.svg")
            .title 互动直播
          .item
            .img
              img(src="./assets/live-sence-2.svg")
            .title 演唱会直播
          .item
            .img
              img(src="./assets/live-sence-3.svg")
            .title 游戏直播
          .item
            .img
              img(src="./assets/live-sence-4.svg")
            .title 网络电视直播
          .item
            .img
              img(src="./assets/live-sence-5.svg")
            .title 网络电视直播
          .item
            .img
              img(src="./assets/live-sence-6.svg")
            .title VR 直播
    section_pricing(selection="live", :color="colorSet.mid")
    section_help(selection="live", :color="colorSet.mid")
</template>

<script>
import layout from '../../components/layout'
import colors from '../../services/colors'
import section_help from './section_help'
import section_pricing from './section_pricing'
import icon from './hero_icons/live_icon'

export default {
  data () {
    return {
      colorSet: colors.collection.yellow
    }
  },
  head: {
    title: {
      inner: '直播云 - 一站式视频直播加速'
    },
    meta: [
      { name: 'keywords', content: '直播云,视频直播,直播加速,流媒体直播', id: 'kw' },
      { name: 'description', content: '又拍云直播（UPLive）是基于又拍云内容分发网络为直播应用提供超低延迟、高码率、高并发的整套从推流端到播放端的一站式解决方案。包括实时转码，实时录制，分发加速，水印，截图，秒级禁播，延时直播等功能。', id: 'desc' }
    ]
  },
  components: { layout, section_help, section_pricing, icon }
}
</script>
