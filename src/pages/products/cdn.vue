<style lang="sass" src="./products.sass" scoped></style>
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
      +container()
      .item
        position: relative
        +gallery(1 of 4)
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
      .description CDN ( Content Delivery Network )，也即内容分发网络。通过将网站内容分发至全网加速节点，配合精准智能调度系统和边缘缓存，使最终用户可以就近获取所需内容，有效解决互联网网络拥塞问题，提高终端用户访问网站的响应速度和可用性，与此同时，可大幅降低源站压力。
      .buttons
        up_button(:color="colorSet.end", type="major", :url="$links.console", target="_blank") 免费试用
        up_button(url="#section-pricing") 查看价格
      .price 加入又拍云联盟，一年内每月可免费使用 10GB 存储空间及 15GB 流量。
        br
        | 加入春雨计划，提供免费一年云服务。
        router-link(to="/chunyu") 了解详情
    .icon
      icon
  template(slot="page")
    .section-fetures
      .container
        .main-title 产品特性
        .features
          .item
            img(src="./assets/cdn-icon-1.svg")
            .title 智能调度
            .description 支持多样化的调度策略，可实现跨地区、跨运营商的调度以及基于内容、IP 的精准调度，结合全网实时监控系统以及带宽预测平台，可将用户请求精准调度至最优接入节点；支持 HttpDNS 调度，可有效防止 DNS 劫持。
          .item
            img(src="./assets/cdn-icon-2.svg")
            .title 极致加速
            .description 节点资源覆盖移动、联通、电信及十几家中小运营商，实现本地化资源覆盖；实时探测网络链路，针对多源链路进行负载均衡，保障链路的畅通和无缝切换；通过协议优化、链路优化、内容优化等技术手段，使加速体验一路飙升。
          .item
            img(src="./assets/cdn-icon-3.svg")
            .title 全面防护
            .description 支持全网 HTTPS 加密传输，保障数据安全；企业级 DDOS 防护、CC 防护，能够有效抵御 DDOS 攻击、CC 攻击，为您的业务保驾护航；多样化的访问控制策略，可防止网站内容被恶意引用和非法下载。
          .item
            img(src="./assets/cdn-icon-4.svg")
            .title 大数据分析
            .description 支持全链路实时日志采集、分析，结合分析数据，可对网络链路进行实时调整和优化，协助客户业务分析及运营；通过实时计算缓存命中率、健康度等监测数据，可以直观的了解到 CDN 服务质量，方便发现和定位问题。
          .item
            img(src="./assets/cdn-icon-5.svg")
            .title 简单易用
            .description 源站业务无需任何改动，可无缝接入 CDN 服务；全自助化配置管理，配置策略全网 5-10 分钟内生效；提供全方位的 API 接口，支持多样化管理；丰富的统计报表和分析数据，协助网站运营。
          .item
            img(src="./assets/cdn-icon-6.svg")
            .title 可编程 CDN
            .description 基于 DSL ( Domain Specific Language )  理念设计的自定义 rewrite 功能，充分利用 CDN 分布式边缘网络的性能及规模，可以实现对 URL 的改写、重定向、自定义 HTTP 头、请求禁止、限速等处理逻辑。
    .section-hero
      .container
        .main-title 统计监控、日志
        .description 丰富的统计分析数据、定制化日志服务、 7*24 小时
          br
          | 全网实时性能监控，助您时刻掌控业务全局。
        img.hero-img(src="./assets/cdn_hero.png", width=935, height=439)
    .section-cdn-map
      .container
        .main-title CDN 节点
        .description 又拍云采用自建优质节点，打造了目前国内覆盖率领先的内容分发网络，让用户随时随地享受云加速
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
            .title 网页图片加速
            .description 致力于解决国内复杂多变网络环境下网站静态内容诸如 HTML、CSS、JS、JPG 等小文件内容访问速度缓慢、访问可用性不高的普遍问题。
          .item
            .img
              img(src="./assets/cdn-sence-2.svg")
            .title 大文件下载加速
            .description 针对网络游戏、软件下载类网站及应用等大文件分发提供了一站式分发加速解决方案，可完美解决大文件带宽突发带来的一系列问题。
          .item
            .img
              img(src="./assets/cdn-sence-3.svg")
            .title 视频点播加速
            .description 针对流媒体点播、音视频网站及应用，可帮助在线视频网站等以流媒体为主的企业提供稳定、高质量、低价的视频分发服务。
    section_pricing(selection="cdn", :color="colorSet.mid")
    section_help(selection="cdn", :color="colorSet.mid")
</template>

<script>
import layout from '../../components/layout'
import colors from '../../services/colors'
import section_help from './section_help'
import section_pricing from './section_pricing'
import icon from './hero_icons/cdn_icon'

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
  head: {
    title: {
      inner: '云分发 - 快速稳定内容分发网络CDN'
    },
    meta: [
      { name: 'keywords', content: 'CDN,内容分发网络,云分发,网站加速', id: 'kw' },
      { name: 'description', content: '又拍云云分发服务， 基于大规模CDN分发集群，让你的网站和APP，音视频，图片等内容随时随地瞬间加载完成，提供实时的CDN性能监测与数据分析功能。', id: 'desc' }
    ]
  },
  components: { layout, section_help, section_pricing, icon }
}
</script>
