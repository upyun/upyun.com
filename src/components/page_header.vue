<style lang="sass" src="./page_header.sass"></style>
<template lang="pug">
#page_header
  .container.clearfix
    router-link.logo(to="/")
      img(src="../assets/logo.png", width=125)
    .navs
      router-link.nav(to="/product/uss", @mouseover="showMenu", @mouseout="hideMenu") 产品
      a.nav 解决方案
      a.nav 帮助与文档
      a.nav 媒体与活动
    .side-navs
      a.nav 登录
      a.nav 注册
      a.nav.console 控制台
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
