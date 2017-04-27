<style lang="sass" src="./products.sass" scoped></style>

<style lang="sass" scoped>
  @import "../../assets/susy"
  @import "../../assets/animations"
  .section-sms
    color: white
    padding: 56px 0 80px
    height: 500px
    background-color: #ffffff
    background: url('./assets/sms-instruction-bg.png') center no-repeat
    background-size: cover
    .container
      width: 950px
      .main-title
        color: white
      .procedure
        margin-top: 60px
        .item
          +gallery(4 of 12 4)
          text-align: center
          img
            display: block
            margin: 0 auto
          .instruction
            font-size: 20px
            margin: 16px 0 15px
            font-weight: 400
</style>

<template lang="pug">
layout(:colors="colorSet")
  .container.hero-inner(slot="hero")
    .info
      .title 短信服务
      .description 又拍云短信服务，提供企业级短信送达服务，业务提醒、验证码、营销短信，秒级送达，送达率＞99%。三网合一，全网覆盖，采用专用通道，为您的每一条短信负责。
      .buttons
        up_button(:color="colorSet.end", type="major", url="https://sms.upyun.com", target="_blank") 立即使用
        up_button(url="#section-pricing") 查看价格
    .icon.sms
      icon
  template(slot="page")
    .section-fetures
      .container
        .main-title 产品特性
        .features
          .item
            img(src="./assets/sms-icon-1.svg")
            .title 全网覆盖
            .description 中国移动、中国联通、中国电信三网合一，满足跨网发送的需求。
          .item
            img(src="./assets/sms-icon-2.svg")
            .title 送达率 ＞ 99%
            .description 专属 10690 通道，多通道智能调度，降低屏蔽率，保证短信高送达率。
          .item
            img(src="./assets/sms-icon-3.svg")
            .title 5 秒可达
            .description 专属通道，高效优质，让您的短信可在 3-5 秒内送达。
          .item
            img(src="./assets/sms-icon-4.svg")
            .title 短信管理平台 + API 接口
            .description 提供短信管理平台与 API 接口双渠道，一键导入，批量发送，能够根据业务动态发送短信。
          .item
            img(src="./assets/sms-icon-5.svg")
            .title 免审签名通道
            .description 在普通短信包之外，更有免审短信包，选择更多，计费更灵活，满足您的刚需场景。
          .item
            img(src="./assets/sms-icon-6.svg")
            .title 7 × 24 小时管家式服务
            .description 又拍云 7 × 24 小时的全天候管家式服务，随时为您答疑解惑。
    .section-scenes
      .container
        .main-title 应用场景
        .scenes
          .item
            .img
              img(src="./assets/sms-sence-1.svg")
            .title 验证码类短信
            .description 通过短信将验证码发送到用户手机上，安全有效的完成用户信息验证。适用于注册登录验证、找回密码、支付验证等场景。
          .item
            .img
              img(src="./assets/sms-sence-2.svg")
            .title 通知类短信
            .description 通过发送短信的形式将企业的产品，服务等信息传递给手机用户，达到广而告之的目的。适用于服务通知、物流通知、系统通知等场景。
          .item
            .img
              img(src="./assets/sms-sence-3.svg")
            .title 营销类短信
            .description 通过发送短信的形式将促销活动，节日祝福等信息传递给用户，更好的维系客户。适用于会员服务、客户关怀、促销活动等场景。
    .section-sms
      .container
        .main-title 使用说明
        .procedure
          .item
            img(src="./assets/sms-instruction-1.svg")
            .instruction 登录/注册又拍云账号
          .item
            img(src="./assets/sms-instruction-2.svg")
            .instruction 创建模板，填写短信内容
          .item
            img(src="./assets/sms-instruction-3.svg")
            .instruction 发送短信，秒级送达
    section_pricing(selection="sms", :color="colorSet.mid")
    section_help(selection="sms", :color="colorSet.mid")
</template>

<script>
import layout from '../../components/layout'
import colors from '../../services/colors'
import section_help from './section_help'
import section_pricing from './section_pricing'
import icon from './hero_icons/sms_icon'

export default {
  data () {
    return {
      colorSet: colors.collection.green_sms
    }
  },
  // head: {
  //   title: {
  //     inner: '云处理 - 实时高效图片处理,音视频处理'
  //   },
  //   meta: [
  //     { name: 'keywords', content: '云处理,音视频处理,图片处理,音视频转解码', id: 'kw' },
  //     { name: 'description', content: '又拍云依托超大规模处理集群，提供多种图片处理、异步音视频处理及实时音频处理功能，有效帮助用户减少开发成本。', id: 'desc' }
  //   ]
  // },
  components: { layout, section_help, section_pricing, icon }
}
</script>
