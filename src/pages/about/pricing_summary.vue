<style lang="sass" scoped>
@import "../../assets/susy"
.sticky
  position: fixed
  width: 100%
  left: 0
  top: 20px
  .inner
    +container
    position: relative
.summary
  position: absolute
  right: 0
  top: 0
  width: 374px
  background: white
  .title
    height: 50px
    line-height: 50px
    border-left: 4px solid #399ffb
    border-bottom: 1px solid #f0f0f0
    padding-left: 20px
    font-size: 22px
    font-weight: 400
    background: #FAFAFA
  .content
    padding: 35px 20px 15px
    max-height: 406px
    overflow: auto
    .item
      position: relative
      margin-bottom: 20px
      .name
        font-size: 20px
        font-weight: 400
        margin-bottom: 2px
      .price
        position: absolute
        right: 0
        top: 0
        font-size: 24px
        line-height: 30px
        color: #399ffb
        font-weight: 400
      .description
        color: #97a1ab
        font-size: 14px
    .empty
      margin-bottom: 20px
      color: #97a1ab
  .total
    background: #399ffb
    color: white
    height: 74px
    font-size: 18px
    line-height: 74px
    text-align: right
    padding: 0 20px
    width: 100%
    span
      font-size: 30px
      font-weight: 400
      padding: 0 5px
</style>

<template lang="pug">
.holder(:class="{sticky: sticky}")
  .inner
    .summary
      .title 费用概览
      .content
        .item(v-for="item in items")
          .name {{item.name}}
          .price ￥{{item.price}}
          .description {{item.description}}
        .empty(v-if="items.length === 0") 请拖动滑杆，或直接输入相关产品的预计用量
      .total
        | 合计：￥
        span {{ totalPrice }}
        | / 月
</template>

<script>
import numeral from 'numeral'

export default {
  data () {
    return {
      sticky: false
    }
  },
  props: ['products'],
  computed: {
    items: function () {
      var items = this.products.map(p => {
        var price = 0
        var description = []
        p.subproducts.forEach(function (s) {
          s.items.forEach(function (item) {
            if (item.qty) description.push(`${s.name}${item.name} ${item.qty} ${item.unit}/日`)
            var qty = numeral(item.qty).subtract(item.balance).value()
            if (qty < 0) qty = 0
            price = numeral(qty).multiply(item.unitPrice).multiply(30).add(price).value()
          })
        })
        return {
          name: p.name,
          price,
          description: description.join('，')
        }
      })
      return items.filter((item) => {
        return item.price
      })
    },
    totalPrice: function () {
      var price = 0
      this.items.forEach(function (item) {
        price = numeral(item.price).add(price).value()
      })
      price = numeral(price).format('0,0.00')
      return price
    }
  },
  mounted () {
    window.addEventListener('scroll', this.checkScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.checkScroll)
  },
  methods: {
    checkScroll () {
      if (window.scrollY > 460) this.sticky = true
      else this.sticky = false
    }
  }
}
</script>
