<style lang="sass">
.up_button
  display: inline-block
  width: 140px
  height: 46px
  line-height: 44px
  border-radius: 6px
  border: 1px solid white
  font-size: 18px
  text-decoration: none
  text-align: center
  transition: background linear .2s
  span
    display: block
  &:first-child
    margin-right: 30px
  &:active
    transform: translateY(1px)
  &.major
    background: white
    font-weight: 400
    span
      -webkit-text-fill-color: transparent
      -webkit-background-clip: text
      text-fill-color: transparent
      background-clip: text
  &.outline
    &:hover
      background: rgba(255,255,255,.3)
</style>

<template lang="pug">
.up_button(:class="style", :style="buttonStyle")
  span(:style="spanStyle")
    slot
</template>

<script>
export default {
  props: {
    colors: {},
    color: {
      default: 'white'
    },
    style: {
      default: 'outline'
    }
  },
  computed: {
    spanStyle: function () {
      if (!this.major) return ''
      else return { 'background-image': `linear-gradient(312deg, ${this.colors.start} 0%, ${this.colors.end} 100%)` }
    },
    buttonStyle: function () {
      if (this.major || !this.color) return ''
      else return { 'color': this.color, 'border-color': this.color }
    }
  }
}
</script>
