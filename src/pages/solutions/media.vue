<style lang="sass" src="./solutions.sass" scoped></style>

<template lang="pug">
layout(:colors="colorSet")
  .container.hero-inner(slot="hero")
    .info
      .title 音视频解决方案
      .description 随着网络基建的飞速发展，移动终端的全面普及，使得音视频内容消费爆发式的增长，大众对于随时随地即时播放高品质音视频的需求日益强烈。直播的火爆更加速了视频行业的发展，人们可以不再只关注别人的光环, 而能有更多的机会让别人也喜欢上自己。
      .buttons
        up_button(:color="colorSet.end", type="major", url="/contact") 联系我们
    .icon
      icon
  template(slot="page")
    .section-solutions
      .container
        .solutions
          .item
            .img: img(src="./assets/av-icon-1.svg")
            .title 互动直播
            .description 通过智能调度、链路探测、追帧和处理以及协议优化将延迟控制在 5s 以内，可稳定快速的接入视频直播服务。
          .item
            .img: img(src="./assets/av-icon-2.svg")
            .title 视频播放平台
            .description 借助强大处理能力、海量存储及稳定快速的内容分发网络，为用户提供专业可靠的点播平台和应用解决方案。
          .item
            .img: img(src="./assets/av-icon-3.svg")
            .title 音频 FM
            .description 不限带宽就近上传，减少用户源站上行带宽占用，海量音频零时延处理，海量文件存储，流量用多少存储免多少。
    .section-features
      .container
        .main-title 我们的优势
        .main-description 集视频接入、分发与处理的一站式服务解决方案，全网加速较传统 CDN 更快 10%
        .item
          .left
            img(src="./assets/av-feature-1.svg")
          .right
            .title 更稳定、快速的播放体验
            .description 实时探测接入及分发线路，优选节点路径，监测源站状况，保障链路的畅通和无缝切换，提供稳定、快速的播放体验。
        .item
          .left
            .title 支持 P2P 协议
            .description 基于 Adobe 研发的 P2P 协议，包括握手、NAT 打洞、数据传输等，创造稳定易用、 经济安全的用户体验。
          .right
            img(src="./assets/av-feature-2.svg")
        .item
          .left
            img(src="./assets/av-feature-3.svg")
          .right
            .title 实时性能监控
            .description 实时带宽、流量查询，全平台自助化查询，日志分析及下载支持，时刻掌控业务全局。
    .section-clients
      .container
        .main-title 他们都在使用又拍云
        .main-description 加速的不仅仅是网络，而是整个时代，而同样的时代，演绎着不同的故事...
      .clients
        .item: img(src="/static/logos/mangguo-grey.png")
        .item: img(src="/static/logos/zhangyu-grey.png")
        .item: img(src="/static/logos/zjws-grey.png")
        .item: img(src="/static/logos/ezviz-grey.png")
        .item: img(src="/static/logos/doubanfm-grey.png")
        .item: img(src="/static/logos/ximalaya-grey.png")
        .item: img(src="/static/logos/qingting-grey.png")
        .item: img(src="/static/logos/changba-grey.png")
    more(:color="colorSet.mid")
</template>

<script>
import layout from '../../components/layout'
import colors from '../../services/colors'
import more from './more'
import icon from './hero_icons/av_icon'

export default {
  data () {
    return {
      colorSet: colors.collection.green
    }
  },
  head: {
    title: { inner: '音视频解决方案，快速、优质的流媒体处理和加速服务- 又拍云' },
    meta: [
      { name: 'keywords', content: '音视频编解码、音视频开发、音视频转码、流媒体直播系统、视频流媒体平台', id: 'kw' },
      { name: 'description', content: '又拍云音视频解决方案，集视频直播、点播、分发加速、音视频转码、美颜、连麦、内容保护、视频鉴黄等于一身的云服务平台，为用户提供快速、优质的视频流媒体加速服务。', id: 'desc' }
    ]
  },
  components: { layout, more, icon }
}
</script>
