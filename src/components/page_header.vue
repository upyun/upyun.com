<style lang="sass" src="./page_header.sass"></style>
<template lang="pug">
#page_header
  .container.clearfix
    router-link.logo(to="/")
      img(src="../assets/logo.png", width=125)
    .navs
      nav(@mouseover="showMenu", @mouseout="hideMenu")
        router-link(to="/product/uss") 产品
      nav 解决方案
      nav
        a(href="") 帮助与文档
      nav 媒体与活动
    .side-navs
      nav
        a(href="") 登录
      nav
        a(href="") 注册
      nav.console
        a(href="") 控制台
    .menu(:class="{active: menuActive}", @mouseover="showMenu", @mouseout="hideMenu", v-show="menuShowing")
      .inner
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
