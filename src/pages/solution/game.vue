<style lang="sass" src="./solution.sass" scoped></style>

<template lang="pug">
layout(:colors="colorSet")
  .container.hero-inner(slot="hero")
    .info
      .title 游戏行业解决方案
      .description 娱乐从未如此简单, 各种各样的设备以及几乎无处不在的网络覆盖, 再加上动作捕捉与虚拟现实, 让天南地北的人都有如共处一室, 游戏随时随地，沟通将变得触手可及。
      .buttons
        up_button(:color="colorSet.end", type="major", url="/contact") 联系我们
    .icon
      icon
  template(slot="page")
    .section-solutions
      .container
        .solutions
          .item
            .img: img(src="./assets/game-icon-1.svg")
            .title 手机游戏
            .description 采用 TCP 单边加速，并支持标准的 SPDY/3.1、HTTP/2 协议，有效降低网络时延，提升移动端速度。
          .item
            .img: img(src="./assets/game-icon-2.svg")
            .title 客户端游戏
            .description 支持针对大文件（如游戏安装包）进行分段缓存，可提高文件的缓存命中率，节省回源带宽。
          .item
            .img: img(src="./assets/game-icon-3.svg")
            .title 网页游戏
            .description 采用专业 DDoS 防护设备，辅以冗余带宽储备，抵御 SYN FLOOD、UDP FLOOD、CC 等高并发攻击。
    .section-features
      .container
        .main-title 我们的优势
        .main-description 又拍云自主研发的全网加速解决方案，全站加速较传统 CDN 更快 10%
        .item
          .left
            img(src="./assets/game-feature-1.svg")
          .right
            .title 更高覆盖率
            .description 又拍云 CDN 提供优质节点资源，轻松实现跨运营商访问，满足玩家就近接入的需求，加载时间更短，访问用户游戏更流畅
        .item
          .left
            .title 更好的稳定性
            .description TB 级的带宽资源预留，应对游戏高峰时段带宽吃紧，保障稳定性的同时提升响应速度，从容应对大量玩家同时在线的访问高峰。
          .right
            img(src="./assets/game-feature-2.svg")
        .item
          .left
            img(src="./assets/game-feature-3.svg")
          .right
            .title 实时统计监控
            .description 丰富的数据统计分析、方便的日志下载和 7*24 小时全网实时性能监控，时刻掌控业务全局。
    .section-clients
      .container
        .main-title 他们都在使用又拍云
        .main-description 加速的不仅仅是网络，而是整个时代，而同样的时代，演绎着不同的故事...
      .clients
        .item: img(src="/static/logos/kingnet-grey.png")
        .item: img(src="/static/logos/xd-grey.png")
        .item: img(src="/static/logos/dianhun-grey.png")
        .item: img(src="/static/logos/snail-grey.png")
    more(:color="colorSet.mid")
</template>

<script>
import layout from '../../components/layout'
import colors from '../../services/colors'
import more from './more'
import icon from './hero_icons/game_icon'

export default {
  data () {
    return {
      colorSet: colors.collection.blue
    }
  },
  head: {
    title: {
      inner: '又拍云游戏解决方案 - 游戏安全防护,游戏网络加速'
    },
    meta: [
      { name: 'keywords', content: '游戏云,游戏托管,手游,游戏解决方案', id: 'kw' },
      { name: 'description', content: '又拍云基于全球CDN节点资源覆盖，智能适配多种游戏网络环境，全网HTTPS加密，完善的网络防护机制，保障游戏安全及流畅运行。', id: 'desc' }
    ]
  },
  components: { layout, more, icon }
}
</script>
