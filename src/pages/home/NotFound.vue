<style lang="sass" scoped>
.wrapper
  margin-top: 150px
  text-align: center
  h1
    margin-bottom: 18px
    font-size: 40px
    line-height: 1.1em
  p
    margin-top: 18px
    margin-bottom: 18px
    font-size: 18px
    line-height: 1.1em
  .up_button.to-home
    width: 122px
    height: 42px
    line-height: 42px
    color:#2ec0ec
    border: 1px solid #2ec0ec
</style>

<template lang="pug">
.wrapper
  h1 404
  p 您访问的页面不存在
  router-link(to="/",  class="up_button to-home major") 回到首页
  p {{ countdown }} S 后自动返回首页
</template>

<script>
export default {
  data () {
    return {
      countdown: 2
    }
  },
  mounted () {
    setInterval(() => {
      this.countdown --
    }, 1000)
  },
  watch: {
    countdown: function () {
      if (this.countdown === 0) {
        this.$router.push('/')
      }
    }
  }
}
</script>
