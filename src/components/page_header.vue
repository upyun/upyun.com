<style lang="sass" src="./page_header.sass"></style>
<template lang="pug">
#page_header
  .container.clearfix
    router-link.logo(to="/")
      img(src="../assets/logo.svg")
    .navs
      .nav(@mouseover="showMenu(0)", @mouseout="hideMenu") 产品
      .nav(@mouseover="showMenu(1)", @mouseout="hideMenu") 解决方案
      router-link.nav(to="/pricing") 价格
      .nav(@mouseover="showMenu(2)", @mouseout="hideMenu") 帮助与文档
      .nav(@mouseover="showMenu(3)", @mouseout="hideMenu") 媒体与活动
    .side-navs
      a.nav(:href="$links.register") 注册
      a.nav.console(:href="$links.login") 控制台
    .menu(:class="{active: menuActive}", @mouseover="showMenu()", @mouseout="hideMenu", v-show="menuShowing", :style="{left: `${menuCondition.left}px`}")
      .triangle
      .inner(:style="{width: `${menuCondition.width}px`, height: `${menuCondition.height}px`}")
        .list-with-icon(v-show="menuCondition.contentNumber === 0")
          router-link.item(to="/product/cdn")
            .title.green CDN
            .description 跨地区、跨运营商覆盖的内容分发网络
            .icon.cdn
          router-link.item(to="/product/live")
            .title.yellow 直播云
            .description 超低延迟、高码率和大并发的音视频直播服务
            .icon.live
          router-link.item(to="/product/uss")
            .title.orange 云存储
            .description 海量、安全和高可靠的云存储服务
            .icon.uss
          router-link.item(to="/product/vod")
            .title.blue 点播云
            .description 安全稳定、弹性和高可用的音视频点播服务
            .icon.vod
          router-link.item(to="/product/ups")
            .title.purple 云处理
            .description 简单、灵活并支持多终端的云处理服务
            .icon.ups
          router-link.item(to="/product/marketing")
            .title.darkBlue 流量营销服务
            .description 三网通用、超低成本并可快速开展的营销服务
            .icon.marketing
        .list-with-icon(v-show="menuCondition.contentNumber === 1")
          router-link.item(to="/solution/av")
            .title.green 音视频
            .description 海量存储、加速分发、高效处理一站式解决
            .icon.av
          router-link.item(to="/solution/mobile")
            .title.yellow 移动 APP
            .description 有效降低网络延迟，大幅提升访问速度
            .icon.mobile-s
          router-link.item(to="/solution/education")
            .title.orange 在线教育
            .description 提供点播/直播/版权保护服务，满足多样化需求
            .icon.education
          router-link.item(to="/solution/game")
            .title.blue 游戏
            .description 多线 BGP 覆盖各地区运营商，解决网络延迟问题
            .icon.game
          router-link.item(to="/solution/e-commerce")
            .title.purple 电商 & O2O
            .description 加速网站访问，高峰期弹性扩展从容应对“大促”
            .icon.e-commerce
          router-link.item(to="/solution/fusion")
            .title.darkBlue 融合云
            .description 构建多源存储架构，数据可平滑迁移
            .icon.fusion
        .list(v-show="menuCondition.contentNumber === 2")
          .row
            .title 文档中心
            a.link(href="http://docs.upyun.com/" target="_blank") 产品文档
            a.link(href="http://docs.upyun.com/guide/#api" target="_blank") API 文档
            a.link(href="http://docs.upyun.com/download/#sdk" target="_blank") SDK 与工具
          .row
            .title 帮助
            a.link(href="http://docs.upyun.com/guide/" target="_blank") 新手指南
            a.link(href="http://docs.upyun.com/faq/" target="_blank") 常见问题
          .row
            .title 开发者社区
            a.link(href="http://segmentfault.com/t/又拍云存储" target="_blank") 技术问答
            a.link(href="https://blog.upyun.com/" target="_blank") BLOG
        .list(v-show="menuCondition.contentNumber === 3")
          .row
            a.link 创业扶持
            router-link.link(to="/chunyu") 春雨计划
            router-link.link(to="/league") 又拍云联盟
          .row
            a.link 线下活动
            a.link(href="http://opentalk.upyun.com/show/index" target="_blank") OpenTalk
            router-link.link(to="/media_reports") 媒体报道
          .row
            //- a.link 媒体报道
            router-link.link(to="/https") HTTPS 加密
            router-link.link(to="/webp") WebP 体验
</template>

<script>
export default {
  data () {
    return {
      menuActive: false,
      menuShowing: false,
      menuCondition: { left: -41, width: 455, height: 290, contentNumber: 0 },
      conditions: [
        { left: -41, width: 455, height: 290, contentNumber: 0 },
        { left: 49, width: 455, height: 290, contentNumber: 1 },
        { left: 273, width: 384, height: 164, contentNumber: 2 },
        { left: 395, width: 384, height: 136, contentNumber: 3 }
      ],
      timeout: {}
    }
  },
  methods: {
    showMenu (conditionNumber) {
      this.clearTimeout()
      this.menuShowing = true
      if (conditionNumber !== undefined) this.menuCondition = this.conditions[conditionNumber]
      this.timeout = setTimeout(() => {
        this.menuActive = true
        setTimeout(() => {
          this.checkMenu()
        }, 1000)
      }, 100)
    },
    hideMenu () {
      this.clearTimeout()
      this.timeout = setTimeout(() => {
        this.menuActive = false
        setTimeout(() => {
          this.checkMenu()
        }, 1000)
      }, 300)
    },
    clearTimeout () {
      window.clearTimeout(this.timeout)
    },
    checkMenu () {
      this.menuShowing = this.menuActive
    }
  }
}
</script>
