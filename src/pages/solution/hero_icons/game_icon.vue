<style lang="sass" scoped>
@import "../../../assets/animations"
+keyframesDraw(draw, 983)
.path
  stroke-dasharray: 983
  +animate(draw, 2s, .8s)
.lf
  +animate(fadeIn, 1.2s, 1s)
.rt
  +animate(fadeIn, 1.4s, 1.5s)
</style>

<template lang="pug">
svg(width='505', height='321', viewbox='0 0 505 321', xmlns='http://www.w3.org/2000/svg')
  g(transform='translate(0 1)', fill='none', fill-rule='evenodd')
    path.path(d='M224.2 225.5c-16.5 15.7-38.8 25.3-63.3 25.3-50.7.1-91.8-41-91.8-91.7s41.1-91.8 91.8-91.8c50.7 0 91.8 41.1 91.8 91.8 0 50.7 41.1 91.8 91.8 91.8 50.7 0 91.8-41.1 91.8-91.8 0-50.7-41.1-91.8-91.8-91.8-.1.1-24.6.1-46.9 9.7', opacity='.5', stroke='#FFF', stroke-width='27')
    g.lf
      path(fill='#FFF', opacity='.86', d='M201.9 171.2H172v29.9h-24.1v-29.9h-29.8v-24.1h29.8v-29.9H172v29.9h29.9')
      path(d='M160 318.7C71.9 318.7.5 247.3.5 159.2', stroke='#FFF', opacity='.4')
      path(d='M160 283.6c-68.8 0-124.5-55.7-124.5-124.5', stroke='#FFF')
      path(d='M160 300.6c-78.2 0-141.5-63.4-141.5-141.5', stroke='#FFF', opacity='.7')
    g.rt
      circle(fill='#FFF', opacity='.86', cx='306.4', cy='159.1', r='14.1')
      circle(fill='#FFF', opacity='.86', cx='344.4', cy='197.2', r='14.1')
      circle(fill='#FFF', opacity='.86', cx='344.4', cy='121.1', r='14.1')
      circle(fill='#FFF', opacity='.86', cx='382.5', cy='159.1', r='14.1')
      path(d='M344.4.3c88.1 0 159.5 71.4 159.5 159.5', stroke='#FFF', opacity='.4')
      path(d='M344.4 35.3c68.8 0 124.5 55.7 124.5 124.5', stroke='#FFF')
      path(d='M344.4 18.3c78.2 0 141.5 63.4 141.5 141.5', stroke='#FFF', opacity='.7')
</template>

<script>
export default { }
</script>
