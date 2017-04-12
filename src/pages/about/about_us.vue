<style lang="sass" src="./about.sass" scoped></style>
<style lang="sass" scoped>
  .cover
    background-image: url(./assets/bg-1.jpg)
</style>

<template lang="pug">
layout
  div(slot="hero")
    .cover
  div(slot="page")
    .about-page
      .container
        .unit
          .title 关于我们
          p 又拍云是国内知名企业级云服务商、国家高新技术企业，致力于为客户提供一站式在线业务加速服务。又拍云于2010年开展企业级云服务，在2014年正式成立公司运作，目前已形成以场景化CDN为核心，同时提供直播云、点播云、云存储、云处理、云安全和流量营销等服务的业务布局，并率先推出行业领先的直播云、点播云、电商、游戏、音频、移动App等细分场景的场景化CDN整体解决方案，助力在线加速业务。又拍云通过数据中心联盟、中国信息通信研究院（工信部电信研究院）组织的可信云认证，同时被认定为杭州市网络安全协会理事单位。经过多年沉淀，又拍云目前拥有6个数据处理中心、160多个国内自建CDN节点、8个海外CDN节点、4000台服务器、2TB+保有带宽、日均请求超过600亿次。
        .unit
          .title 企业文化
          .culture-items
            .item
              img
              .title 我们的使命
              .slogan 让创业更简单
            .item
              img
              .title 信奉的价值观
              .slogan 服务第一、持续精进、勇于承担
            .item
              img
              .title 产品理念
              .slogan 以用户价值为中心
        .unit
          .title 公司荣誉
          .timeline
            .item
              .year 2016
              .awards
                .award 国家高新技术企业
                .award 中国IDC企业会员
                .award 我最喜爱的科技创业公司（Xtecher）
            .item
              .year 2015
              .awards
                .award 年度十大最具成长力云服务奖（工信部）
                .award 中国最佳创新公司50强（美国商业杂志《快公司》）
                .award 云加速技术创新奖（IDC大会）
            .item
              .year 2014
              .awards
                .award 年度最佳电商云计算服务平台（电商博览会）
                .award 未来之星（中国企业家）
                .award 年度十大最具成长力云服务奖（工信部）
                .award 中国年度创新成长企业100强（创业邦）
                .award 最佳开发者服务平台奖（艾媒咨询-拳头奖）
            .item
              .year 2013
              .awards
                .award 年度最佳技术服务提供商（中国互联网创业者大会）
            .item
              .year 2012
              .awards
                .award 互联网年度最佳云服务商（Donews 互联网盛典）
            .item
              .year 2011
              .awards
                .award 创新企业 Top10（CSDN）
</template>

<script>
import layout from './layout'

export default {
  data () {
    return {
    }
  },
  head: {
    title: { inner: '关于我们' }
  },
  components: { layout }
}
</script>
