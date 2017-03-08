<style lang="sass" src="./league.sass" scoped></style>

<template lang="pug">
layout(v-bind:class="{'league-banner': true}")
  div(slot="hero")
    //- .cover
  div.league(slot="page")
    .global-modal#leagueApplyModal
      .global-modal-content
        .global-modal-header
          .inline-block
            .item.active
              p 1、登录
            .item
              p 2、填写申请表
            .item
              p 3、完成
        .global-modal-body
          .alert-container(v-bind:class="{'alert-show': alertShow}")
            .alert(v-bind:class="{'alert-success': alertSuccess, 'alert-error': alertError}")
          .panel.active
            form.login#loginForm
              .form-group
                input(type='text', name='username', placeholder='又拍云账号', autocomplete='off', disableautocomplete, autofocus)
                i.login-input-icon.league-username-icon
              .form-group
                input(type='password', name='password', placeholder='又拍云密码', autocomplete='off', disableautocomplete)
                i.login-input-icon.league-password-icon
              .form-group.lost-pw
                a(href='https://console.upyun.com/lostpass/', target='_blank') 忘记密码
              a.league-form-btn.blue#login(href='javascript:void(0);') 登 录
              a.league-form-btn.white(href='https://console.upyun.com/register/', target='_blank') 免费注册
          .panel
            form.apply#applyForm
              .form-group
                label(for='username') 又拍云帐号：
                input#username(type='text', name='username', autocomplete='off', disableautocomplete)
                span.tip 请输入正确的又拍云帐号
              .form-group
                label(for='website') 网站地址：
                input#website(type='text', name='website', autocomplete='off', disableautocomplete)
                span.tip 请输入正确的网站地址
              .form-group
                label(for='realname') 联系人：
                input#realname(type='text', name='realname', autocomplete='off', disableautocomplete)
                span.tip 请输入正确的联系人姓名
              .form-group
                label(for='mobile') 联系手机：
                input#mobile(type='text', name='mobile', autocomplete='off', disableautocomplete)
                span.tip 请输入正确的手机号
              .form-group
                label(for='email') 联系邮箱：
                input#email(type='text', name='email', autocomplete='off', disableautocomplete)
                span.tip 请输入正确的邮箱
              .form-group
                label(for='qq') 联系 QQ：
                input#qq(type='text', name='qq', autocomplete='off', disableautocomplete)
                span.tip 请输入正确的QQ
              a.league-form-btn.blue#apply(href='javascript:void(0);') 提 交
              a.league-form-btn.white#cancel(href='javascript:void(0);') 取 消
          .panel
            .apply-success
              img(src='./assets/league/success.png')
    .leagueContainer
      section.banner
        p
          | 又拍云联盟是又拍云推出的开发者帮助计划
          br
          | 对开发者提供完善的云存储、CDN 等服务，加速个人网站、博客、APP 等项目
      section.one
        .title
          h1
            span.orange 加入又拍云联盟
            | &nbsp;可获得
          .inline-block
            .item
              p.orange 免费流量&存储
              p 成为又拍云联盟的用户，一年内每月可免费使用 10GB 存储空间及 15GB 流量。
            .item
              p.orange 访问加速
              p 借助又拍云全国的数据缓存节点，实现终端设备就近、同网络环境上传/下载，极大提升访问速度。
            .item
              p.orange 开发加速
              p 提供图片的自定义缩略图、水印；提供音视频的转码、压缩处理，助力快速开发。
          .notice
            span.orange 注意：
            | 若又拍云联盟用户去除又拍云 LOGO 链接，则丧失所有权益。流量赠送将被终止，且后续不能再申请
      section.two
        .title
          h1
            span.orange 如何加入
            | 又拍云联盟
          .inline-block
            .item
              .icon
              p.orange 注册成为又拍云用户（已有账号请跳过此步骤）
              a.btn-league(href='https://console.upyun.com/register/', target='_blank') 点击注册
            .item
              .icon
              p.orange 获取又拍云 LOGO 资源，在您的网站或应用底部添加又拍云 LOGO 链接
              a.btn-league 获取 LOGO
              ul
                .logo-size
                  .arrow
                  li
                    a.orange(href='/static/90X45.png', download="upyun_logo_90x45", target='_blank') 90X45
                  li
                    a.orange(href='/static/120X60.png', download="upyun_logo_120x60", target='_blank') 120X60
                  li
                    a.orange(href='/static/180X90.png', download="upyun_logo_180x90", target='_blank') 180X90
            .item
              .icon
              p.orange 填写申请表单，立即在线申请
              a.btn-league.apply-modal(@click="applyLeague") 立即申请
    .footer
      .contact
        p &bull; 又拍云联盟事宜咨询 & 求助请联系邮箱：lianmeng@upyun.com
        p &bull; 又拍云保留本次活动的最终解释权。
</template>

<script>
import layout from './layout'
import leagueInit from './league.js'

export default {
  data () {
    return {
      alertShow: false,
      alertSuccess: false,
      alertError: false,
    }
  },
  components: { layout },
  mounted () {
  },
  methods: {
    applyLeague () {
      leagueInit(this);
    },
  },
  head: {
    title: {
      inner: '又拍云联盟 - 开发者帮助计划，为开发者加速',
    },
    meta: [
      { name: 'keywords', content: '开发者,网站加速,免费流量,免费CDN,免费云存储' },
      { name: 'description', content: '又拍云联盟是由又拍云推出的开发者帮助计划，对开发者提供免费且完善的云存储、CDN等服务，加速个人网站、博客、APP等项目' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'renderer', content: 'webkit' }
    ]
  }
}
</script>

