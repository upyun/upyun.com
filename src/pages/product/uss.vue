<style lang="sass" src="./product.sass" scoped></style>

<template lang="pug">
layout(:colors="colorSet")
  .container
    .info
      .title 云存储
      .description.
        又拍云存储（UPYUN Storage Service，简称 USS），是面向互联网应用的对象存储服务，具有使用简单、高可靠、高安全等特性，满足海量数据上传、高 IO（高访问）、高可用需求，满足大数据企业应用背景下的数据传输、处理、存储、分发与容灾需求。
      .buttons
        a.up-button.major 免费试用
        a.up-button 查看价格
      .price 0.0043 元/GB/天，新注册用户免费试用 7 天
    .icon
      img(src="./assets/uss_large.svg")
</template>

<script>
import layout from '../../components/layout'
import colors from '../../services/colors'

export default {
  data () {
    return {
      colorSet: colors.getRandom()
    }
  },
  mounted () {
  },
  components: { layout }
}
</script>
