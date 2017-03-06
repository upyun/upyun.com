<style lang="sass" src="./about.sass" scoped></style>

<style lang="sass" scoped>
@import "../../assets/susy"
.cover
  background-image: url(./assets/bg-2.jpg)
.groups
  margin-top: 54px
  font-size: 16px
  .group
    .title
      border-bottom: solid 1px #ddd7d7
      font-size: 26px
      line-height: 60px
      cursor: pointer
      position: relative
      padding-left: 40px
      &:after
        content: ""
        display: block
        background: url(./assets/arrow.svg) center no-repeat
        width: 24px
        height: 24px
        position: absolute
        left: 0
        top: 50%
        margin-top: -12px
        transition: transform .3s
        transform: rotate(-90deg)
      &:hover
        background: #FAFAFA
    &.active .title:after
      transform: rotate(0)
    &.active .jobs
      display: block
    .jobs
      padding: 55px 50px 30px
      display: none
      +container
      .item
        +gallery(6)
        margin-bottom: 25px
        .name
          font-size: 20px
          font-weight: 400
          margin-bottom: 24px
        .label
          font-size: 18px
          font-weight: 400
        ul
          padding-left: 20px
        .btn
          display: block
          margin-top: 20px
          background: #15bdf9
          border-radius: 6px
          width: 140px
          height: 46px
          line-height: 46px
          color: white
          text-align: center
          text-decoration: none
          font-size: 18px
          &:hover
            opacity: .8
          &:active
            opacity: 1

</style>

<template lang="pug">
layout
  div(slot="hero")
    .cover
  div(slot="page")
    .about-page
      .container
        .unit
          .title 加入我们
          .sub-title 与我们一起工作，在这里展现你的才华
          .groups
            .group(v-for="group, i in groups", :class="{active: nowActive === i}")
              .title(@click="nowActive = i") {{ group.name }}
              .jobs
                .item(v-for="job in group.jobs")
                  .name {{ job.name }}
                  .label 工作内容
                  ul.description
                    li(v-for="line in job.description") {{ line }}
                  .label 职位要求
                  ul.requirements
                    li(v-for="line in job.requirements") {{ line }}
                  a.btn(color="#15bdf9") 加入我们
</template>

<script>
import layout from './layout'
import jobs from 'json!yaml!./assets/jobs.yml'

export default {
  data () {
    return {
      groups: jobs,
      nowActive: 0
    }
  },
  head: {
    title: { inner: '加入我们' }
  },
  components: { layout }
}
</script>
