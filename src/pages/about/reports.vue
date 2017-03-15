<style lang="sass" src="./about.sass" scoped></style>
<style lang="sass" scoped>
@import "../../assets/susy"
.about-page
  .container
    width: 998px
    padding: 49px 0 70px
    >.title
      font-size: 40px
      text-align: center
      padding-bottom: 49px
    .reports
      border-top: 1px solid #ddd7d7
      .item
        +container
        display: block
        padding: 22px 0 28px
        &:hover
          background: #F8F8F8
        .date
          +span(2)
        .right
          +span(10 last)
          .title
            font-size: 20px
            color: #15bdf9
            font-weight: 500
          .summary
            font-size: 16px
</style>

<template lang="pug">
layout
  div(slot="hero")
    .cover
  div(slot="page")
    .about-page
      .container
        .title(ref="title") 媒体报道
        .reports
          a.item(v-for="report in currentItems", :href="report.link", target="_blank")
            .date {{ report.date }}
            .right
              .title {{ report.title }}
              .summary {{ report.summary }}
        pagination(:total="reports.length", :perPage="perPage", :current="currentPage", style="margin-top: 40px")
</template>

<script>
import layout from './layout'
import reports from 'json!yaml!./reports.yml'
import pagination from '../../components/pagination'
import smoothscroll from 'smoothscroll'

export default {
  head: {
    title: { inner: '媒体报道' }
  },
  data () {
    return {
      reports,
      perPage: 5
    }
  },
  computed: {
    currentPage () {
      return Number(this.$route.query.page) || 1
    },
    currentItems () {
      return this.reports.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage)
    }
  },
  beforeRouteUpdate (to, from, next) {
    smoothscroll(this.$refs.title)
    next()
  },
  components: { layout, pagination }
}
</script>
