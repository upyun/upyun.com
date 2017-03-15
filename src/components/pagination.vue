<style lang="sass" scoped>
.pagination
  text-align: center
  .prev, .num, .next
    display: inline-block
    width: 46px
    height: 46px
    line-height: 44px
    border: solid 1px #c0c8d0
    border-radius: 4px
    text-align: center
    margin-right: 10px
    font-size: 16px
    color: #bfc7d0
    cursor: pointer
    text-decoration: none
    &:last-child
      margin-right: 0
    &:hover, &.active
      background: #15bdf9
      color: white
      border-color: #15bdf9
</style>

<template lang="pug">
.pagination
  router-link(:to="{ path: '', query: { page: current - 1 || 1 }}").prev &lt;
  router-link.num(v-for="i in pages", :class="{active: current === i}", :to="{ path: '', query: { page: i }}") {{i}}
  .next &gt;
</template>

<script>
export default {
  props: ['total', 'perPage', 'current'],
  computed: {
    pages () {
      return Math.ceil(this.total / this.perPage)
    }
  }
}
</script>
