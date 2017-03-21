<style lang="sass" src="./promotion.sass" scoped></style>

<template lang="pug">
.home
  layout(class="promotion")
    div(slot="hero")
      .cover
      .charge-now
        up_button(url="https://console.upyun.com/billing/charge/" target="_blank") 立即充值
    div(slot="page")
      .wrapper
        .main
          h1.repay-title 充值立返 最高 20%
          p.repay-description 3 月 21 日 - 4 月 11 日，充值满额，即可获得最低 10% 的优惠。充值越多，返额越高，单笔充值最高可返 6000 元。
          img.repay(src="./assets/promotion/promotion.svg")
        .rules
          div
            h1.rules-title 活动规则
            .rule-content
              p 1、活动时间：2017 年 3 月 21 日 00:00 - 4 月 11 日 23:59；
              p 2、活动对象：所有新老客户；
              p 3、活动赠送将以代金券的形式，即时加赠到充值账户；
              p 4、后续使用期间，费用将会优先从代金券扣除，代金券有效期为一年；
              p 5、活动赠送以单笔充值金额返赠，多笔充值不作叠加，活动期间内返赠次数无限制。
            .rights 本次活动最终解释权归又拍云所有。
        a.charge-btn(href="https://console.upyun.com/billing/charge/", target="_blank") 立即充值
</template>

<script>
import layout from './layout'

export default {
  data () {
    return {
    }
  },
  components: { layout }
}
</script>
