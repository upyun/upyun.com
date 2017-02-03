<style lang="sass" src="./home.sass" scoped></style>

<template lang="pug">
.home
  layout(:colors="colorSet")
    div(slot="hero")
      summit
      .slide
        .title 为 Web 和移动应用
          br
          | 提供更快、更安全的全网加速
        .sub-title
          | 通过 CDN 为网页和移动应用提供加速，支持点播和直播,
          br
          | 自主化配置，7 × 24 小时技术支持
        .buttons
          up_button(type="major", :color="colorSet.mid") 免费体验
          up_button 快速入门
      //- .dots
        .dot.active
        .dot
        .dot
        .dot
    div(slot="page")
      .section-main
        .container
          .main-title 为您提供了全网加速的一切
          .main-description 又拍云提供安全可靠的存储、灵活强大的处理以及更快、更稳定的分发加速，让企业抛开底层基础建设的枷锁，把更多的精力集中在核心产品的迭代以及业务的运营上，业务先人一步
          .products
            .item
              .img: img(src="./assets/home-ic-cdn.svg")
              .title 云分发 CDN
              p 又拍云解决网站高流量、大并发的问题，冲破业务负载的极限。为用户提供经济、可靠、 可自主管理的系统扩容方案。
            .item
              .img: img(src="./assets/home-ic-ups.svg")
              .title 云处理 UPS
              p 提供富媒体作业的处理，帮助企业客户实现更加智能的工作流，为不同的用户终端完成内容分发工作，效率更高，整体成本更低。
            .item
              .img: img(src="./assets/home-ic-uss.svg")
              .title 云存储 USS
              p 提供多支持、易扩展的安全存储服务，满足存储、分流与备份各类数据需求，即便是高达 ZB 级的异构化数据，也能从容应对。
            .item
              .img: img(src="./assets/home-ic-uvod.svg")
              .title 点播云 UVOD
              p 更快、更稳定地发布流媒体音视频，即使处于高峰时段，也能为不同终端的用户提供高质量、稳定、 一致的音视频播出体验。
          .right
            img(src="./assets/home-pic-quanwangjiasu.svg")
        .container.live
          .line
          .main-title 做直播，用又拍云就够了
          .main-description 能更快、更稳定地发布流媒体音视频，能以更短的时间，完成整个媒体内容的处理与交付工作，帮助客户快速部署从推流端到播放端的一站式媒体直播服务
          img.large(src="./assets/home-pic-zhibo.svg")
      up_gradient.section-global(:colors="colorSet")
        .container
          .right
            .title 自建高质量全球加速节点
            .description 多节点，高并发，提供超低延迟、高码率、高并发，从推流端到播放端的一站式解决方案，完美支持多终端输出，带来流程播放体验。
            .numbers
              .item
                .num 6
                .text 数据中心
              .item
                .num 160+
                .text 全球自建 CDN 节点
              .item
                .num 4000+
                .text 服务器
      .section-statistics
        .container
          .left
            .title 透明、丰富的统计监控功能
            .description 丰富的数据统计分析、方便的日志下载和全网实时性能监控,全平台自主化查询，助您时刻掌控业务全局
            up_button 查看详情
          .right
            img(src="./assets/statistics.png", width="959", height="437")
      .section-clients
        .container
          .main-title 深受客户信赖
          .clients
            .item
              img(src="./assets/client-beibei.png", width="74", height="74")
              .title 贝贝网
              .description 贝贝网是国内领先的母婴特卖平台，有超过 3000 万的妈妈群体通过贝贝网购买各种母婴物品。又拍云集CDN、云存储、云处理和云安全于一体的场景化解决方案，很好的帮贝贝网分摊了基础建设的压力，并同时提升了整站的妈妈 购物体验。活动大促期间，又拍云更点对点的安排技术团队入驻，帮助应对大促带来的各种访问压力。
            .item
              img(src="./assets/client-mogujie.png", width="74", height="74")
              .title 蘑菇街
              .description 蘑菇街是目前国内最大的女性时尚购物网站,每天超过 550 万的 UV，全站积累了大量的优质女性商品图片。又拍云的自建 CDN 体系很好的帮助蘑菇街解决了打开速度的问题。双十一期间，又拍云帮助蘑菇街稳定地扛住了超大流量涌入，以可靠的技术支持为数百万笔订单提供了安全支付保障。
            .item
              img(src="./assets/client-beibei.png", width="74", height="74")
              .title 蜻蜓 fm
              .description 又拍云提供了高可用的存储和 CDN 加速 服务,很好的满足了我们从文件存储到下载 加速的各方面需求,帮助蜻蜓 FM 有效解决 了随业务量增长带来的诸多难题。
      .section-brands
        .container
          .line
          .main-title 他们都在使用又拍云
          .sub-title 已为超过 150000 用户提供加速服务
          .brands
            .item(v-for="i in 15")
              .img
              .title 个推
      up_gradient.section-promo(:colors="colorSet")
        .lines
        .container
          .inner
            .main-title 现在就开始吧，认证后还送代金券！
            .sub-title 追求理想的加速效果，性能更快，更安全
            up_button(type="major", :color="colorSet.mid") 免费注册
</template>

<script>
import layout from '../../components/layout'
import summit from '../../components/summit'
import colors from '../../services/colors'

export default {
  data () {
    return {
      colorSet: colors.collection.blue
    }
  },
  components: { layout, summit }
}
</script>
