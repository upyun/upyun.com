<style lang="sass" scoped>
@import "../../../assets/animations"
.pad
  +animate(fadeInRight, 1s, .8s)
  animation-timing-function: steps(5, start)
.line-1,
.line-2
  +animate(fadeInRight, 1s, .8s)
  animation-timing-function: steps(5, start)
.line-3
  +animate(fadeInDown, 1s, .8s)
  animation-timing-function: steps(5, start)
.line-4
  +animate(fadeInRight, 1s, .8s)
  animation-timing-function: steps(5, start)
.line-4-end
  +animate(fadeIn, 0, 1.8s)
.line-5
  +animate(fadeInLeft, 1s, .8s)
  animation-timing-function: steps(5, start)
.line-6
  +animate(fadeInUp, 1s, .8s)
  animation-timing-function: steps(5, start)
.line-6-end
  +animate(fadeIn, 0, 1.8s)
</style>

<template lang="pug">
svg(width='481', height='380', viewbox='0 0 481 380', xmlns='http://www.w3.org/2000/svg')
  g(fill='none', fill-rule='evenodd')
    g.pad
      path(d='M303.3 42.9H99.7C88.5 42.9 79 52.1 79 63.3v244.3c0 11.2 9.5 20.4 20.7 20.4h203.6c11.2 0 20-9.2 20-20.4V63.3c0-11.2-8.8-20.4-20-20.4zM201.5 317.7c-5.6 0-10.2-4.6-10.2-10.2s4.6-10.2 10.2-10.2 10.2 4.6 10.2 10.2c0 5.7-4.6 10.2-10.2 10.2zm101.4-30.5H99.3V63.3h203.6v223.9z', fill='#FFF', fill-rule='nonzero', opacity='.65')
      path(d='M197.2 192l-21-8.3-20.6-8.2V217c0 2.6 1.4 5.1 3.8 6.3 8.6 4.8 20.2 9.1 36.8 9.1 16.6 0 34.7-4.2 45.1-9 2.6-1.2 4.2-3.7 4.2-6.6V174l-24.2 9-24.1 9z', fill='#FFF', fill-rule='nonzero', opacity='.45')
      path(fill='#FFF', fill-rule='nonzero', d='M280.4 156.1l-80.5-30.3-78.1 31.2 75.1 29.4')
      path(d='M269 227.6c-.9.3-1.9.4-3.1.4-1.1 0-2.1-.1-2.9-.4-2.6 3.3-2.7 10.5-4.1 15.2 1.4-1.6 2.4-3.8 4.3-4.9-.5 3.3 2.9 4.4 2.9 7.1 1-1.1.5-3.3 1.4-4.4 0 3.3 2.9 1.6 4.2 3.5 1-1 .3-4.1.2-5.1-.8-3.4-1.3-8.7-2.9-11.4z', fill='#FFF', fill-rule='nonzero', opacity='.9')
      path(d='M264.1 167.5v49.2c-2.5.7-4.4 1.8-4.4 4.6 0 3.3 2.8 4.8 6.1 4.8s6.1-1.5 6.1-4.8c0-2.8-1.9-3.9-4.6-4.6v-50.2l-3.2 1z', fill='#FFF', fill-rule='nonzero', opacity='.8')
    g.line-1
      path(fill='#FFF', fill-rule='nonzero', opacity='.25', d='M58.1 125.4h7.3v7.1h-7.3z')
      path(fill='#FFF', fill-rule='nonzero', opacity='.4', d='M43.6 125.4h7.3v7.1h-7.3z')
      path(fill='#FFF', fill-rule='nonzero', opacity='.6', d='M29 125.4h7.3v7.1H29z')
      path(fill='#FFF', fill-rule='nonzero', opacity='.8', d='M14.5 125.4h7.3v7.1h-7.3z')
      path(fill='#FFF', fill-rule='nonzero', d='M0 125.4h7.3v7.1H0z')
    g.line-2
      path(stroke='#FFF', stroke-width='3', opacity='.6', d='M7.2 218.5h35.5V254H7.2z')
      path(fill='#FFF', fill-rule='nonzero', opacity='.25', d='M109 232.8h7.3v7.1H109z')
      path(fill='#FFF', fill-rule='nonzero', opacity='.4', d='M94.4 232.8h7.3v7.1h-7.3z')
      path(fill='#FFF', fill-rule='nonzero', opacity='.6', d='M79.9 232.8h7.3v7.1h-7.3z')
      path(fill='#FFF', fill-rule='nonzero', opacity='.8', d='M65.4 232.8h7.3v7.1h-7.3z')
      path(fill='#FFF', fill-rule='nonzero', d='M50.8 232.8h7.3v7.1h-7.3z')
    g.line-3
      path(fill='#FFF', fill-rule='nonzero', opacity='.8', d='M95.8 357.9h7.1v7.3h-7.1z')
      path(fill='#FFF', fill-rule='nonzero', opacity='.6', d='M95.8 343.3h7.1v7.3h-7.1z')
      path(fill='#FFF', fill-rule='nonzero', opacity='.4', d='M95.8 328.8h7.1v7.3h-7.1z')
      path(fill='#FFF', fill-rule='nonzero', opacity='.25', d='M95.8 314.3h7.1v7.3h-7.1z')
      path(fill='#FFF', fill-rule='nonzero', d='M95.8 372.4h7.1v7.3h-7.1z')
    path.line-4-end(fill-rule='nonzero', fill='#FFF', opacity='.6', d='M304.1 321.4h7.1v7.3h-7.1z')
    g.line-4(fill-rule='nonzero', fill='#FFF')
      path(d='M304 336h7.3v7.1H304z')
      path(opacity='.8', d='M318.6 336h7.3v7.1h-7.3z')
      path(opacity='.6', d='M333.1 336h7.3v7.1h-7.3z')
      path(d='M347.3 336h7.1v7.3h-7.1z')
      path(opacity='.8', d='M360.9 336h7.1v7.3h-7.1z')
    g.line-5
      path(fill='#FFF', fill-rule='nonzero', opacity='.6', d='M341.8 143.7h7.3v7.1h-7.3z')
      path(fill='#FFF', fill-rule='nonzero', opacity='.8', d='M356.4 143.7h7.3v7.1h-7.3z')
      path(fill='#FFF', fill-rule='nonzero', d='M370.9 143.7h7.3v7.1h-7.3z')
      path(fill='#FFF', fill-rule='nonzero', opacity='.6', d='M299.7 143.7h7.3v7.1h-7.3z')
      path(fill='#FFF', fill-rule='nonzero', opacity='.8', d='M314.2 143.7h7.3v7.1h-7.3z')
      path(fill='#FFF', fill-rule='nonzero', d='M328.8 143.7h7.3v7.1h-7.3z')
      path(fill='#FFF', fill-rule='nonzero', opacity='.6', d='M444.6 143.7h7.3v7.1h-7.3z')
      path(fill='#FFF', fill-rule='nonzero', opacity='.3', d='M429.9 143.7h7.3v7.1h-7.3z')
      path(fill='#FFF', fill-rule='nonzero', opacity='.8', d='M459.1 143.7h7.3v7.1h-7.3z')
      path(fill='#FFF', fill-rule='nonzero', d='M473.7 143.7h7.3v7.1h-7.3z')
      path(stroke='#FFF', stroke-width='2', opacity='.6', d='M423.01 165.056h-35.5v-35.5h35.5z')
    g.line-6
      path(fill='#FFF', fill-rule='nonzero', opacity='.6', d='M283 14.9h7.1v7.3H283z')
      path(fill='#FFF', fill-rule='nonzero', opacity='.8', d='M283 29.4h7.1v7.3H283z')
      path(fill='#FFF', fill-rule='nonzero', d='M283 43.9h7.1v7.3H283z')
      path(fill='#FFF', fill-rule='nonzero', d='M282.9.6h7.3v7.1h-7.3z')
    g.line-6-end
      path(fill='#FFF', fill-rule='nonzero', opacity='.6', d='M253.9.6h7.3v7.1h-7.3z')
      path(fill='#FFF', fill-rule='nonzero', opacity='.8', d='M268.4.6h7.3v7.1h-7.3z')
</template>

<script>
export default { }
</script>
