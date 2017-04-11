<style lang="sass" src="./products.sass" scoped></style>
<style lang="sass" scoped>
  @import "../../assets/susy"
  @import "../../assets/animations"
  .section-certificate
    padding: 55px 0 48px;
    height: 560px;
    background-color: #ffffff;
    background: url('./assets/certificate-type-bg.png') center no-repeat;
    background-size: cover
    .main-title
      color: #ffffff;
    .scenes
      padding: 0px 70px;
      margin-top: 70px;
      .item
        +gallery(4 of 12 4)
        text-align: center
        height: 320px
        border-radius: 6px
        background-color: #ffffff
        position: relative;
        .top
          width: 80px;
          height: 80px;
          border-radius: 40px;
          background-color: #ffffff;
          position: absolute;
          top: -40px;
          left: 50%;
          margin-left: -40px;
        .top-dv-icon
          border: 4px solid #ff4d64
          &:before
            content: ''
            display: block
            width: 80px
            height: 80px
            background: url('./assets/certificate-icon-type-1.svg')
            background-size: 100% 100%
            position: relative
            left: 1px
        .top-ov-icon
          border: 4px solid #ff6162
          &:before
            content: ''
            display: block
            width: 80px
            height: 80px
            background: url('./assets/certificate-icon-type-2.svg')
            background-size: 100% 100%
            position: relative
            left: -3px
        .top-ev-icon
          border: 4px solid #ffb492
          &:before
            content: ''
            display: block
            width: 80px
            height: 80px
            background: url('./assets/certificate-icon-type-3.svg')
            background-size: 100% 100%
            position: relative
            left: -4px
        &:nth-child(1)
          box-shadow: 0px 0px 6px #ff4d64
        &:nth-child(2)
          box-shadow: 0px 0px 6px #ff6162
        &:nth-child(3)
          box-shadow: 0px 0px 6px #ffb492
        .item-name
          font-size: 20px;
          font-weight: bold
          margin-top: 60px;
        .star-line
          color: #ff4d64
          span
            font-size: 18px;
            font-weight: bold;
          .star
            display: inline-block;
            width: 20px
            height: 20px
            position: relative
            top: 2px
            background: url('./assets/star.svg') no-repeat;
            background-size: 100% 100%;
        ul
          list-style: none;
          padding: 0;
          li
            color: #97a1ab;
            font-size: 16px;
            margin-top: 10px;
  .section-scenes
    padding-bottom: 30px
    .scenes .item
      +gallery(3)
      margin-bottom: 40px
</style>

<template lang="pug">
layout(:colors="colorSet")
  .container.hero-inner(slot="hero")
    .info
      .title SSL 证书服务
      .description 又拍云 SSL 证书服务（SSL Certificates Service），提供 SSL 证书的申购、管理、部署等功能。与国际顶级 CA 机构合作，证书类型丰富，操作流程简单方便，为用户提供一站式 HTTPS 安全解决方案。
      .buttons
        up_button(:color="colorSet.mid", type="major", url="https://console.upyun.com/toolbox/createCertificate/" target="_blank") 立即申购
        up_button(url="http://docs.upyun.com/cdn/ssl/#_9" target="_blank") 查看价格
      p 含两款免费 DV SSL 证书
      p OV & EV SSL 证书限时优惠，低至75 折
    .icon
      icon
  template(slot="page")
    .section-fetures
      .container
        .main-title 产品特性
        .features
          .item
            img(src="./assets/certificate-icon-3.svg")
            .title 国际 CA 机构合作
            .description 又拍云提供了 Symantec、GeoTrust、TrustAsia、Let’s Encrypt 的各类 DV、OV、EV SSL 证书的申购，保证了证书的强度和可靠性, 同时支持目前所有主流的浏览器和移动设备。
          .item
            img(src="./assets/certificate-icon-2.svg")
            .title 免费申请
            .description 又拍云提供了两款证书的免费申请方案，用户可免费申请 TrustAsia、Let’s Encrypt 的 DV SSL 单域名证书，帮助用户零成本实现全站 HTTPS。
          .item
            img(src="./assets/certificate-icon-5.svg")
            .title 流程简捷
            .description 用户只需提交域名，填写必要信息，即可完成证书的申购，步骤简单方便，无需人工协助，申购周期大大缩短。
          .item
            img(src="./assets/certificate-icon-4.svg")
            .title 一键部署
            .description 用户可自愿选择将申购的证书一键部署到又拍云 CDN，更快捷的完成网站 HTTP 到 HTTPS 的转换。
          .item
            img(src="./assets/certificate-icon-1.svg")
            .title 管理方便
            .description 证书自助化管理、集中监测，申购、部署都无需人工协助，公钥、私钥更加安全，做到让用户省心、放心，提升工作效率。
          .item
            img(src="./assets/certificate-icon-6.svg")
            .title 提升网站搜索排名
            .description Google、Baidu Google、Baidu 已调整其搜索引擎算法，将采用 HTTPS 加密的网站在搜索排名中更靠前。因此网站采用 HTTPS 协议，可吸引更多的用户进行访问，提升网站的价值，增创营收。
    .section-certificate
      .container
        .main-title 证书类型
        .scenes
          .item
            .top.top-dv-icon
            p.item-name 域名型（DV）
            p.star-line
              span 安全性：
              i.star
              i.star
              i.star
            ul
              li 验证域名所有权
              li 无需人工参与
              li 极速签发
              li 浏览器普通加锁标记
          .item
            .top.top-ov-icon
            p.item-name 企业型（OV）
            p.star-line
              span 安全性：
              i.star
              i.star
              i.star
              i.star
            ul
              li 人工验证企业身份
              li 证书包含企业信息
              li 用户更高层次的信任
              li 浏览器普通加锁标记
          .item
            .top.top-ev-icon
            p.item-name 增强型（EV）
            p.star-line
              span 安全性：
              i.star
              i.star
              i.star
              i.star
              i.star
            ul
              li 最高级别人工验证
              li 最高级别安全保证
              li 最理想的 SSL 解决方案
              li 浏览器绿色安全地址栏
    .section-scenes
      .container
        .main-title 应用场景
        .scenes
          .item
            .img: img(src="./assets/certificate-sence-1.svg")
            .title 个人/微企
            .description 个人网站博客、小微企业、API 服务等，可选择 DV SSL 证书。
          .item
            .img: img(src="./assets/certificate-sence-2.svg")
            .title 传统行业
            .description 企业官网、电商、教育、医疗、公共部门等，可选择 OV SSL 证书。
          .item
            .img: img(src="./assets/certificate-sence-3.svg")
            .title 金融机构
            .description 银行、金融、保险、电子商务、大中型企业、政府机关等，可选择 EV SSL 证书。
          .item
            .img: img(src="./assets/certificate-sence-4.svg")
            .title CDN
            .description 可与又拍云 CDN 产品相结合，享受最优质的 HTTPS 加速解决方案。
    section_pricing(selection="certificate", :color="colorSet.mid")
    section_help(selection="certificate", :color="colorSet.mid")
</template>

<script>
import layout from '../../components/layout'
import colors from '../../services/colors'
import section_pricing from './section_pricing'
import section_help from './section_help'
import icon from './hero_icons/certificate_icon'

export default {
  data () {
    return {
      colorSet: colors.collection.red,
      animated: false
    }
  },
  head: {
    title: {
      inner: 'SSL 证书 - 安全、便捷，一站式申购、管理 - 又拍云'
    },
    meta: [
      { name: 'keywords', content: 'SSL 证书,Symantec,GeoTrust,TrustAsia,Let’s Encrypt,全站 HTTPS', id: 'kw' },
      { name: 'description', content: '申购、管理一站式服务，快速实现全站 HTTPS。', id: 'desc' }
    ]
  },
  components: { layout, section_help, section_pricing, icon }
}
</script>
