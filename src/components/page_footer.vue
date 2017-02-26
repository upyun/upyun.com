<style lang="sass" src="./page_footer.sass" scoped></style>

<template lang="pug">
#page_footer
  .container.top
    .left
      .menu
        .title 产品
        router-link(to="/product/uss") 云存储
        router-link(to="/product/cdn") CDN
        router-link(to="/product/ups") 云处理
        router-link(to="/product/live") 直播云
        router-link(to="/product/vod") 点播云
      .menu
        .title 支持
        a 新手入门
        a 常见问题
        a 产品文档
        a API 文档
        a SDK 与工具
      .menu
        .title 活动
        a 创业扶持
        a 春雨计划
        a 又拍云联盟
        a 线下活动
        a OpenTalk
      .menu
        .title 关于
        router-link(to="/about_us") 公司简介
        router-link(to="/join_us") 加入我们
        router-link(to="/contact") 联系我们
        router-link(to="/partners") 合作伙伴
        router-link(to="/terms") 服务条款
      .line
    .right
      .menu
        .title 售前
        a.normal QQ: 200576786
        a.normal Tel：0571-81020203
        a.normal Email：sales@upyun.com
      .menu
        .title 售后
        a 点击在线咨询
        a.normal Tel：0571-81020204
        a.normal Email：support@upyun.com
    .links
      a
        img(src="../assets/footer-wechat.svg")
      a
        img(src="../assets/footer-weibo.svg")
      a
        img(src="../assets/footer-github.svg")
      a
        img(src="../assets/footer-sf.svg")
  .line
  .bottom.container
    .left
      img(src="../assets/footer-logo.svg")
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
