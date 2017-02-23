<style lang="sass" src="./about.sass" scoped></style>

<template lang="pug">
layout
  div(slot="hero")
  div(slot="page")
    .about-page
      .container
        .unit
          .title 关于我们
          p 又拍云成立于 2010 年，致力于提供简单易用、高质量的一站式云加速服务，帮助客户解决海量资源云存储，图片、音视频云处理，内容分发加速和云安全四大问题，并率先推出行业领先的全网加速、直播云、点播云等场景化的产品方案，有效的帮助用户节省从产品想法到产品上线运营全过程的成本，实现快速上云，让创业变得更简单。
          | 又拍云经过多年的技术与产品积累与沉淀，已在全球范围持续打造场景化 CDN，并拥有 6 大数据中心，150 多个自建 CDN 节点，4000 多台服务器，1.5TB+保有带宽资源，日均请求超过 500 亿次，并吸引了超过 15 万付费用户的使用，能帮助企业用户和开发者轻松实现稳定、可靠、安全的云服务体验。
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
              .year 2015
              .awards
                .award 年度十大最具成长力云服务奖（工信部）
                .award 云加速技术创新奖（IDC大会）
            .item
              .year 2014
              .awards
                .award 年度最佳电商云计算服务平台（电商博览会）
                .award 未来之星（中国企业家）
                .award 年度十大最具成长力云服务奖（工信部）
                .award 年度创新企业（创业邦）
                .award 首批通过乌云众测认证
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
  components: { layout }
}
</script>
