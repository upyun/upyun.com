<style lang="sass" scoped>
@import "../../assets/susy"
.section
  margin-bottom: 47px
  .head
    font-size: 20px
    font-weight: 400
    position: relative
    margin-bottom: 16px
    .pricing
      position: absolute
      right: 0
      top: 0
      font-size: 14px
      span
        color: #399ffb
        font-size: 24px
        padding-right: 4px
  .caption
    font-size: 18px
    color: #97a1ab
    margin-bottom: 9px
  .bar
    height: 40px
    margin-bottom: 16px
    +container
    .range-slider
      +span(8)
    .right
      +span(4 last)
      font-size: 14px
      padding-left: 30px
      color: #97a1ab
      input
        width: 67px
        display: inline-block
        height: 34px
        margin-right: 8px
        text-align: right
        color: #399ffb
        font-size: 20px
        font-weight: 300
</style>

<template lang="pug">
.section
  .head {{ p.name }}
    .pricing
      span ¥ {{ price }}
      | 元/日（≈ ¥ {{ pricePerMonth }} / 月）
  template(v-for="item in p.items")
    .caption {{ item.name }}
    .bar
      RangeSlider(min="0", max="1000", step="1", v-model="item.qty")
      .right
        input(v-model="item.qty")
        | {{ item.unit }}/日
</template>

<script>
import numeral from 'numeral'
import RangeSlider from '../../components/range_slider'

export default {
  data () {
    return {
    }
  },
  computed: {
    'price': function () {
      var t = 0
      this.p.items.forEach(function (item) {
        t = numeral(item.unitPrice).multiply(item.qty).add(t).value()
      })
      return t
    },
    'pricePerMonth': function () {
      return numeral(this.price).multiply(30).value()
    }
  },
  props: ['p'],
  components: { RangeSlider }
}
</script>
