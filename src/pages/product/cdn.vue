<style lang="sass" src="./product.sass" scoped></style>
<style lang="sass" scoped>
  @import "../../assets/susy"
  .section-cdn-map
    background: #fcfcfc
    padding: 54px 0 38px
    border-top: solid 1px #f0f0f0
    .description
      font-size: 20px
      line-height: 26px
      width: 610px
      margin: 0 auto
      text-align: center
    .map
      margin-top: 94px
      height: 492px
      background: url(./assets/map.png) center no-repeat
      background-size: 1014px
      position: relative
      .item
        position: absolute
        padding-left: 22px
        height: 22px
        .dot
          position: absolute
          left: 0
          top: 50%
          margin-top: -7px
    .dot
      display: block
      content: ""
      width: 14px
      height: 14px
      background: #00BCF7
      border-radius: 50%
      &:after
        content: ""
        display: block
        position: absolute
        left: 1px
        top: 1px
        border: 2px solid white
        width: 8px
        height: 8px
        border-radius: 50%
      &.orange
        background-color: #FFA658
      &.grey
        background-color: #6C8E99
      &.purple
        background-color: #955FDC
      &.green
        background-color: #0DBDA1
      &.red
        background-color: #FF6C6E
      &.sky
        background-color: #73B7FD
      &.black
        background-color: black
    .legend
      width: 352px
      margin: 8px auto 0
      @include container()
      .item
        position: relative
        @include gallery(1 of 4)
        margin-top: 8px
        padding-left: 22px
        .dot
          position: absolute
          left: 0
          top: 50%
          margin-top: -7px
</style>

<template lang="pug">
layout(:colors="colorSet")
  .container.hero-inner(slot="hero")
    .info
      .title 云分发 CDN
      .description 又拍云内容分发网络（ UPYUN Content Delivery Network），即又拍云 CDN，通过对用户源站内容进行加速分发，从而提升网站访问速度，适用于网站中的动静态资源。除此之外，又拍云 CDN 可完美结合云存储及云处理提供一站式全网加速解决方案。
      .buttons
        up_button(:color="colorSet.end", type="major") 免费试用
        up_button 查看价格
      .price 加入又拍云联盟，一年内每月可免费使用 10GB 存储空间及 15GB 流量。
        br
        | 加入春雨计划，提供免费一年云服务。
        a 了解详情
    .icon
      img(src="./assets/cdn_large.svg")
  template(slot="page")
    .section-fetures
      .container
        .main-title 产品特性
        .features
          .item
            img(src="./assets/cdn-icon-1.svg")
            .title 完美结合云存储
            .description 完美结合云存储，解决海量数据存储和分发问题。支持将源站数据存储在又拍云存储中，并提供使用流量 1:1 的免费存储空间，使网络内容分发更方便，成本更低。
          .item
            img(src="./assets/cdn-icon-2.svg")
            .title 极致加速体验
            .description 实时探测线路进行优选，针对多源链路进行负载均衡，保障链路的畅通和无缝切换。针对冗余数据进行过滤并对文件压缩，使加速体验一路飙升。
          .item
            img(src="./assets/cdn-icon-3.svg")
            .title 安全稳定
            .description 支持 IP、Referer、User-Agent、Token 等多维度的防盗链方式及 DDoS 攻击防护、CC 攻击防护、防篡改等多种防攻击方式。 全面保护业务的安全稳定。
          .item
            img(src="./assets/cdn-icon-4.svg")
            .title 实时统计监控
            .description 特色的镜像迁移功能，可一键通过 CDN 将源站资源迁移到又拍云存储，另外支持文件拉取、文件压缩解压缩、 FTP 功能，让云存储接入和使用更简单。
          .item
            img(src="./assets/cdn-icon-5.svg")
            .title 简单易用
            .description 提供自由扩展的 RESTFul API 和多种语言的 SDK 包，支持表单/分块/流式/FTP 上传，断点续传，以便用户轻松集成。
          .item
            img(src="./assets/cdn-icon-6.svg")
            .title 丰富的 API
            .description 又拍云将产品功能整合，提供集 CDN、云存储、云处理于一体的场景化解决方案，化繁为简，接入方便。
    .section-hero
      .container
        .main-title 统计监控、日志
        .description 丰富的数据统计分析、方便的日志下载和 7*24 小时
          br
          | 全网实时性能监控，助您时刻掌控业务全局。
        img.hero-img(src="./assets/cdn_hero.png", width=935, height=439)
    .section-cdn-map
      .container
        .main-title CDN节点
        .description 又拍云采用自建优质节点，打造了目前国内覆盖率领先的内容分发网络，让用户随时随地享受匀加速
        .map
          .item(v-for="point in points", :style="{left: point.left, top: point.top}")
            | {{point.content}}
            .dot(:class="point.color")
        .legend
          .item 移动
            .dot.blue
          .item 电信
            .dot.orange
          .item 华数
            .dot.grey
          .item 教育网
            .dot.purple
          .item 联通
            .dot.green
          .item 长宽
            .dot.red
          .item 铁通
            .dot.sky
          .item 海外
            .dot.black
    .section-scenes
      .container
        .main-title 应用场景
        .scenes
          .item
            .img
              img(src="./assets/cdn-sence-1.svg")
            .title 网页/APP
            .description 通过 CDN 可针对网页/APP 中的大量动静态文件 HTML、CSS、JS、音视频文件等进行加速分发。
          .item
            .img
              img(src="./assets/cdn-sence-2.svg")
            .title 大文件下载
            .description 支持各类大文件如各类音视频、应用安装包的下载分发，支持分段缓存，提升回源热度，节省回源带宽。
          .item
            .img
              img(src="./assets/cdn-sence-3.svg")
            .title 视频点播加速
            .description 针对视频点播业务需求，又拍云支持视频拖拉、分段缓存，转封装和 HLS 切片，支持多平台、多终端。
    .section-help
      .container
        .main-title 帮助与文档
        .menus
          .menu
            .title 产品介绍
            a 整体架构
            a 基础配置
            a 高级特性
          .menu
            .title 新手指南
            a 基本概念
            a API 简易指南
          .menu
            .title 开发者文档
            a API 文档
            a CDN 文档
            a SDK 及工具
          .menu
            .title 常见问题
            a 概念性 FAQ
            a 技术性 FAQ
        .try
          up_button(:color="colorSet.mid") 免费试用
</template>

<script>
import layout from '../../components/layout'
import colors from '../../services/colors'

export default {
  data () {
    return {
      colorSet: colors.collection.green,
      points: [
        { left: '849px', top: '224px', color: 'green' },
        { left: '879px', top: '224px', color: 'red' },
        { left: '850px', top: '191px', color: 'sky' },
        { left: '870px', top: '240px', color: 'purple' },
        { left: '890px', top: '200px', color: 'grey' },
        { left: '870px', top: '200px', color: 'orange' },
        { left: '266px', top: '190px', content: '美国', color: 'black' },
        { left: '576px', top: '160px', content: '德国', color: 'black' },
        { left: '856px', top: '300px', content: '新加坡', color: 'black' },
        { left: '876px', top: '254px', content: '香港', color: 'black' },
        { left: '895px', top: '238px', content: '台湾', color: 'black' }
      ]
    }
  },
  mounted () {
  },
  components: { layout }
}
</script>
