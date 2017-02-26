<style lang="sass" src="./product.sass" scoped></style>
<style lang="sass" scoped>
  @import "../../assets/susy"
  .section-hero
    .right
      @include span(6 last)
      text-align: right
      padding-right: 20px
      .legend
        width: 180px
        display: inline-block
        white-space: nowrap
        margin-bottom: 13px
        .item
          font-size: 20px
          line-height: 26px
          margin-bottom: 9px
          text-align: left
          position: relative
          .dot
            width: 10px
            height: 10px
            border-radius: 50%
            background: #ebebeb
            border: 1px solid #979797
            position: absolute
            left: -22px
            top: 8px
            &.hot
              background: #399ffb
              border: 0
      .chart
        height: 300px
        border-bottom: 1px solid #97a1ab
        position: relative
        width: 400px
        display: inline-block
        .label
          position: absolute
          left: 0
          bottom: 7px
          font-size: 22px
        .bar
          position: absolute
          right: 107px
          bottom: 7px
          width: 95px
          background: #ebebeb
          height: 158px
          &.hot
            right: 0
            background: #399ffb
            height: 292px
            color: white
            text-align: center
            font-size: 20px
            display: flex
            align-items: center
            padding: 0 10px
  .section-events
    color: white
    padding: 56px 0 80px
    .main-title
      color: white
    .main-description
      color: white
      margin-bottom: 90px
    .events
      .item
        @include gallery(3)
        text-align: center
        img
          display: block
          margin: 0 auto
        .title
          font-size: 20px
          margin: 16px 0 15px
          font-weight: 400
        .description
          font-size: 18px
  .section-scenes
    padding-bottom: 30px
    .scenes .item
      @include gallery(3)
      margin-bottom: 40px
</style>

<template lang="pug">
layout(:colors="colorSet")
  .container.hero-inner(slot="hero")
    .info
      .title 流量营销
      .description 又拍云手机流量营销服务，整合移动、电信、联通三大运营商流量资源，帮助用户开展品牌宣传、APP/游戏/微信公众号/网站的拉新与促活等多种营销活动。实现营销流量的简单快速接入，活动的低成本快速开展，提供高效管理后台，帮您轻松倍增营销成效。
      .buttons
        up_button(:color="colorSet.mid", type="major") 联系我们
        up_button API 文档
      .price 0.0043 元/GB/天，新注册用户免费试用 7 天
    .icon
      img(src="./assets/marketing_large.svg")
  template(slot="page")
    .section-fetures
      .container
        .main-title 产品特性
        .main-description 商家促销、线下活动、APP推广、社交媒体互动，
          br
          | 流量就是最好的营销工具
        .features
          .item
            img(src="./assets/marketing-icon-1.svg")
            .title 整合三网资源
            .description 又拍云存储单存储集群支持 PB 级容量，单数据中心支持 EB 级容量，全网轻松应对 ZB 级的异构化数据。
          .item
            img(src="./assets/marketing-icon-2.svg")
            .title 成本低 更省心
            .description 具有相对于传统营销活动相比更低的单用户成本，另外无需面对选品、采购、包装、物流、库存等各种问题。
          .item
            img(src="./assets/marketing-icon-3.svg")
            .title 按效果付费
            .description 只有当用户完成你所设计的活动任务（下载 App/游戏、关注公众号等）获得流量后才会产生费用。
          .item
            img(src="./assets/marketing-icon-4.svg")
            .title 账单、用量透明
            .description 控制台可追踪到每一笔充值加款情况以及流量分发情况，透明、高效的流量管理，真正做到轻松订购，安心使用。
          .item
            img(src="./assets/marketing-icon-5.svg")
            .title 直观的效果
            .description 利用控制台统计工具，可以直观的通过流量分发明细看到活动为你带来的用户数、获客成本以及账单信息。
          .item
            img(src="./assets/marketing-icon-6.svg")
            .title 接入简单 使用方便
            .description 得益于又拍云高效开放 API，仅需几行代码即可快速接入流量分发服务，更能灵活的查询历史明细、数据分析。
    .section-hero
      .container
        .main-title 倍增营销流量
        .description 无论你的目标是提高 App/游戏下载量，还是增加微信公众号粉丝，又拍云流量都能提供营销活动解决方案，帮你在有限的营销成本下倍增营销成效。
        .right
          .legend
            .item 传统营销方式
              .dot
            .item 又拍云流量营销方式
              .dot.hot
          br
          .chart
            .label APP 下载量
            .bar
            .bar.hot 上升 50%
    up_gradient.section-events(:colors="colorSet")
      .container
        .main-title 快速接入流量奖励活动
        .main-description 企业调用又拍云流量API，自行设计与开发活动页，整合到企业平台的相关业务环节
        .events
          .item
            img(src="./assets/marketing-event-user.svg")
            .title 用户
            .description 在企业平台参与流量赠送活动，输入手机号码
          .item
            img(src="./assets/marketing-event-enterprise.svg")
            .title 企业
            .description 在企业平台参与流量赠送活动，输入手机号码
          .item
            img(src="./assets/marketing-event-flow.svg")
            .title 又拍云流量
            .description 在企业平台参与流量赠送活动，输入手机号码
          .item
            img(src="./assets/marketing-event-user.svg")
            .title 用户
            .description 在企业平台参与流量赠送活动，输入手机号码
    .section-scenes
      .container
        .main-title 应用场景
        .scenes
          .item
            .img: img(src="./assets/marketing-sence-1.svg")
            .title APP 下载赠流量
          .item
            .img: img(src="./assets/marketing-sence-2.svg")
            .title 微信公众号增粉
          .item
            .img: img(src="./assets/marketing-sence-3.svg")
            .title 奖品礼券
          .item
            .img: img(src="./assets/marketing-sence-4.svg")
            .title 流量加油站
          .item
            .img: img(src="./assets/marketing-sence-5.svg")
            .title 积分兑换流量
          .item
            .img: img(src="./assets/marketing-sence-6.svg")
            .title 活动比赛送流量
          .item
            .img: img(src="./assets/marketing-sence-7.svg")
            .title 流量红包
          .item
            .img: img(src="./assets/marketing-sence-8.svg")
            .title 员工福利
    .section-help
      .container
        .main-title 帮助与文档
        .menus
          .menu
            .title 产品介绍
            a 整体架构
            a 基础配置
            a 高级特性
          .menu
            .title 新手指南
            a 基本概念
            a API 简易指南
          .menu
            .title 开发者文档
            a API 文档
            a CDN 文档
            a SDK 及工具
          .menu
            .title 常见问题
            a 概念性 FAQ
            a 技术性 FAQ
        .try
          up_button(:color="colorSet.mid") 免费试用
</template>

<script>
import layout from '../../components/layout'
import colors from '../../services/colors'

export default {
  data () {
    return {
      colorSet: colors.collection.darkBlue
    }
  },
  mounted () {
  },
  components: { layout }
}
</script>
