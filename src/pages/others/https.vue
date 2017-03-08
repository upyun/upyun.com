<style lang="sass" src="./https.sass" scoped></style>

<template lang="pug">
layout(class="https-banner")
  div(slot="hero")
    //- .cover
  div(slot="page")
    .wrap
      .header
      section.main
        .do
          p.do-header 应用场景
          p.tip.first-tip 随着网站应用的复杂性提高， 线上业务的苦恼随之而来，为应对业务上的安全问题，
          p.tip.second-tip 越来越多的企业选择 HTTPS 加密访问作为用户信息与业务安全的保障。
          ul.safe
            li 用户访问安全
            li DNS 劫持
            li DNS 污染
          ul.pay
            li 钓鱼网站
            li 支付行为可信
            li 篡改交易信息
          ul.form
            li 提交数据窃听风险
            li 密码泄露
            li XSS 攻击
          ul.ssl
            li 高昂证书费用
            li 定期更新维护
        .introduction
          ul.document
            <li>苹果宣布 2017 年 App Store 中的所用应用都必须使用 HTTPS 加密连接；</li>
            <li>百度、Google 等搜索引擎优先收录 HTTPS 页面并提升排名；</li>
            <li>英美强制要求所有政府网站 2016 年实现全站 HTTPS 加密；</li>
            <li>百度、阿里巴巴等互联网巨头均启用全站 HTTPS 加密；</li>
            <li>新一代 HTTP/2 协议的支持需以 HTTPS 为基础；</li>
        .step
          p.step-header 又拍云 SSL 服务，轻松三步一键开启 HTTPS
          .left
            p 又拍云联合 Let’s Encrypt 推出 SSL 证书申请与管理一站式服务。
            p 无需繁杂流程，一键申请，轻松实现网站与 Web 应用的 HTTPS 加密部署。
            a.link-ssl(href='http://docs.upyun.com/cdn/ssl/#_4' target='_blank')
            p 即将推出 Symantec、GeoTrust 证书
          .right
            p 又拍云 CDN 在 HTTPS 协议的基础上已实现全平台支持 HTTP/2。
            p 支持将 HTTP 通过重定向，强制跳转为 HTTPS 访问。
            a.link-https(href='http://docs.upyun.com/cdn/advanced/#https' target='_blank')
      .footer
        p.header-tip 10 万用户的选择，更安全，更省心
</template>

<script>
import layout from './layout'

export default {
  data () {
    return {
    }
  },
  components: { layout },
  head: {
    title: {
      inner: 'https - 全网加密时代来临',
    },
    meta: [
      { name: 'keywords', content: "https,http/2,SSL证书,Let's Encrypt,免费证书", id: 'kw' },
      { name: 'description', content: '又拍云联合 Let’s Encrypt 推出 SSL 证书申请与管理一站式服务。无需繁杂流程，一键申请，轻松实现网站与 Web 应用的 HTTPS 加密部署。', id: 'desc' }
    ]
  }
}
</script>

