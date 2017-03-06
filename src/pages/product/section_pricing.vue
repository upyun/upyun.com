<style lang="sass" src="./section_pricing.sass"></style>

<template lang="pug">
.pricing-module
  .container
    .main-title 产品价格
    .sub-title 支持按需计费，每日进行结算
    .select
      .btn
        .icon(:class="selection")
        span(:style="{ color }") {{ name }}
        svg.arrow(width='14', height='7', viewbox='0 0 14 7', xmlns='http://www.w3.org/2000/svg')
          path(d='M14 0L7 7 0 0z', :fill='color', fill-rule='evenodd')
    .content
      .top
        router-link.to-product(:to="{ path: `/product/${selection}` }") 查看产品说明
      .inner
        template(v-if="selection === 'cdn' || selection === 'vod'")
          .title(:style="{ color }") CDN 服务价格说明
          table
            thead
              tr
                th 计费项
                th 价格
            tbody
              tr
                td 流入流量
                td 免费
              tr
                td 流出流量
                td 0.29 元/GB
              tr
                td 静态请求数
                td 免费
              tr
                td 动态请求数
                td 0.02 元/千次
          .title(:style="{ color }") HTTPS 服务价格说明
          table
            thead
              tr
                th 计费项
                th 价格
            tbody
              tr
                td 域名绑定个数
                td 免费
              tr
                td HTTPS 请求数
                td 0.05 元/万次
        template(v-if="selection === 'ups' || selection === 'vod'")
          .title(:style="{ color }") 云处理服务价格说明
          table
            thead
              tr
                th 计费项
                th 规格/方式
                th 价格
            tbody
              tr
                td(rowspan=3) 视频转码/HLS 切片/视频水印/视频剪辑
                td 全高清（画面尺寸 ≥ 1920×1080 ，即宽*高 ≥ 2073600）
                td 0.036 元/分钟
              tr
                td 高清（画面尺寸 ≥ 960×720，即 2073600 > 宽*高 ≥ 691200 ）
                td 0.017 元/分钟
              tr
                td 标清（画面尺寸 ≥ 640×480，即 691200 > 宽*高 ≥ 307200）
                td 0.0068 元/分钟
              tr
                td 视频截图
                td -
                td 0.10 元/千张
          table
            thead
              tr
                th 计费项
                th 规格/方式
                th 价格
            tbody
              tr
                td(rowspan=2) 音频转码
                td 同步
                td 0.0128 元/分钟
              tr
                td 异步
                td 0.0044 元/分钟
              tr
                td 音频剪辑
                td 异步
                td 0.0044 元/分钟
        template(v-if="selection === 'uss' || selection === 'vod'")
          .title(:style="{ color }") 云存储服务价格说明
          table
            thead
              tr
                th 存储阶梯
                th 价格
            tbody
              tr
                td 0GB ~ 当日流量使用量
                td 免费
              tr
                td 超出当日流量使用量
                td 0.0043 元/GB
        template(v-if="selection === 'live'")
          .title(:style="{ color }") 直播云服务价格说明
          table
            thead
              tr
                th 计费项
                th 价格
            tbody
              tr
                td 上行流量
                td 0.86 元/GB
              tr
                td 下行流量
                td 0.43 元/GB
      .bottom
        a.more 查看更多价格说明
        router-link.to-pricing(to="/pricing") 费用计算器
</template>

<script>
var names = {
  cdn: 'CDN',
  live: '直播云',
  uss: '云存储',
  vod: '点播云',
  ups: '云处理',
  marketing: '流量营销'
}

export default {
  props: ['selection', 'color'],
  data () {
    return {
    }
  },
  computed: {
    name () {
      return names[this.selection]
    }
  }
}
</script>
