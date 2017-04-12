<style lang="sass" src="./home.sass" scoped></style>

<template lang="pug">
.home
  layout(:colors="colorSet")
    div(slot="hero")
      summit(animate)
      //- .slide
      //-   .title 为 Web 和移动应用
      //-     br
      //-     | 提供更快、更安全的全网加速
      //-   .sub-title
      //-     | 为网站和移动应用提供内容分发，支持 HTTP、HTTPS、RTMP、HLS、HTTP＋FLV 多种协议
      //-     br
      //-     | 支持自助化配置，提供 7 × 24 小时技术支持
      //-   .buttons
      //-     up_button(type="major", :color="colorSet.mid", :url="$links.console", target="_blank") 免费体验
      //-     up_button(url="http://docs.upyun.com/cdn/guide/" target="_blank") 快速入门
      .slide
        .title OV & EV SSL 证书上线
        .sub-title 申购便捷，一键部署，快速实现全站 HTTPS
        div(style="font-size: 26px; margin-top: 15px") 限时优惠，低至 75 折
        .buttons
          a(href="https://console.upyun.com/toolbox/createCertificate/", class="up_button major", style="color:#2ec0ec", target="_blank") 立即申购
          router-link(to="/products/ssl", class="up_button outline") 查看详情
      //- .dots
        .dot.active
        .dot
        .dot
        .dot
    div(slot="page")
      .section-main
        .container
          .main-title 为您提供一站式加速解决方案
          .main-description 又拍云提供安全可靠的对象存储服务、灵活强大的数据处理服务以及更快更稳定的内容分发服务，让企业抛开底层基础建设的枷锁，把更多的精力放在核心产品的迭代以及业务的运营上
          .products
            .item
              .img: img(src="./assets/home-ic-cdn.svg")
              .title 云分发 CDN
              p 结合优质的网络节点资源、传输路由技术优势，有效降低用户访问延迟，提升可用性。具有按需计费，资源弹性扩容等特点。
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
          .left
            .points
              .point(v-for="p in points", :style="{left: `${p.left}px`, top: `${p.top}px`, transform: `scale(${p.zoom})`, opacity: p.opacity}")
          .right
            .title 自建高质量全球加速节点
            .description 截至 2017 年 3 月，又拍云全球 CDN 节点数达到 160 多个，覆盖 10 多个 国家和地区，10 多个运营商，带宽总量超过 2Tbps。2015 年底，CDN 节点资源已覆盖新加坡、台湾、香港、美国、德国等海外地区，全面支持海外加速，推进全球化布局。
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
            .description 丰富的统计分析数据、定制化日志服务、 7*24 小时全网实时性能监控，助您时刻掌控业务全局。
          .right
            img(src="./assets/statistics.png", width="959", height="437")
      .section-clients
        .container
          .main-title 深受客户信赖
          .clients
            .item
              img(src="./assets/client-beibei.png", width="74", height="74")
              .title 贝贝
              .description 贝贝是国内领先的母婴特卖平台，有超过 7000 万的妈妈群体通过贝贝购买各种母婴物品。又拍云集CDN、云存储、云处理和云安全于一体的场景化解决方案，很好的帮贝贝分摊了基础建设的压力，并同时提升了整站的妈妈 购物体验。活动大促期间，又拍云更点对点的安排技术团队入驻，帮助应对大促带来的各种访问压力。
            .item
              img(src="./assets/client-meili.png", width="74", height="74")
              .title 美丽联合集团
              .description 美丽联合集团是中国最大的女性媒体与时尚消费集团，拥有超过2亿的注册用户，日均活跃用户数量超过1500万。又拍云作为美丽联合集团企业级的云服务商，自建 CDN 体系很好的帮助解决了美联旗下产品打开速度的问题。特别是双十一大促期间，又拍云帮助美联稳定地扛住了超大流量涌入，以可靠的技术支持为数百万笔订单提供了安全支付保障。
            .item
              img(src="./assets/client-qingtingfm.png", width="74", height="74")
              .title 蜻蜓 fm
              .description 又拍云提供了高可用的存储和 CDN 加速 服务,很好的满足了我们从文件存储到下载 加速的各方面需求,帮助蜻蜓 FM 有效解决 了随业务量增长带来的诸多难题。
      .section-brands
        .container
          .line
          .main-title 他们都在使用又拍云
          .sub-title 已为超过 150000 用户提供加速服务
          brand_logos(:logos="logos")
      up_gradient.section-promo(:colors="colorSet")
        .lines
        .container
          .inner
            .main-title 新用户注册并激活，即送 61 元代金券
            .sub-title 只需一步，即刻享受又拍云全网加速与强大的云端多媒体处理服务
            up_button(type="major", :color="colorSet.mid", :url="$links.console", target="_blank") 免费注册
</template>

<script>
import layout from '../../components/layout'
import colors from '../../services/colors'
import brand_logos from '../../components/brand_logos'
import bowser from 'bowser'

var summit = require('../../components/summit_static')
if (process.env.NODE_ENV !== 'prerendering' && !bowser.msie) {
  summit = require('../../components/summit')
}

export default {
  data () {
    return {
      colorSet: colors.collection.blue,
      points: [
        { left: 100, top: 180, zoom: 1 },
        { left: 220, top: 230, zoom: 1.3 },
        { left: 310, top: 300, zoom: 1 },
        { left: 130, top: 0, zoom: 0.6, opacity: 0.57 },
        { left: 360, top: 40, zoom: 1, opacity: 0.6 }
      ],
      logos: [
        { name: '芒果 TV', file: 'mangguo' },
        { name: '章鱼 TV', file: 'zhangyu' },
        { name: '浙江卫视', file: 'zjws' },
        { name: '豆瓣', file: 'douban' },
        { name: '美柚', file: 'meiyou' },
        { name: '美图', file: 'meitu' },
        { name: '什么值得买', file: 'smzdm' },
        { name: '贝贝', file: 'beibei' },
        { name: '魅族', file: 'meizu' },
        { name: 'Snail', file: 'snail' }
      ],
      showOrigin: false
    }
  },
  components: { layout, summit, brand_logos }
}
</script>
