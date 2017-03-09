<style lang="sass" src="./solution.sass" scoped></style>

<template lang="pug">
layout(:colors="colorSet")
  .container.hero-inner(slot="hero")
    .info
      .title 移动 APP 解决方案
      .description 移动应用的多样化，随之而来的是不断凸显的网络带宽和服务器性能问题。特别地，随着动态应用的不断涌现(如打车服务、实时地图等)，数据需要实时更新变化，这对带宽及源服务器数据查询的访问迟延要求更高。
      .buttons
        up_button(:color="colorSet.end", type="major", url="/contact") 联系我们
    .icon
      icon
  template(slot="page")
    .section-solutions
      .container
        .solutions
          .item
            .img: img(src="./assets/mobile-icon-1.svg")
            .title 更快访问速度、更低时延
            .description 可将全网内容进行动静分离，采用 TCP 单边加速，并支持标准的 SPDY/3.1 、HTTP/2 协议，能有效降低网络时延，大幅提升访问速度。
          .item
            .img: img(src="./assets/mobile-icon-2.svg")
            .title 从容应对高并发
            .description TB 级的带宽资源预留，应对未知超额访问，并能在访问高峰前对缓存内容进行主动预热，保障稳定性的同时提升响应速度，从容应对访问高峰。
          .item
            .img: img(src="./assets/mobile-icon-3.svg")
            .title 免费默认域名及 HTTPS
            .description 又拍云提供免费的默认加速域名使用，同时默认域名免费支持 HTTPS ，实现加密传输，确保数据传输的安全可靠。
    .section-features
      .container
        .main-title 我们的优势
        .main-description 又拍云自主研发的全网加速解决方案，全站加速较传统 CDN 更快 10%
        .item
          .left
            img(src="./assets/mobile-feature-1.svg")
          .right
            .title 更高覆盖率
            .description 又拍云 CDN 网络覆盖各大运营商，更有丰富海外节点，解决链路互通难题
        .item
          .left
            .title 充足带宽，弹性计费
            .description 全网常备 T 级带宽、按实际使用量弹性计费，让企业合理花费每一分钱
          .right
            img(src="./assets/mobile-feature-2.svg")
        .item
          .left
            img(src="./assets/mobile-feature-3.svg")
          .right
            .title 实时统计监控
            .description 丰富的数据统计分析、方便的日志下载和 7*24 小时全网实时性能监控，时刻掌控业务全局。
    .section-clients
      .container
        .main-title 他们都在使用又拍云
        .main-description 加速的不仅仅是网络，而是整个时代，而同样的时代，演绎着不同的故事...
      .clients
        .item: img(src="/static/logos/in-grey.png")
        .item: img(src="/static/logos/meiyou-grey.png")
        .item: img(src="/static/logos/tuzhan-grey.png")
        .item: img(src="/static/logos/dangbei-grey.png")
        .item: img(src="/static/logos/meipai-grey.png")
        .item: img(src="/static/logos/lanrentingshu-grey.png")
        .item: img(src="/static/logos/36kr-grey.png")
        .item: img(src="/static/logos/douban-grey.png")
    more(:color="colorSet.mid")
</template>

<script>
import layout from '../../components/layout'
import colors from '../../services/colors'
import more from './more'
import icon from './hero_icons/mobile_icon'

export default {
  data () {
    return {
      colorSet: colors.collection.yellow
    }
  },
  head: {
    title: {
      inner: '又拍云移动APP解决方案 - 全面提升APP访问速度,全网劫持防护'
    },
    meta: [
      { name: 'keywords', content: '移动APP,移动APP开发,移动APP安全,移动APP访问', id: 'kw' },
      { name: 'description', content: '又拍云提供专业的移动APP解决方案，助力开发者轻松应对用户增长及安全问题，有效防止域名劫持。', id: 'desc' }
    ]
  },
  components: { layout, more, icon }
}
</script>
