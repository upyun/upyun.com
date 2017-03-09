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
    +container()
    width: 800px
    .menu
      +gallery(1 of 4 1/2)
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
    .menus
      .menu
        .title 产品介绍
        a 整体架构
        a 基础配置
        a 高级特性
      .menu
        .title 新手指南
        a 基本概念
        a API 简易指南
      .menu
        .title 开发者文档
        a API 文档
        a CDN 文档
        a SDK 及工具
      .menu
        .title 常见问题
        a 概念性 FAQ
        a 技术性 FAQ
    .try
      up_button(:color="color", :url="$links.console", target="_blank") 免费试用
</template>

<script>
export default {
  props: ['color']
}
</script>
