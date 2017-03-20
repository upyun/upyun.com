<style lang="sass" scoped>
@import "../../../assets/animations"
.cube
  +animate(fadeInDown, 1s, .8s)
.base
  +animate(fadeInUp, 1.8s)
</style>

<template lang="pug">
svg(width='570', height='409', viewbox='0 0 570 409', xmlns='http://www.w3.org/2000/svg')
  g(fill='none', fill-rule='evenodd')
    g.cube
      path(fill='#FFF', opacity='.43', d='M285 184.7l159.3-92v148.1L285 332.7')
      path(fill='#FFF', opacity='.87', d='M125.7 92.7l159.3 92v148l-159.3-91.9')
      path(fill='#FFF', opacity='.63', d='M125.7 92.7 285 .7l159.3 92-159.3 92')
      path(fill='#FFF', opacity='.8', d='M190.1 129.9l30.5 17.6 159.3-92-30.5-17.6')
      path(fill='#FFF', opacity='.86', d='M220.6 147.5v28l-30.5-17.6v-28')
      path(fill='#FFF', d='M221.4 147.9 380.7 56l-1.5-.9-159.4 92')
      path(fill='#FFF', d='M219.8 147.1v28l1.6.9v-28.1m-.8 119.6v28.1L190.1 278v-28.1')
      path(fill='#DCDDDD', d='M219.8 267.1v28l1.6.9v-28')
      path(fill='#FFF', opacity='.8', d='M418.6 92.9l-38.9 22.4-26.2-14.9L392.3 78')
      path(fill='#FFF', d='M379.7 117.1l-26.2-15v-1.7l26.2 14.9 38.9-22.4v1.7')
    g.base
      path(fill='#FFF', opacity='.07', d='M38.9 243.3 285 101.2l246.2 142.1L285 385.5')
      path(fill='#FFF', opacity='.14', d='M80.3 243.3 285 125.1l204.7 118.2L285 361.5')
      path(stroke='#FFF', opacity='.15', d='M.5 244.2 285 79.9l284.6 164.3L285 408.5z')
</template>

<script>
export default { }
</script>
