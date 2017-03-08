<style lang="sass" scoped>
@import "../../../assets/animations"
$paths: ((184 .5s 1.7s), (169 .5s 1.7s), (184 .5s 1.7s), (78 .3s 1.1s), (80 .3s 1.1s), (65 .3s 1.1s))
@for $i from 1 through length($paths)
  +keyframesDraw(draw + $i, nth(nth($paths, $i), 1))
  .p#{$i}
    stroke-dasharray: nth(nth($paths, $i), 1)
    +animate(draw + $i, nth(nth($paths, $i), 2), nth(nth($paths, $i), 3))
.circle-1,
.circle-2,
.circle-3,
.circle-4
  +animate(zoomIn, 1.8s)
  transform-origin: center
</style>

<template lang="pug">
svg(width='413', height='394', viewbox='0 0 413 394', xmlns='http://www.w3.org/2000/svg')
  defs
    linearGradient#a(x1='97.573%', y1='4.973%', x2='-1.146%', y2='98.294%')
      stop(stop-color='#FFF', stop-opacity='.5', offset='0%')
      stop(stop-color='#FFF', offset='62.98%')
    linearGradient#b(x1='.994%', y1='50.763%', x2='99.561%', y2='50.763%', gradientUnits='userSpaceOnUse')
      stop(stop-color='#FFF', stop-opacity='.5', offset='0%')
      stop(stop-color='#FFF', offset='62.98%')
    linearGradient#c(x1='98.006%', y1='99.13%', x2='-.361%', y2='-1.628%')
      stop(stop-color='#FFF', stop-opacity='.5', offset='0%')
      stop(stop-color='#FFF', offset='62.98%')
    linearGradient#d(x1='68.13%', y1='4.603%', x2='33.317%', y2='94.735%', gradientUnits='userSpaceOnUse')
      stop(stop-color='#FFF', stop-opacity='.5', offset='0%')
      stop(stop-color='#FFF', offset='62.98%')
    linearGradient#e(x1='3.242%', y1='96.916%', x2='97.317%', y2='2.356%')
      stop(stop-color='#FFF', stop-opacity='.5', offset='0%')
      stop(stop-color='#FFF', offset='62.98%')
    linearGradient#f(x1='1.822%', y1='3.661%', x2='102.385%', y2='100.42%')
      stop(stop-color='#FFF', stop-opacity='.5', offset='0%')
      stop(stop-color='#FFF', offset='62.98%')
  g(fill='none', fill-rule='evenodd')
    path.p1(d='M181.4 116.7L94.9 278.4', stroke='url(#a)', stroke-width='3', transform='translate(1)')
    path.p2(d='M121.2 321.9h168.5', stroke='url(#b)', stroke-width='3', transform='translate(1)')
    path.p3(d='M316.2 278.3L229.65 116',stroke='url(#c)', stroke-width='3', transform='translate(1)')
    path.p6(d='M205.5 186.9v-64.9', stroke='url(#d)', stroke-width='3', transform='translate(1)')
    path.p4(d='M174.25 248.1L111.6 293.2', stroke='url(#e)', stroke-width='3', transform='translate(1)')
    path.p5(d='M236.85 243.5L299.5 293.2', stroke='url(#f)', stroke-width='3', transform='translate(1)')
    g(transform='translate(1 253)')
      g.circle-1
        path(d='M116.2 47.9c-1.6-3.4-3.6-6.6-6-9.6-3.9-4.9-8.7-9.1-14.4-12.4-.4-.2-.8-.5-1.2-.7-3.3-1.8-6.8-3.2-10.3-4.2-22.7-6.7-47.7 3.1-59.5 24.7-13.6 24.9-4.5 56.2 20.5 69.8 24.9 13.6 56.2 4.5 69.8-20.5 1.8-3.2 3.1-6.5 4.1-9.9 1.3-4.4 2-8.9 2.1-13.4.3-8.2-1.5-16.4-5.1-23.8z', fill='#FFF', fill-rule='nonzero', opacity='.45')
        circle(fill='#FFF', fill-rule='nonzero', cx='70', cy='70.4', r='15.4')
        circle(stroke='#FFF', opacity='.45', cx='70', cy='70.4', r='60.1')
        circle(stroke='#FFF', opacity='.15', cx='70', cy='70.4', r='70')
        circle(stroke='#FFF', opacity='.85', cx='70', cy='70.4', r='23.5')
        circle(stroke='#FFF', opacity='.7', cx='70', cy='70.4', r='33.3')
        circle(stroke='#FFF', opacity='.55', cx='70', cy='70.4', r='42.9')
    g(transform='translate(272 253)')
      g.circle-2
        path(d='M116.3 47.9c-1.6-3.4-3.6-6.6-6-9.6-3.9-4.9-8.7-9.1-14.4-12.4-.4-.2-.8-.5-1.1-.7C91.5 23.4 88 22 84.5 21 61.8 14.3 36.8 24.1 25 45.7c-13.6 24.9-4.5 56.2 20.5 69.8 24.9 13.6 56.2 4.5 69.8-20.5 1.8-3.2 3.1-6.5 4.1-9.9 1.3-4.4 2-8.9 2.1-13.4.2-8.2-1.6-16.4-5.2-23.8z', fill='#FFF', fill-rule='nonzero', opacity='.45')
        circle(fill='#FFF', fill-rule='nonzero', cx='70.1', cy='70.4', r='15.4')
        circle(stroke='#FFF', opacity='.45', cx='70.1', cy='70.4', r='60.1')
        circle(stroke='#FFF', opacity='.15', cx='70.1', cy='70.4', r='70')
        circle(stroke='#FFF', opacity='.85', cx='70.1', cy='70.4', r='23.5')
        circle(stroke='#FFF', opacity='.7', cx='70.1', cy='70.4', r='33.3')
        circle(stroke='#FFF', opacity='.55', cx='70.1', cy='70.4', r='42.9')
    g(transform='translate(136)')
      g.circle-3
        path(d='M116.8 48.1c-1.6-3.4-3.6-6.6-6-9.6-3.9-4.9-8.7-9.1-14.4-12.4-.4-.2-.8-.5-1.1-.7-3.3-1.8-6.8-3.2-10.3-4.2-22.7-6.7-47.7 3.1-59.5 24.7C11.9 70.8 21 102.1 46 115.7c24.9 13.6 56.2 4.5 69.8-20.5 1.8-3.2 3.1-6.5 4.1-9.9 1.3-4.4 2-8.9 2.1-13.4.2-8.1-1.6-16.3-5.2-23.8z', fill='#FFF', fill-rule='nonzero', opacity='.45')
        circle(fill='#FFF', fill-rule='nonzero', cx='70.5', cy='70.7', r='15.4')
        circle(stroke='#FFF', opacity='.45', cx='70.5', cy='70.7', r='60.1')
        circle(stroke='#FFF', opacity='.15', cx='70.5', cy='70.7', r='70')
        circle(stroke='#FFF', opacity='.85', cx='70.5', cy='70.7', r='23.5')
        circle(stroke='#FFF', opacity='.7', cx='70.5', cy='70.7', r='33.3')
        circle(stroke='#FFF', opacity='.55', cx='70.5', cy='70.7', r='42.9')
    g(transform='translate(154 173)')
      g.circle-4
        path(d='M87.2 35.6c-1.2-2.5-2.7-4.9-4.5-7.2-2.9-3.7-6.5-6.8-10.8-9.3-.3-.2-.6-.3-.9-.5-2.5-1.4-5.1-2.4-7.7-3.2-17-5-35.9 2.3-44.7 18.5C8.4 52.6 15.2 76.1 34 86.3c18.7 10.2 42.2 3.4 52.4-15.4 1.3-2.4 2.3-4.9 3.1-7.4 1-3.3 1.5-6.7 1.6-10 .2-6.1-1.1-12.3-3.9-17.9z', fill='#FFF', fill-rule='nonzero', opacity='.45')
        circle(fill='#FFF', fill-rule='nonzero', cx='52.5', cy='52.5', r='11.6')
        circle(stroke='#FFF', opacity='.45', cx='52.5', cy='52.5', r='45.2')
        circle(stroke='#FFF', opacity='.15', cx='52.5', cy='52.5', r='52.5')
        circle(stroke='#FFF', opacity='.85', cx='52.5', cy='52.5', r='17.7')
        circle(stroke='#FFF', opacity='.7', cx='52.5', cy='52.5', r='25')
        circle(stroke='#FFF', opacity='.55', cx='52.5', cy='52.5', r='32.3')
</template>

<script>
export default { }
</script>
