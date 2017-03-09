<style lang="sass" scoped>
@import "../../../assets/animations"
.pad
  +animate(fadeIn, .9s, .6s)
.hat
  +animate(zoomIn, .9s, 1s)
  transform-origin: center
.line-1
  +animate(fadeInLeft, 2s, .8s)
.line-2
  +animate(fadeInLeft, 2s, 1s)
.line-3
  +animate(fadeInLeft, 2s, 1.2s)
.line-4
  +animate(fadeInLeft, 2s, 1.4s)
.line-5
  +animate(fadeInLeft, 2s, 1.6s)
</style>
<template lang="pug">
svg(xmlns='http://www.w3.org/2000/svg', width='500', height='500', viewbox='0 0 500 500')
  g(fill='#FFF')
    g.line-1
      path(opacity='.25', d='M83 190h7v7h-7z')
      path(opacity='.4', d='M69 190h7v7h-7z')
      path(opacity='.6', d='M54 190h7v7h-7z')
      path(opacity='.8', d='M40 190h7v7h-7z')
      path(d='M25 190h7v7h-7z')
    g.line-2
      path(opacity='.25', d='M134 298h7v7h-7z')
      path(opacity='.4', d='M119 298h7v7h-7z')
      path(opacity='.6', d='M105 298h7v7h-7z')
      path(opacity='.8', d='M90 298h7v7h-7z')
      path(d='M76 298h7v7h-7z')
    g.line-3
      path(opacity='.6', d='M368 312h7v7h-7z')
      path(opacity='.8', d='M354 312h7v7h-7zm43 0h7v7h-7z')
      path(d='M383 312h7v7h-7z')
    g.line-4
      path(opacity='.6', d='M367 183h7v7h-7z')
      path(opacity='.8', d='M381 183h7v7h-7z')
      path(d='M396 183h7v7h-7z')
      path(opacity='.6', d='M325 183h7v7h-7z')
      path(opacity='.8', d='M339 183h7v7h-7z')
      path(d='M354 183h7v7h-7z')
    g.line-5
      path(opacity='.6', d='M439 245h7v7h-7z')
      path(opacity='.3', d='M424 245h7v7h-7z')
      path(opacity='.8', d='M453 245h7v7h-7z')
      path(d='M468 245h7v7h-7z')
    g.pad
      path(d='M328.025 108h-203.35C113.488 108 104 117.197 104 128.393v244.214c0 11.196 9.488 20.393 20.675 20.393h203.35C339.21 393 348 383.803 348 372.607V128.393c0-11.196-8.79-20.393-19.975-20.393zM226 382c-5.49 0-10-4.51-10-10s4.51-10 10-10 10 4.51 10 10c0 5.588-4.51 10-10 10zm101-30H124V128h203v224z', opacity='.65')
    g.hat
      path(d='M222.646 256.877l-21.023-8.243L181 240.49v41.215c0 2.583 1.402 5.066 3.804 6.257 8.61 4.767 20.223 9.038 36.84 9.038 16.62 0 34.74-4.17 45.15-8.938 2.604-1.192 4.206-3.675 4.206-6.555V239l-24.227 8.938-24.127 8.94z', opacity='.45')
      path(d='M306 221.5 225.297 191 147 222.406 222.29 252')
      path(d='M293.85 293c-.88.293-1.854.39-3.024.39-1.073 0-2.048-.097-2.828-.39-2.535 3.224-2.633 10.26-3.998 14.85 1.365-1.563 2.34-3.712 4.193-4.787-.487 3.224 2.828 4.3 2.828 6.937.98-1.075.49-3.224 1.37-4.3 0 3.225 2.828 1.564 4.096 3.42.975-.976.292-4.005.195-4.982-.78-3.322-1.27-8.5-2.83-11.138z', opacity='.9')
      path(d='M289.328 233.007v49.53c-2.46.705-4.328 1.812-4.328 4.63 0 3.323 2.754 4.833 6 4.833s6-1.51 6-4.832c0-2.82-1.87-3.926-4.525-4.63V232l-3.147 1.007z', opacity='.8')
</template>

<script>
export default { }
</script>
