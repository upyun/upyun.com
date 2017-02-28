<style lang="sass" scoped>
@import "../../assets/susy"
.main-title
  font-size: 34px
  text-align: center
.main-description
  font-size: 18px
  line-height: 26px
  text-align: center
  width: 470px
  margin: 5px auto 0
  color: #97a1ab
.section-more
  padding: 53px 0 33px
  background: white
  .links
    @include container
    width: 906px
    margin-top: 38px
    .item
      @include gallery(4)
      text-align: center
      margin-bottom: 37px
      text-decoration: none
      &:hover
        opacity: .8
      .img
        width: 100px
        height: 100px
        border-radius: 50%
        background: url(./assets/link-av.svg) center no-repeat #bbb
        display: inline-block
        &.av
          background-image: url(./assets/link-av.svg)
        &.mobile
          background-image: url(./assets/link-mobile.svg)
        &.e-commerce
          background-image: url(./assets/link-e-commerce.svg)
        &.game
          background-image: url(./assets/link-game.svg)
        &.education
          background-image: url(./assets/link-education.svg)
        &.fusion
          background-image: url(./assets/link-fusion.svg)
      .title
        font-weight: 400
        font-size: 18px
        color: #97A1AB

</style>

<template lang="pug">
.section-more
  .container
    .main-title 更多解决方案
    .main-description 提供专业可靠的云加速服务，已帮助
      br
      | 15000 + 客户实现完美加速
    .links
      router-link.item(to="/solution/av")
        .img.av(:style="{'background-color': color}")
        .title 视频娱乐
      router-link.item(to="/solution/mobile")
        .img.mobile(:style="{'background-color': color}")
        .title 移动 APP
      router-link.item(to="/solution/e-commerce")
        .img.e-commerce(:style="{'background-color': color}")
        .title 电商 & O2O
      router-link.item(to="/solution/game")
        .img.game(:style="{'background-color': color}")
        .title 游戏
      router-link.item(to="/solution/education")
        .img.education(:style="{'background-color': color}")
        .title 在线教育
      router-link.item(to="/solution/fusion")
        .img.fusion(:style="{'background-color': color}")
        .title 融合云
</template>

<script>
export default {
  props: ['color']
}
</script>
