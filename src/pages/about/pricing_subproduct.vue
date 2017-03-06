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
      +span(9)
    .right
      +span(3 last)
      font-size: 14px
      padding-left: 30px
      color: #97a1ab
      text-align: right
      line-height: 34px
      input
        width: 87px
        height: 34px
        margin-right: 8px
        text-align: right
        color: #399ffb
        font-size: 20px
        font-weight: 300
        float: left
</style>

<template lang="pug">
.section
  .head {{ p.name }} {{ p.description }}
    .pricing
      span ¥ {{ price }}
      | 元/日 ≈ ¥ {{ pricePerMonth }} / 月
  template(v-for="item in p.items")
    .caption {{ item.name }} {{ item.description }}
    .bar
      RangeSlider(min="0", max="1000", step="1", v-model="item.qty")
      .right
        input(v-model.number="item.qty", type="number")
        | {{ item.unit }}/日
</template>

<script>
import RangeSlider from '../../components/range_slider'
import counter from '../../services/counter'

export default {
  data () {
    return {
    }
  },
  computed: {
    'price': function () {
      return counter.getSubproductPrice(this.p)
    },
    'pricePerMonth': function () {
      return counter.getSubproductPrice(this.p, true)
    }
  },
  props: ['p'],
  components: { RangeSlider }
}
</script>
