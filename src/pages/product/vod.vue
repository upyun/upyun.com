<style lang="sass" src="./product.sass" scoped></style>

<template lang="pug">
layout(:colors="colorSet")
  .container.hero-inner(slot="hero")
    .info
      .title 点播
      .description 又拍云点播（UPYUN Video on Demand）集音视频上传、分发加速、转码、剪辑、切片处理于一体的一站式音视频点播解决方案。借助强大处理能力、海量存储及稳定快速的内容分发网络，为用户提供专业可靠的点播平台和应用解决方案。
      .buttons
        up_button(:color="colorSet.end", type="major") 免费试用
        up_button 查看价格
    .icon
      img(src="./assets/vod_large.svg")
  template(slot="page")
    .section-fetures
      .container
        .main-title 产品特性
        .features
          .item
            img(src="./assets/vod-icon-1.svg")
            .title 完美结合存储
            .description 支持将源站数据存储在又拍云存储中，并提供使用流量 1:1 的免费存储空间，更方便，成本更低。
          .item
            img(src="./assets/vod-icon-2.svg")
            .title 极致加速体验
            .description 实时探测线路进行优选，针对多源链路进行负载均衡，保障链路的畅通和无缝切换，使加速体验一路飙升。
          .item
            img(src="./assets/vod-icon-3.svg")
            .title 支持分段缓存
            .description 针对大文件（如 MP4、FLV 音视频文件、应用安装包等）进行分段缓存，可提高文件缓存命中率，节省回源带宽。
          .item
            img(src="./assets/vod-icon-4.svg")
            .title 丰富的细粒度统计
            .description 实时带宽、流量查询，全平台自助化查询，日志分析及下载支持，时刻掌控业务全局。
          .item
            img(src="./assets/vod-icon-5.svg")
            .title 强悍的音视频处理
            .description 支持音视频转码、剪辑、拼接、切片，视频水印、视频截图等功能，海量音频零时延处理，减少开发和设备成本。
          .item
            img(src="./assets/vod-icon-6.svg")
            .title 丰富的 API
            .description 提供了丰富的管理 API，使企业运维系统能够高效接入，大大减少运维和沟通成本。
    up_gradient.section-2-parts(:colors="colorSet")
      .inner
        .container
          .left
            .main-title 音视频处理
            .description 如果是音视频文件，只需要将文件上传到又拍云
              br
              | 视频转码、音频转码、HLS 切片、视频截图、视频水印、元信息获取通过我们的 API 都能轻松搞定
          .right
            img(src="./assets/ups-parts-icon-1.svg", style="left: 80px; top: 342px;")
            img(src="./assets/ups-parts-icon-2.svg", style="left: 180px; top: 182px;")
            img(src="./assets/ups-parts-icon-3.svg", style="left: 322px; top: 292px;")
            img(src="./assets/ups-parts-icon-4.svg", style="left: 462px; top: 224px;")
    .section-scenes
      .container
        .main-title 应用场景
        .main-description 一站式全网加速服务 = 存储 + CDN + 云处理
        .scenes
          .item
            .img
              img(src="./assets/vod-sence-1.svg")
            .title 广播电视
          .item
            .img
              img(src="./assets/vod-sence-2.svg")
            .title 视频播放平台
          .item
            .img
              img(src="./assets/vod-sence-3.svg")
            .title 在线教育
    section_pricing(selection="vod", :color="colorSet.mid")
    section_help(:color="colorSet.mid")
</template>

<script>
import layout from '../../components/layout'
import colors from '../../services/colors'
import section_help from './section_help'
import section_pricing from './section_pricing'

export default {
  data () {
    return {
      colorSet: colors.collection.blue
    }
  },
  head: {
    title: { inner: '点播云' }
  },
  components: { layout, section_help, section_pricing }
}
</script>
