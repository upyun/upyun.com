<style lang="sass" scoped>
@import "../../assets/susy"
.section-help
  padding: 50px 0 70px
  background: white
  border-top: solid 1px #f0f0f0
  .main-title
    margin-bottom: 34px
    font-size: 34px
    color: #0d253e
    text-align: center
  .menus
    &.cdn
      +container()
      .menu
        +gallery(1 of 4 1/2)
    &.live
      +container()
      .menu
        +gallery(1 of 3 1)
    &.uss
      +container()
      .menu
        +gallery(1 of 4 1/2)
    width: 800px
    .menu
      font-size: 18px
      .title
        color: #0d253e
        font-weight: normal
        border-bottom: 1px solid #f0f0f0
        margin-bottom: 20px
        padding-bottom: 2px
      a
        display: block
        color: #97a1ab
        margin-bottom: 8px
  .try
    text-align: center
    margin-top: 50px
</style>

<template lang="pug">
.section-help
  .container
    .main-title 帮助与文档
    .menus.cdn(v-if="selection === 'cdn'")
      .menu
        .title 产品介绍
        a(href="http://docs.upyun.com/cdn/#_1" target="_blank") 产品概述
        a(href="http://docs.upyun.com/cdn/#_2" target="_blank") 产品架构
        a(href="http://docs.upyun.com/cdn/#_3" target="_blank") 产品功能
      .menu
        .title 快速入门
        a(href="http://docs.upyun.com/cdn/guide/#_1" target="_blank") 准备工作
        a(href="http://docs.upyun.com/cdn/guide/#_2" target="_blank") 创建帐号
        a(href="http://docs.upyun.com/cdn/guide/#_3" target="_blank") 帐号认证
        a(href="http://docs.upyun.com/cdn/guide/#_4" target="_blank") 创建服务
      .menu
        .title 使用指南
        a(href="http://docs.upyun.com/cdn/basic/" target="_blank") 基础设置
        a(href="http://docs.upyun.com/cdn/advanced/" target="_blank") 高级设置
        a(href="http://docs.upyun.com/cdn/ssl/" target="_blank") 证书服务
      .menu
        .title 常见问题
        a(href="http://docs.upyun.com/cdn/faq/#_1" target="_blank") 缓存相关
        a(href="http://docs.upyun.com/cdn/faq/#_2" target="_blank") 刷新相关
        a(href="http://docs.upyun.com/cdn/faq/#_3" target="_blank") 性能相关
    .menus.live(v-if="selection === 'live'")
      .menu
        .title 产品介绍
        a(href="http://docs.upyun.com/live/Introduction/#_2" target="_blank") 产品架构
        a(href="http://docs.upyun.com/live/primary/" target="_blank") 基础配置
        a(href="http://docs.upyun.com/live/advanced/" target="_blank") 增值服务
        a(href="http://docs.upyun.com/live/mobile-sdk/" target="_blank") 移动端 SDK
      .menu
        .title 新手指南
        a(href="http://docs.upyun.com/live/guide/" target="_blank") 快速入门
        a(href="http://docs.upyun.com/live/guide/#_2" target="_blank") 服务创建
        a(href="http://docs.upyun.com/live/guide/#_5" target="_blank") 推流测试
        a(href="http://docs.upyun.com/live/guide/#_6" target="_blank") 拉流测试
      .menu
        .title 常见问题
        a(href="https://techs.b0.upaiyun.com/videos/cdnpage/upyunzb1.html" target="_blank") 服务创建
        a(href="https://techs.b0.upaiyun.com/videos/cdnpage/zb-format.html" target="_blank") 转码与录制
        a(href="https://techs.b0.upaiyun.com/videos/cdnpage/andriod-player-sdk.html" target="_blank") 播放器相关
        a(href="https://techs.b0.upaiyun.com/videos/cdnpage/live_push_token.html" target="_blank") 防盗链相关
    .menus.uss(v-if="selection === 'uss'")
      .menu
        .title 使用概述
        a(href="http://docs.upyun.com/api/quick_start/" target="_blank") 快速入门
        a(href="http://docs.upyun.com/api/developer_guide/#_4" target="_blank") 数据预处理
        a(href="http://docs.upyun.com/api/developer_guide/#_5" target="_blank") 数据迁移
        a(href="http://docs.upyun.com/api/rest_api/" target="_blank") REST API
        a(href="http://docs.upyun.com/api/form_api/" target="_blank") FORM API
        a(href="http://docs.upyun.com/api/fusion_storage/" target="_blank") 融合云存储
      .menu
        .title SDK
        a(href="https://github.com/upyun/ios-sdk" target="_blank") iOS SDK
        a(href="https://github.com/upyun/android-sdk" target="_blank") Android SDK
        a(href="https://github.com/upyun/php-sdk" target="_blank") PHP SDK
        a(href="https://github.com/upyun/java-sdk" target="_blank") Java SDK
        a(href="https://github.com/upyun/python-sdk" target="_blank") Python SDK
        a(href="https://github.com/upyun/go-sdk" target="_blank") Go SDK
      .menu
        .title 开发者工具
        a(href="http://docs.upyun.com/api/developer_tools/#ftpftps" target="_blank") FTP/FTPS
        a(href="http://docs.upyun.com/api/developer_tools/#upx" target="_blank") 命令行工具
        a(href="http://docs.upyun.com/api/developer_tools/#curl" target="_blank") cURL
      .menu
        .title 常见问题
        a(href="http://docs.upyun.com/faq/#ftp" target="_blank") FTP/FTPS
        a(href="http://docs.upyun.com/cloud/spider/" target="_blank") 文件拉取
        a(href="http://docs.upyun.com/cloud/unzip/" target="_blank") 压缩解压缩
        a(href="https://techs.b0.upaiyun.com/videos/cdnpage/upyun_oss.html" target="_blank") 融合云存储配置
        a(href="http://docs.upyun.com/api/errno/" target="_blank") API 错误码表
    .try
      up_button(:color="color", :url="$links.console", target="_blank") 免费试用
</template>

<script>
export default {
  props: ['selection', 'color']
}
</script>
