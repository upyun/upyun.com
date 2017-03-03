<style lang="sass" src="./about.sass" scoped></style>
<style lang="sass" src="./pricing.sass" scoped></style>

<template lang="pug">
layout
  div(slot="hero")
    .cover
      .container: .content
        .title 价格计算器
        .sub-title 您可根据自身需求，选择最适合的产品组合，使用价格计算器估算成本
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
import layout from './layout'
import subproduct from './pricing_subproduct'
import smy from './pricing_summary'
import products from 'json!yaml!./pricing_products.yml'

export default {
  data () {
    return {
      qty: 0,
      products
    }
  },
  components: { layout, subproduct, smy }
}
</script>
