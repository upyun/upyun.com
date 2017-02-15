<style lang="sass" src="./page_header.sass"></style>
<template lang="pug">
#page_header
  .container.clearfix
    router-link.logo(to="/")
      img(src="../assets/logo.png", width=125)
    .navs
      .nav(@mouseover="showMenu", @mouseout="hideMenu") 产品
      a.nav 解决方案
      a.nav 帮助与文档
      a.nav 媒体与活动
    .side-navs
      a.nav 登录
      a.nav 注册
      a.nav.console 控制台
    .menu(:class="{active: menuActive}", @mouseover="showMenu", @mouseout="hideMenu", v-show="menuShowing")
      .inner
        router-link.item(to="/product/cdn")
          .title CDN
          .description 解决网站高流量、大并发的问题
          .icon.cdn
        router-link.item(to="/product/live")
          .title 直播云
          .description 解决网站高流量、大并发的问题
          .icon.live
        router-link.item(to="/product/uss")
          .title 云存储
          .description 解决网站高流量、大并发的问题
          .icon.uss
        router-link.item(to="/product/vod")
          .title 点播云
          .description 解决网站高流量、大并发的问题
          .icon.vod
        router-link.item(to="/product/ups")
          .title 云处理
          .description 解决网站高流量、大并发的问题
          .icon.ups
        router-link.item(to="/product/mobile")
          .title 流量营销
          .description 解决网站高流量、大并发的问题
          .icon.mobile
</template>

<script>
export default {
  data () {
    return {
      menuActive: false,
      menuShowing: false,
      timeout: {}
    }
  },
  methods: {
    showMenu () {
      this.menuShowing = true
      this.timeout = setTimeout(() => {
        this.menuActive = true
        setTimeout(() => {
          this.checkMenu()
        }, 1000)
      }, 100)
    },
    hideMenu () {
      this.timeout = setTimeout(() => {
        this.menuActive = false
        setTimeout(() => {
          this.checkMenu()
        }, 1000)
      }, 100)
    },
    checkMenu () {
      this.menuShowing = this.menuActive
    }
  },
  mounted () {
  }
}
</script>
