<style lang="sass" src="./about.sass" scoped></style>
<style lang="sass" src="./pricing.sass" scoped></style>

<template lang="pug">
layout(:colors="colorSet", heroHeight="430")
  .container.hero-inner(slot="hero")
    .info
      .title 价格计算器
      .description 您可根据自身需求，选择最适合的产品组合，使用价格计算器估算成本
    .icon
      icon
  div(slot="page")
    .price-page
      .container
        .unit(v-for="product in products")
          .title {{ product.name }}
          .content
            subproduct(v-for="subproduct in product.subproducts", :p="subproduct")
        smy(:products="products")
</template>

<script>
import layout from '../../components/layout'
import subproduct from './pricing_subproduct'
import smy from './pricing_summary'
import products from 'json!yaml!./pricing_products.yml'
import colors from '../../services/colors'
import icon from './pricing_icon'

export default {
  data () {
    return {
      qty: 0,
      products,
      colorSet: colors.collection.blue
    }
  },
  head: {
    title: { inner: '价格计算器' }
  },
  mounted () {
    // 流量赠送规则
    this.$watch(function () {
      return this.products[0].subproducts[0].items[0].qty +
             this.products[0].subproducts[1].items[0].qty +
             this.products[0].subproducts[2].items[0].qty
    }, function (qty) {
      this.products[1].subproducts[0].items[0].balance = qty
      this.products[1].subproducts[0].items[0].qty = qty
    })
  },
  components: { layout, subproduct, smy, icon }
}
</script>
