<style lang="sass" scoped>
@import "../assets/susy"
.logos
  padding-bottom: 20px
  @include container()
  .item
    @include gallery(1 of 5 1/6)
    margin-bottom: gutter() * 2
    text-align: center
    border: solid 1px #f0f0f0
    height: 136px
    position: relative
    overflow: hidden
    transition: all ease-out .2s
    padding-top: 20px
    .title
      position: absolute
      bottom: -40px
      left: 0
      width: 100%
      color: white
      background: #15bdf9
      height: 40px
      line-height: 40px
      font-size: 18px
      transition: all ease-out .2s
    .img
      background-size: 150px
      background-position: center
      background-repeat: no-repeat
      height: 96px
      transition: all ease-out .2s
      margin-bottom: 20px
    &:hover
      border-color: #15bdf9
      box-shadow: 0 2px 5px rgba(21, 188, 249, .3)
      padding-top: 0
      .title
        bottom: 0
      .img
        &.grey
          display: none
</style>

<template lang="pug">
.logos
  .item(v-for="logo in logos")
    .img.grey(:style="{'background-image': `url(/static/logos/${logo.file}-grey.png)`}")
    .img(:style="{'background-image': `url(/static/logos/${logo.file}.png)`}")
    .title {{logo.name}}
</template>

<script>
export default {
  props: ['logos']
}
</script>
