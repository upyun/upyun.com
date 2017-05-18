<style lang="sass" src="./section_pricing.sass"></style>

<template lang="pug">
.pricing-module#section-pricing(@click="menuShowing = false")
  .container
    .main-title 产品价格
    .sub-title(v-if="nowSelection !== 'certificate' && nowSelection !== 'sms' && nowSelection !== 'audit'") 按需计费，次日结算
    .select
      .btn(@click.stop="menuShowing = !menuShowing")
        .icon(:class="nowSelection")
        span(:style="{ color }") {{ name }}
        svg.arrow(width='12', height='6', viewbox='0 0 12 6', xmlns='http://www.w3.org/2000/svg')
          path(d='M12 0L6 6 0 0z', :fill='color', fill-rule='evenodd')
      .menu(v-if="menuShowing", @click="menuShowing = false")
        .item(v-for="(name, key) in names", @click="nowSelection = key", v-if="key !== nowSelection")
          .icon(:class="key")
          | {{ name }}
    .content
      .top
        router-link.to-product(:to="{ path: `/products/${nowSelection}` }", v-if="nowSelection !== selection") 查看产品说明
      .inner
        template(v-if="nowSelection === 'cdn' || nowSelection === 'vod'")
          .title(:style="{ color }") CDN 服务价格说明
          table
            thead
              tr
                th.col-1 计费项
                th 价格
            tbody
              tr
                td 流入流量
                td 免费
              tr
                td 流出流量
                td 国内：0.29 元/GB&nbsp;&nbsp;|&nbsp;&nbsp;亚太：0.89 元/GB&nbsp;&nbsp;|&nbsp;&nbsp;欧美：0.39 元/GB
              tr
                td 静态请求数
                td 免费
              tr
                td 动态请求数
                td 国内：0.02 元/千次&nbsp;&nbsp;|&nbsp;&nbsp;亚太：0.06 元/千次&nbsp;&nbsp;|&nbsp;&nbsp;欧美：0.03 元/千次
          .title(:style="{ color }") HTTPS 服务价格说明
          table
            thead
              tr
                th.col-1 计费项
                th 价格
            tbody
              tr
                td 域名绑定个数
                td 免费
              tr
                td HTTPS 请求数
                td 国内：0.05 元/万次&nbsp;&nbsp;|&nbsp;&nbsp;亚太：0.15 元/万次&nbsp;&nbsp;|&nbsp;&nbsp;欧美：0.07 元/万次
        template(v-if="nowSelection === 'ups' || nowSelection === 'vod'")
          .title(:style="{ color }") 云处理服务价格说明
          table
            thead
              tr
                th.col-1 计费项
                th.col-2 规格/方式
                th 价格
            tbody
              tr
                td(rowspan=4, style="line-height:30px;")
                  | 视频转码<br>HLS 切片<br>视频水印<br>视频剪辑
                td 全高清（画面尺寸 ≥ 1920×1080 ，即宽 * 高 ≥ 2073600）
                td 0.036 元/分钟
              tr
                td 高清（画面尺寸 ≥ 960×720，即 2073600 > 宽 * 高 ≥ 691200 ）
                td 0.017 元/分钟
              tr
                td 标清（画面尺寸 ≥ 640×480，即 691200 > 宽 * 高 ≥ 307200）
                td 0.0068 元/分钟
              tr
                td 流畅（画面尺寸 < 640 × 480，即 宽 * 高 < 307200）
                td 0.0044 元/分钟
              tr
                td 视频截图
                td.center -
                td 0.10 元/千张
              tr
                td 视频拼接
                td.center -
                td 0.10 元/千张
              tr
                td(rowspan=2) 音频转码
                td.center 同步
                td 0.0128 元/分钟
              tr
                td.center 异步
                td 0.0044 元/分钟
              tr
                td 音频剪辑
                td.center 异步
                td 0.0044 元/分钟
              tr
                td 音频拼接
                td.center -
                td 0.10 元/千次
              tr
                td 元信息
                td.center -
                td 0.10 元/千次
          .supplement
            p.supplement-title 注：
            ul.supplement-lists
              li 不同视频规格价格不同，结算时按照宽高像素积大小确定单价，如：画面尺寸为：1440 × 720 ，宽 * 高 = 1036800 ，因此按照高清规格计费。
              li 按时长计费的计费项，是按输出时长进行计算。
        template(v-if="nowSelection === 'uss' || nowSelection === 'vod'")
          .title(:style="{ color }") 云存储服务价格说明
          p 按照每日 CDN 流量使用，实行 1:1 的每日存储空间使用量免费。
          table
            thead
              tr
                th.col-1 存储使用状况
                th.col-2 存储计费值
                th 价格
            tbody
              tr
                td 日存储 ≤ 日流量
                td 无
                td 免费
              tr
                td 日存储 ＞ 日流量
                td 日差值存储（日存储 - 日流量）
                td 0.0043 元/GB
        template(v-if="nowSelection === 'live'")
          .title(:style="{ color }") 直播云服务价格说明
          table
            thead
              tr
                th.col-1 计费项
                th 价格
            tbody
              tr
                td 上行流量
                td 0.86 元/GB
              tr
                td 下行流量
                td 0.43 元/GB
        template(v-if="nowSelection === 'certificate'")
          .title(:style="{ color }") Symantec 证书服务价格说明
          table.fix-width
            thead
              tr
                th 类型
                th 支持
                th 域名个数
                th 价格（元/年）
            tbody
              tr
                td(rowspan="3") 企业型（OV）
                td 标准域名
                td 1
                td 4900
              tr
                td 多个域名
                td 2
                td 9800
              tr
                td 泛域名
                td 1
                td 39900
              tr
                td(rowspan="2") 增强型（EV）
                td 标准域名
                td 1
                td 8000
              tr
                td 多个域名
                td 2
                td 16000
          .title(:style="{ color }") GeoTrust 证书服务价格说明
          table.fix-width
            thead
              tr
                th 类型
                th 支持
                th 域名个数
                th 价格（元/年）
            tbody
              tr
                td(rowspan="3") 企业型（OV）
                td 标准域名
                td 1
                td 2900
              tr
                td 多个域名
                td 5
                td 5600
              tr
                td 泛域名
                td 1
                td 6900
              tr
                td(rowspan="2") 增强型（EV）
                td 标准域名
                td 1
                td 4900
              tr
                td 多个域名
                td 5
                td 9700
          .title(:style="{ color }") TrustAsia 证书服务价格说明
          table.fix-width
            thead
              tr
                th 类型
                th 支持
                th 域名个数
                th 价格（元/年）
            tbody
              tr
                td(rowspan="3") 域名型（DV）
                td 标准域名
                td 1
                td 免费（原价 1900）
              tr
                td 多个域名
                td 5
                td 5000
              tr
                td 泛域名
                td 1
                td 1999
          .title(:style="{ color }") Let’s Encrypt 证书服务价格说明
          table.fix-width
            thead
              tr
                th 类型
                th 支持
                th 域名个数
                th 价格（元/年）
            tbody
              tr
                td 域名型（DV）
                td 标准域名
                td 1
                td 免费
        template(v-if="nowSelection === 'sms'")
          .title(:style="{ color }") 短信资源包价格说明
          table
            thead
              tr
                th.col-1 类型
                th.col-2 短信包价格
                th 单位（元/条）
            tbody
              tr
                td(rowspan=7) 免审签名
                td 480 元 / 8000 条
                td 0.060
              tr
                td 1100 元 / 2W 条
                td 0.055
              tr
                td 2250 元 / 5W 条
                td 0.045
              tr
                td 4300 元 / 10W 条
                td 0.043
              tr
                td 8000 元 / 20W 条
                td 0.040
              tr
                td 15200 元 / 40W 条
                td 0.038
              tr
                td &ge; 40W 条
                td 商务洽谈
              tr
                td(rowspan=7) 普通签名
                td 440 元 / 8000 条
                td 0.055
              tr
                td 1000 元 / 2W 条
                td 0.050
              tr
                td 2000 元 / 5W 条
                td 0.040
              tr
                td 3800 元 / 10W 条
                td 0.038
              tr
                td 7400 元 / 20W 条
                td 0.037
              tr
                td 14400 元 / 40W 条
                td 0.036
              tr
                td &ge; 40W 条
                td 商务洽谈
          .try(v-if="nowSelection === 'sms'")
            up_button(:color="color", url="https://sms.upyun.com", target="_blank") 立即使用
        template(v-if="nowSelection === 'audit'")
          .title(:style="{ color }") 内容识别价格说明
          .audit-center
            h3 联系商务
            p
              span QQ：1257189966
            p
              span 符先生 &nbsp;&nbsp;电话：15088759299
            p
              span 邹先生 &nbsp;&nbsp;电话：13656668361
          .try(v-if="nowSelection === 'audit'")
            up_button(:color="color", url="https://audit.upyun.com", target="_blank") 立即体验
      .bottom(v-if="nowSelection !== 'certificate' && nowSelection !== 'sms' && nowSelection !== 'audit'")
        router-link.more(to="/price_instruction") 查看更多价格说明
        router-link.to-pricing(to="/pricing") 费用计算器
      .bottom(v-if="nowSelection === 'certificate'")
        a(href="http://docs.upyun.com/cdn/ssl/#_9" target="_blank") 查看更多价格说明
</template>

<script>
export default {
  props: ['selection', 'color'],
  data () {
    return {
      nowSelection: '',
      menuShowing: false,
      names: {
        cdn: 'CDN',
        live: '直播云',
        uss: '云存储',
        vod: '点播云',
        ups: '云处理',
        certificate: 'SSL 证书',
        sms: '短信服务',
        audit: '内容识别'
      }
    }
  },
  mounted () {
    this.nowSelection = this.selection
  },
  computed: {
    name () {
      return this.names[this.nowSelection]
    }
  }
}
</script>
