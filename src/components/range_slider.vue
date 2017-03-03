<style lang="sass" scoped>
  .range-slider
    display: inline-block
    height: 40px
    width: 100%
    position: relative
    padding-left: 16px
  .range-slider-inner
    display: inline-block
    position: absolute
    height: 100%
    width: 100%
  .range-slider-rail, .range-slider-fill
    display: block
    position: absolute
    top: 16px
    left: 0
    height: 8px
  .range-slider-rail
    width: 100%
    background-color: #fafafa
    border: solid 1px #f0f0f0
    &:after
      content: ""
      position: absolute
      left: -16px
      top: -1px
      height: 8px
      width: 16px
      background: #399ffb
  .range-slider-fill
    background-color: #399ffb
  .range-slider-knob
    display: block
    position: absolute
    top: 50%
    left: 0
    box-sizing: border-box
    width: 32px
    height: 32px
    transform: translate(-50%, -50%)
    cursor: pointer
    background: url(../assets/knob.svg) center 0 no-repeat
  .range-slider-hidden
    display: none !important
</style>

<script>
import RangeSlider from 'vue-range-slider'

export default {
  extends: RangeSlider
}
</script>
