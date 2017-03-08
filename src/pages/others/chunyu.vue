<style lang="sass" src="./chunyu.sass" scoped></style>

<template lang="pug">
layout(v-bind:class="{'chunyu-banner': true}")
  div(slot="hero")
    //- .cover
  div.chunyu(slot="page")
    .global-modal#chunyuApplyModal
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
            form.login.loginForm
              .form-group
                input(type='text', name='username', placeholder='又拍云账号', autocomplete='off', disableautocomplete, autofocus)
                i.login-input-icon.chunyu-username-icon
              .form-group
                input(type='password', name='password', placeholder='又拍云密码', autocomplete='off', disableautocomplete)
                i.login-input-icon.chunyu-password-icon
              .form-group.lost-pw
                a(href='https://console.upyun.com/lostpass/', target='_blank') 忘记密码
              a.chunyu-form-btn.blue.login-action(href='javascript:void(0);') 登 录
              a.chunyu-form-btn.white(href='https://console.upyun.com/register/', target='_blank') 免费注册
          .panel
            form.apply.applyForm
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
                label(for='reference') 推荐人帐号：
                input#reference(type='text', name='reference', autocomplete='off', disableautocomplete, placeholder='选填')
                span.tip 请输入正确的推荐人帐号
              .form-group
                input#agreement(type='checkbox', checked)
                span
                  | 我已完整阅读并同意
                  a(href='/chunyu_tos', target='_blank')|《春雨计划扶持协议》
                br
                span.tip(style="margin-left:0;") 请确认并同意协议
              a.chunyu-form-btn.blue.apply-action(href='javascript:void(0);') 提 交
              a.chunyu-form-btn.white.cancel-action(href='javascript:void(0);') 取 消
          .panel
            .apply-success
              img(src='./assets/chunyu/success.png')
    .global-modal#investApplyModal
      .global-modal-content
        .global-modal-header
          .inline-block
            .item.active(style='width: 50%;')
              p 1、填写申请表
            .item(style='width: 50%;')
              p 2、完成
        .global-modal-body
          .alert-container
          .panel.active
            form.apply.applyForm
              .form-group
                label(for='investor_company') 创投机构：
                input#investor_company(type='text', name='investor_company', autocomplete='off', disableautocomplete)
                span.tip 请输入创投机构名称，不超过25个中文字符
              .form-group
                label(for='investor_name') 创投机构联系人：
                input#investor_name(type='text', name='investor_name', autocomplete='off', disableautocomplete)
                span.tip 请输入机构联系人，不超过10个中文字符
              .form-group
                label(for='investor_phone') 联系人电话：
                input#investor_phone(type='text', name='investor_phone', autocomplete='off', disableautocomplete)
                span.tip 请输入正确机构联系电话，必须是数字
              .form-group
                label(for='investor_email') 联系人邮箱：
                input#investor_email(type='text', name='investor_email', autocomplete='off', disableautocomplete)
                span.tip 请输入正确的机构联系邮箱
              a.chunyu-form-btn.blue.apply-action(href='javascript:void(0);') 提 交
              a.chunyu-form-btn.white.cancel-action(href='javascript:void(0);') 取 消
          .panel
            .apply-success
              img(src='./assets/chunyu/success.png')
    .chunyuContainer
      section.banner
        .banner-slides-wrapper
          .banner-slides
            .slide.chunyu-reference
              .slide-content
                a.chunyu-btn.apply-s.apply-modal(href='javascript:void(0);') 我要申请
            .slide.chunyu
              .slide-content
                a.chunyu-btn.apply-s.apply-modal(href='javascript:void(0);') 我要申请
          .slider-arrow
            a.prev
            a.next
      section.one
        .out
          .title
            h3 面向种子天使期的创业公司
            h1 免费一年不设限云服务
          .inline-block
            .item
              img(src='./assets/chunyu/featureIcon_01.png')
              p 全网加速
            .item
              img(src='./assets/chunyu/featureIcon_02.png')
              p 数据处理
            .item
              img(src='./assets/chunyu/featureIcon_03.png')
              p 云端存储
          .join
            a.chunyu-btn.apply.apply-modal(href='javascript:void(0);') 我要申请
      section.two
        h1 战略伙伴
        .out
          #logoSlider
            .arrow
              a.left(href='javascript:void(0);')
              a.right(href='javascript:void(0);')
            .sliderContent
              .inline-block
                .item
                  img(src='./assets/chunyu/logo/1chuangxingongchang.png', alt='创新工厂')
                .item
                  img(src='./assets/chunyu/logo/2DCM.png', alt='DCM')
                .item
                  img(src='./assets/chunyu/logo/3zhenfund.png', alt='真格基金')
                .item
                  img(src='./assets/chunyu/logo/4kpcb.png', alt='凯鹏华盈')
                .item
                  img(src='./assets/chunyu/logo/5k2vc.png', alt='险峰华兴')
                .item
                  img(src='./assets/chunyu/logo/6diedaiziben.png', alt='迭代资本')
                .item
                  img(src='./assets/chunyu/logo/7rootscap.png', alt='起源资本')
                .item
                  img(src='./assets/chunyu/logo/8fuhuaqi3w.png', alt='3w孵化器')
                .item
                  img(src='./assets/chunyu/logo/9suhehui.png', alt='苏河汇')
                .item
                  img(src='./assets/chunyu/logo/10thenode.png', alt='The node')
                .item
                  img(src='./assets/chunyu/logo/11cowork.png', alt='酷窝')
                .item
                  img(src='./assets/chunyu/logo/12juchuang.png', alt='聚创')
                .item
                  img(src='./assets/chunyu/logo/13woo.png', alt='无界')
                .item
                  img(src='./assets/chunyu/logo/15aite.png', alt='爱特创业加速器')
                .item
                  img(src='./assets/chunyu/logo/17liangcang.png', alt='粮仓')
                .item
                  img(src='./assets/chunyu/logo/18techcode.png', alt='太库')
                .item
                  img(src='./assets/chunyu/logo/19tisiwi.png', alt='天使湾')
                .item
                  img(src='./assets/chunyu/logo/20weiyouhui.png', alt='微游汇')
                .item
                  img(src='./assets/chunyu/logo/21madnet.png', alt='madnet')
                .item
                  img(src='./assets/chunyu/logo/bangshi.png', alt='帮实资本')
                .item
                  img(src='./assets/chunyu/logo/chuangzhangu.png', alt='创客街')
                .item
                  img(src='./assets/chunyu/logo/makerstreet.png', alt='创展谷')
          .recommend
            p 欢迎更多投资机构与孵化器加入
            a.chunyu-btn.apply.investment-apply-modal(href='javascript:void(0);') 申请合作
      section.three
        .illustration
        .text-block
          .title
            h3 面向任意阶段的创业公司
            h1 共享技术、经验与解决方案
          ul.nostyle
            li
              p.subTitle 约谈行家
              p 聊见各行业技术专业，一对一进行技术诊断。
            li
              p.subTitle 深度圆桌
              p 加入封闭式圆桌讨论，深入探讨各技术难点。
            li
              p.subTitle 开放沙龙
              p 参与 又拍云 Open Talk，谈谈前沿技术与解决方案。
    .footer
      .contact
        p 项目咨询：chunyu@upyun.com
</template>

<script>
import layout from './layout'
import chunyuInit from './chunyu.js'

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
    chunyuInit(this);
  },
  head: {
    title: {
      inner: '又拍云春雨计划 - 为创业者提供免费云服务',
    },
    meta: [
      { name: 'keywords', content: '创业者,创业服务,云存储,天使投资,云计算,CDN,创业扶持' },
      { name: 'description', content: '春雨计划 - 又拍云联合顶尖创投机构，为创业者提供免费一年云服务，全方位技术扶持，加速创业项目进程' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'renderer', content: 'webkit' }
    ]
  }
}
</script>

