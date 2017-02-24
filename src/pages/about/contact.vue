<style lang="sass" src="./about.sass" scoped></style>

<template lang="pug">
layout
  div(slot="hero")
  div(slot="page")
    .about-page
      .container
        .unit
          .title 联系我们
          .contact-info
            .item
              img(src="./assets/contact-icon-1.svg")
              .title 售前咨询
              .content
                | 0571-81020203
                br
                | sales@upyun.com
                br
                | QQ：200576786
            .item
              img(src="./assets/contact-icon-2.svg")
              .title 售后咨询
              .content
                | 0571-81020204
                br
                | sales@upyun.com
                br
                a 点击在线咨询
            .item
              img(src="./assets/contact-icon-3.svg")
              .title 市场合作
              .content
                | marketing@upyun.com
            .item
              img(src="./assets/contact-icon-4.svg")
              .title 关注我们
              .content
                a.icon.wechat
                a.icon.weibo
        .unit
          .title 公司地址
          .contact-address
            .bar
              .item(:class="{active: active === 0}", @click="setMapPoint(0)") 杭州总部
              .item(:class="{active: active === 1}", @click="setMapPoint(1)") 北京分公司
              .item(:class="{active: active === 2}", @click="setMapPoint(2)") 上海分公司
              .item(:class="{active: active === 3}", @click="setMapPoint(3)") 广州分公司
            #address_map(style="height: 464px")

</template>

<script>
import layout from './layout'
import map from '../../services/map'

export default {
  data () {
    return {
      map: null,
      addresses: [
        { x: 120.095528, y: 30.295284, city: '杭州', name: '杭州总部', content: '地址： 杭州市西湖区文一西路 522号 西溪科创园 9号楼 5F<br/>电话： 0571-89966786<br/>邮编： 310000' },
        { x: 116.422305, y: 39.944716, city: '北京', name: '北京分公司', content: '地址： 北京市东城区东四北大街 107 号科林大厦 B 座 511-512 室<br/>电话： 010-64016989<br/>邮编： 100080' },
        { x: 121.443895, y: 31.243428, city: '上海', name: '上海分公司', content: '地址： 上海市普陀区安远路 518 号宝华城市晶典大厦 1308 室<br/>电话： 021-61231586<br/>邮编： 200060' },
        { x: 113.37911, y: 23.132214, city: '广州', name: '广州分公司', content: '地址： 广州市天河区科韵路 12 号之一方圆E时光 1303 室<br/>电话： 020-29015900<br/>邮编： 510000' }
      ],
      active: 0
    }
  },
  mounted: function () {
    map.init('address_map')
    this.setMapPoint(this.active)
  },
  methods: {
    setMapPoint: function (num) {
      this.active = num
      var address = this.addresses[num]
      map.setPoint(address)
    }
  },
  components: { layout }
}
</script>
