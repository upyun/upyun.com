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
  font-weight: 400
  cursor: pointer
  &:first-child
    margin-right: 30px
  &:active
    transform: translateY(1px)
  &.major
    background: white
    &:hover
      background: rgba(255,255,255,.75)
  &.outline
    &:hover
      background: rgba(255,255,255,.25)
</style>

<template lang="pug">
.up_button(:class="type", :style="buttonStyle")
  slot
</template>

<script>
export default {
  props: {
    color: {
      default: 'white'
    },
    type: {
      default: 'outline'
    }
  },
  computed: {
    buttonStyle: function () {
      if (this.type === 'major') return { 'color': this.color }
      else return { 'color': this.color, 'border-color': this.color }
    }
  }
}
</script>
