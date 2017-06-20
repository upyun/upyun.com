<style lang="sass" src="./about.sass" scoped></style>
<style lang="sass" scoped>
@import "../../assets/susy"
.cover
  background-image: url(./assets/bg-3.jpg)
.map-unit
  +container
  max-width: none
  .map
    +span(1 of 2 0)
  .right
    +span(1 of 2 0 last)
    padding: 47px 54px
    background: #fcfcfc
    .title
      margin-bottom: 20px
      font-size: 23px
      font-weight: 400
    .caption
      color: #97a1ab
    p
      margin: 8px 0 20px
</style>

<template lang="pug">
layout
  div(slot="hero")
    .cover
  div(slot="page")
    .about-page
      .container
        .unit
          .title 联系我们
          .contact-info
            .item
              img.i(src="./assets/contact-icon-1.svg")
              .title 售前咨询
              .content
                | 0571-81020203
                br
                | sales@upyun.com
                br
                | QQ：200576786
            .item
              img.i(src="./assets/contact-icon-2.svg")
              .title 售后咨询
              .content
                | 0571-81020204
                br
                | support@upyun.com
                br
                a(href="http://support.upyun.com/kchat/18915?group=22540&from=mainsite" target="_blank") 点击在线咨询
            .item
              img.i(src="./assets/contact-icon-3.svg")
              .title 市场合作
              .content
                | marketing@upyun.com
            .item
              img.i(src="./assets/contact-icon-4.svg")
              .title 关注我们
              .content
                a.icon.wechat
                a.icon.weibo
        .unit(style="padding-bottom: 0; border-bottom: 0")
          .title 公司地址
          .contact-address
            .bar
              .item(:class="{active: active === 0}", @click="setMapPoint(0)") 杭州总部
              .item(:class="{active: active === 1}", @click="setMapPoint(1)") 北京分公司
              .item(:class="{active: active === 2}", @click="setMapPoint(2)") 上海分公司
              .item(:class="{active: active === 3}", @click="setMapPoint(3)") 广州分公司
      .map-unit
        el-amap.map(vid="amapDemo", :center="[addresses[active].x, addresses[active].y]", style="height: 464px", zoom="16", mapStyle="light", :scrollWheel="false", :plugin="['ToolBar']")
          el-amap-marker(v-for='item in addresses', :position='[item.x, item.y]', :key='item.city')
        .right
          .title {{addresses[active].name}}
          .content
            .caption 公司地址：
            p {{addresses[active].address}}
            .caption 联系方式：
            p {{addresses[active].phone}}
            .caption 邮政编码：
            p {{addresses[active].post}}
</template>

<script>
import layout from './layout'

export default {
  data () {
    return {
      map: null,
      addresses: [
        { x: 120.089138, y: 30.289631, city: '杭州', name: '杭州总部', address: '地址： 杭州市西湖区文一西路 522号 西溪科创园 9号楼 5F', phone: '0571-89966786', post: '310000' },
        { x: 116.451201, y: 39.961206, city: '北京', name: '北京分公司', address: '地址： 北京市朝阳区曙光西里甲 1 号第三置业大厦 A 座 808 室', phone: '010-58222004', post: '100028' },
        { x: 121.437556, y: 31.237, city: '上海', name: '上海分公司', address: '地址： 上海市普陀区安远路 518 号宝华城市晶典大厦 1308 室', phone: '021-61231586', post: '200060' },
        { x: 113.372639, y: 23.126171, city: '广州', name: '广州分公司', address: '地址： 广州市天河区科韵路 12 号之一方圆E时光 1303 室', phone: '020-29015900', post: '510000' }
      ],
      active: 0
    }
  },
  head: {
    title: { inner: '联系我们' }
  },
  mounted: function () {
    this.setMapPoint(this.active)
  },
  methods: {
    setMapPoint: function (num) {
      this.active = num
    }
  },
  components: { layout }
}
</script>
