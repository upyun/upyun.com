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
  router-link.prev(:to="{ path: '', query: { page: currentPage - 1 || 1 }}") &lt;
  router-link.num(v-for="i in totalPages", :class="{active: currentPage === i}", :to="{ path: '', query: { page: i }}", :key='i') {{i}}
  router-link.next(:to="{ path: '', query: { page: currentPage >= totalPages ? totalPages : currentPage + 1  }}") &gt;
</template>

<script>
export default {
  props: ['total', 'perPage', 'currentPage'],
  computed: {
    totalPages () {
      return Math.ceil(this.total / this.perPage)
    }
  }
}
</script>
