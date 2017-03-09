<style lang="sass" src="./product.sass" scoped></style>

<template lang="pug">
layout(:colors="colorSet")
  .container.hero-inner(slot="hero")
    .info
      .title 云存储 USS
      .description 又拍云存储（ UPYUN Storage Service，简称 USS），是面向互联网应用的对象存储服务，具有使用简单、高可靠、高安全等特性，满足海量数据上传、高 IO（高访问）、高可用需求，满足大数据企业应用背景下的数据传输、处理、存储、分发与容灾需求。
      .buttons
        up_button(:color="colorSet.end", type="major", :url="$links.console", target="_blank") 免费试用
        up_button(url="#section-pricing") 查看价格
      .price 0.0043 元/GB/天，新注册用户免费试用 7 天
    .icon
      img(src="./assets/uss_large.svg")
  template(slot="page")
    .section-fetures
      .container
        .main-title 产品特性
        .features
          .item
            img(src="./assets/uss-icon-1.svg")
            .title 海量存储
            .description 又拍云存储单存储集群支持 PB 级容量，单数据中心支持 EB 级容量，全网轻松应对 ZB 级的异构化数据。
          .item
            img(src="./assets/uss-icon-2.svg")
            .title 安全、耐久
            .description 将一份数据写三份，支持跨数据中心存储，多层级 ACL 及 DDOS 防护，确保业务的稳定，持久可信。
          .item
            img(src="./assets/uss-icon-3.svg")
            .title 超低成本
            .description 支持按使用量付费，并提供搭配 CDN 使用流量 1:1 的免费存储容量，使用户存储成本更低。
          .item
            img(src="./assets/uss-icon-4.svg")
            .title 方便接入，一键迁移
            .description 特色的镜像迁移功能，可一键通过 CDN 将源站资源迁移到又拍云存储，另外支持文件拉取、文件压缩解压缩、 FTP 功能，让云存储接入和使用更简单。
          .item
            img(src="./assets/uss-icon-5.svg")
            .title 灵活上传
            .description 提供自由扩展的 RESTFul API 和多种语言的 SDK 包，支持表单/分块/流式/FTP 上传，断点续传，以便用户轻松集成。
          .item
            img(src="./assets/uss-icon-6.svg")
            .title 简单易用
            .description 又拍云将产品功能整合，提供集 CDN、云存储、云处理于一体的场景化解决方案，化繁为简，接入方便。
    .section-scenes
      .container
        .main-title 应用场景
        .scenes
          .item
            .img
              img(src="./assets/uss-sence-1.svg")
            .title 动静态资源分离
            .description 随着静态文件的不断增加，为了降低 Web 服务器负载，可将静态文件全部放在云存储，从此无需考虑存储容量及架构的升级。
          .item
            .img
              img(src="./assets/uss-sence-2.svg")
            .title 海量文件存储
            .description 适用于图片、音视频、应用安装包等海量文件存储，配合  CDN 加速服务为互联网应用提供最佳体验。
          .item
            .img
              img(src="./assets/uss-sence-3.svg")
            .title 数据归档与备份
            .description 在大型企业或科研机构中，通过与备份软件结合，可提供更具成本效益、更低的集中备份方案。
    section_pricing(selection="uss", :color="colorSet.mid")
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
      colorSet: colors.collection.orange
    }
  },
  head: {
    title: {
      inner: '云存储 - 安全可靠对象存储,大规模数据存储'
    },
    meta: [
      { name: 'keywords', content: '云存储,图片存储,视频存储,存储安全,对象存储,文件存储', id: 'kw' },
      { name: 'description', content: '又拍云基于大规模高效云存储集群和分布式文件系统为用户提供图片存储，音视频存储等静态文件云存储服务，多种文件上传方式，安全可靠。', id: 'desc' }
    ]
  },
  components: { layout, section_help, section_pricing }
}
</script>
