<style lang="sass" src="./product.sass" scoped></style>

<template lang="pug">
layout(:colors="colorSet")
  .container.hero-inner(slot="hero")
    .info
      .title 云处理 UPS
      .description 又拍云处理（ UPYUN Process Service，简称 UPS），基于云储存和 CDN，针对多媒体数据（图片、音视频）提供图片缩放、图片水印、图片格式转换、音视频转码、视频水印、视频切片等多样灵活的多终端、多规格内容输出加工服务。
      .buttons
        up_button(:color="colorSet.end", type="major") 免费试用
        up_button 查看价格
      .price 图片处理完全免费，新注册用户音视频处理免费试用 7 天。
    .icon.ups
      img(src="./assets/ups_large.svg")
  template(slot="page")
    .section-fetures
      .container
        .main-title 产品特性
        .features
          .item
            img(src="./assets/ups-icon-1.svg")
            .title 稳定、可靠
            .description 每天超9千万次的作图和音视频处理请求，服务可靠性达 99.9999% ，提供稳定、可靠的云处理功能。
          .item
            img(src="./assets/ups-icon-2.svg")
            .title 功能丰富
            .description 支持图片缩放、水印、旋转、裁剪以及音视频转码率、转格式、切片等，轻松满足所有常用内容加工需求。
          .item
            img(src="./assets/ups-icon-3.svg")
            .title 易于使用
            .description 分别提供针对访问和上传场景作图需求的处理方式，将原图进行多规格输出，便于在不同场景下灵活应用。
          .item
            img(src="./assets/ups-icon-4.svg")
            .title SDK 集成
            .description 提供 iOS/Android 播放器 SDK，可快速开发音视频播放移动端应用，实现图片视频合成及播放。
          .item
            img(src="./assets/ups-icon-5.svg")
            .title 经济实惠
            .description 免费的图片处理，按需付费的音视频处理，与传统购置硬件相比，极大的降低了成本。
          .item
            img(src="./assets/ups-icon-6.svg")
            .title 完美结合
            .description 专为配合存储与 CDN 使用而设计，为多种应用场景提供完整的存储、图片音视频处理和加速分发解决方案。
    .section-hero
      .container
        .main-title 图片处理
        .description 通过缩略图版本和参数的 URL 作图方式
          br
          | 可轻松针对原图进行处理，提供多终端、多图片样式的输出支持
          br
          | 让企业专注于自己的业务，图片展示交给它就好了
        img.hero-img(src="./assets/ups_hero.png", width=935, height=439)
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
        .scenes
          .item
            .img
              img(src="./assets/ups-sence-1.svg")
            .title 图片类网站/APP
            .description 丰富的图片处理功能基于超大规模处理集群，结合 CDN 轻松应对不同的终端和千变万化的内容分发需求。
          .item
            .img
              img(src="./assets/ups-sence-2.svg")
            .title 视频播放平台
            .description 借助音视频处理服务，可适应不同终端、不同网络状况的清晰度规格，配合播放器 SDK 快速构建企业服务。
          .item
            .img
              img(src="./assets/ups-sence-3.svg")
            .title 在线教育平台
            .description 又拍云音视频处理服务配合云存储和 CDN，实现音视频文件上传加速、音视频转码、全网分发。
    section_pricing(selection="ups", :color="colorSet.mid")
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
      colorSet: colors.collection.purple
    }
  },
  head: {
    title: { inner: '云处理' }
  },
  components: { layout, section_help, section_pricing }
}
</script>
