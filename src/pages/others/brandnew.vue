<style lang="sass" src="./brandnew.sass" scoped></style>

<template lang="pug">
.home
  layout(class="brandnew")
    div(slot="hero")
      .cover
    div(slot="page")
      .wrapper
        .main
          .section1
            p.section-title 又拍云品牌形象全新升级
            .section1-left
              img.before(src="./assets/brandnew/before.png")
              img.new(src="./assets/brandnew/new.png")
            .section1-middle
              img(src="./assets/brandnew/time_line.png")
            .section1-right
              p.year.year-2010 2010 年
              p.content 又拍云推出
                span &nbsp;按需付费&nbsp;
                | 的云服务，将云存储、云处理及云分发融为一体
              p.year.year-2015 2015 年
              p.content 又拍云
                span &nbsp;率先&nbsp;
                | 推出场景化CDN
              p.year.year-2016 2016 年
              p.content 又拍云
                span &nbsp;挺进&nbsp;
                | 直播云领域
              p.content 七年的发展，又拍云已然成为云服务商中的佼佼者
                br
                span 但这显然还不够！
              p.year.year-now NOW
              p.content 作为国内领先的云服务平台，又拍云寄予未来将核心产品与人工智能、云计算紧密结合，深入融合服务，在提供优质、可靠的 CDN 服务基础上，致力于为所有在线业务加速，让流转于网络上的数据、信息
                span &nbsp;触手可达&nbsp;
                | ，通过网络连接一切
                span &nbsp;触及全球&nbsp;
                | 。
          .section2
            p.section-title 新 LOGO 解读
            .logo-analysis
              .logo-analysis-img
                img(src="./assets/brandnew/logo解读.png")
              .logo-analysis-text
                p 不止CDN，全面加速在线业务
                p 顺势而为，产品服务+人工智能、云计算深度融合
                p 加强海外扩张，助力用户出海业务
                p 从连接到守护，给予安全稳定的服务
            .logo-description
              p 又拍云品牌标识以圆形为主体，融入了“全球、连接、节点”等概念，传达了传输、安全、存储的业务内核。
              p 如同双手环绕的两条平滑线条，寓意“连接”和“守护”，是又拍云加快互联网业务与用户间连接的体现，也彰显又拍云以用户为核心、守护用户的服务理念。
            .meaning 全新的Logo沿用又拍云经典的安全蓝，体现出又拍云追求给用户安全稳定的服务。
          .section3
            p.section-title LOGO 设计思路
            img.design-idea(src="./assets/brandnew/logo设计思路.png")
          .section4
            p.section-title LOGO 颜色
            p.logo-color 蓝色，是天空、海洋的基调，是地球上最广泛的颜色之一；代表了又拍云温暖、平和的企业气质，体现又拍云涉及广泛、深入探索的技术精神和氛围。
            img.logo-color-img(src="./assets/brandnew/logo颜色.png")
          .section5
            p.section-title LOGO 手势
            img.logo-gesture(src="./assets/brandnew/logo手势.png")
          .section6
            p.section-title LOGO 常见用法
            .logolist
              img(src="./assets/brandnew/常用1.png")
              img(src="./assets/brandnew/常用2.png")
              img(src="./assets/brandnew/常用3.png")
              img(src="./assets/brandnew/常用4.png")
          .section7
            p.section-title LOGO 下载
            p 点击按钮即可下载我们的Logo
            a(href="/static/upyun_logos.zip", download="又拍云_logos", target='_blank')
              img.download(src="./assets/brandnew/下载.png")
      .banner-box
        .banner
        .charge-now
          up_button(url="https://console.upyun.com/billing/charge/" target="_blank") 立即充值
</template>

<script>
import layout from './layout'
import colors from '../../services/colors'

export default {
  data () {
    return {
      colorSet: colors.collection.blue
    }
  },
  components: { layout }
}
</script>
