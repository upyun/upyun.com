<style lang="sass" src="./page_footer.sass" scoped></style>

<template lang="pug">
#page_footer
  .container.top
    .left
      .menu
        .title 产品
        router-link(to="/products/file-storage") 云存储
        router-link(to="/products/cdn") CDN
        router-link(to="/products/process") 云处理
        router-link(to="/products/live") 直播云
        router-link(to="/products/vod") 点播云
      .menu
        .title 支持
        a(href="http://docs.upyun.com/guide/" target="_blank") 新手入门
        a(href="http://docs.upyun.com/faq/" target="_blank") 常见问题
        a(href="http://docs.upyun.com/" target="_blank") 产品文档
        a(href="http://docs.upyun.com/guide/#api" target="_blank") API 文档
        router-link(to="/terms") 服务条款
      .menu
        .title 活动
        //- a 创业扶持
        router-link(to="/chunyu") 春雨计划
        router-link(to="/league") 又拍云联盟
        //- a 线下活动
        a(href="https://opentalk.upyun.com/show/index" target="_blank") OpenTalk
      .menu
        .title 关于
        router-link(to="/about_us") 公司简介
        router-link(to="/join_us") 加入我们
        router-link(to="/contact") 联系我们
        router-link(to="/partners") 合作伙伴
        router-link(to="/media_reports") 媒体报道
      .line
    .right
      .menu
        .title 售前
        a.normal QQ: 200576786
        a.normal Tel：0571-81020203
        span Email：
          a.inline(href="mailto:sales@upyun.com") sales@upyun.com
      .menu
        .title 售后
        a(href="http://support.upyun.com/kchat/18915?group=22540&from=mainsite" target="_blank") 点击在线咨询
        a.normal Tel：0571-81020204
        span Email：
          a.inline(href="mailto:support@upyun.com") support@upyun.com
    .links
      a.wechat
        .qrCode
          img(src="../assets/footer-QRcode.png", width="92")
          .triangle-down
      a.weibo(href="http://weibo.com/upaiyun" target="_blank")
      a.github(href="https://github.com/upyun" target="_blank")
      a.sf(href="http://segmentfault.com/t/又拍云存储" target="_blank")
  .line
  .bottom.container
    .left
      router-link.logo(to="/")
        img(src="../assets/logo.svg")
    .right
      .kexin
        img(src="../assets/kexinyunlogo.png", width="40", height="33")
        .line 云分发服务
        .line No:08005

  .icp © 2017 杭州又拍云科技有限公司 ｜  浙公网安备 33010602000847号
</template>

<script>
export default {
}
</script>
