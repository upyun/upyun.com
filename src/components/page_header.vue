<style lang="sass" src="./page_header.sass"></style>
<template lang="pug">
#page_header
  .container.clearfix
    router-link.logo(to="/")
      img(src="../assets/logo.png", width=125)
    .navs
      .nav(@mouseover="showMenu(0)", @mouseout="hideMenu") 产品
      .nav(@mouseover="showMenu(1)", @mouseout="hideMenu") 解决方案
      a.nav 帮助与文档
      a.nav 媒体与活动
    .side-navs
      a.nav 登录
      a.nav 注册
      a.nav.console 控制台
    .menu(:class="{active: menuActive}", @mouseover="showMenu()", @mouseout="hideMenu", v-show="menuShowing", :style="{left: `${menuCondition.left}px`}")
      .inner
        .content(v-show="menuCondition.contentNumber === 0")
          router-link.item(to="/product/cdn")
            .title CDN
            .description 跨地区、跨运营商覆盖的网络加速服务
            .icon.cdn
          router-link.item(to="/product/live")
            .title 直播云
            .description 超低延迟、高码率和大并发的音视频直播服务
            .icon.live
          router-link.item(to="/product/uss")
            .title 云存储
            .description 海量、安全和高可靠的云存储服务
            .icon.uss
          router-link.item(to="/product/vod")
            .title 点播云
            .description 安全稳定、弹性和高可用的音视频点播服务
            .icon.vod
          router-link.item(to="/product/ups")
            .title 云处理
            .description 简单、灵活并支持多终端的云处理服务
            .icon.ups
          router-link.item(to="/product/mobile")
            .title 流量营销服务
            .description 三网通用、超低成本并可快速开展的营销服务
            .icon.mobile
        .content(v-show="menuCondition.contentNumber === 1")
          router-link.item(to="/solution/av")
            .title 音视频
            .description 海量存储、加速分发、高效处理一站式解决
            .icon
          router-link.item(to="/solution/mobile")
            .title 移动 APP
            .description 有效降低网络延迟，大幅提升访问速度
            .icon
          router-link.item(to="/solution/e-commerce")
            .title 电商 & O2O
            .description 加速网站访问，高峰期弹性扩展从容应对“大促”
            .icon
          router-link.item(to="/solution/game")
            .title 游戏
            .description 多线 BGP 覆盖各地区运营商，解决网络延迟问题
            .icon
          router-link.item(to="/solution/education")
            .title 在线教育
            .description 提供点播/直播/版权保护服务，满足多样化需求
            .icon
          router-link.item(to="/solution/fusion")
            .title 融合云
            .description 构建多源存储架构，数据可平滑迁移
            .icon
</template>

<script>
export default {
  data () {
    return {
      menuActive: false,
      menuShowing: false,
      menuCondition: { left: -10, width: 428, height: 248, contentNumber: 1 },
      conditions: [
        { left: -10, width: 428, height: 248, contentNumber: 0 },
        { left: 70, width: 428, height: 248, contentNumber: 1 }
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
