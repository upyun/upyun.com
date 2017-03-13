<style lang="sass" scoped>
@import "../../../assets/animations"
.inner
  +animate(rotate, 2.2s, 1.8s)
  transform-origin: center
.leg
  +animate(fadeIn, 2.2s, 1.8s)
.o-1
  +animate(zoomIn, 1.5s, 1s)
.o-2
  +animate(zoomIn, 1.5s, 1.2s)
.o-3
  +animate(zoomIn, 1.5s, 1.6s)
</style>

<template>
<svg xmlns="http://www.w3.org/2000/svg" width="411" height="411" viewBox="0 0 411 411">
  <defs>
    <linearGradient id="a" x1="69.47%" x2="34.514%" y1="64.984%" y2="42.931%">
      <stop stop-color="#FFFFFF" stop-opacity=".5" offset="0%"/>
      <stop stop-color="#FFFFFF" offset="62.98%"/>
    </linearGradient>
    <linearGradient id="b" x1="-28.231%" x2="68.249%" y1="45.166%" y2="52.59%">
      <stop stop-color="#FFFFFF" stop-opacity=".5" offset="0%"/>
      <stop stop-color="#FFFFFF" offset="62.98%"/>
    </linearGradient>
    <linearGradient id="c" x1="20.161%" x2="60.215%" y1="99.359%" y2="13.859%">
      <stop stop-color="#FFFFFF" stop-opacity=".5" offset="0%"/>
      <stop stop-color="#FFFFFF" offset="62.98%"/>
    </linearGradient>
  </defs>
  <g fill="none" fill-rule="evenodd">
    <circle class="o-1" cx="205.6" cy="205.5" r="125.2" stroke="#FFFFFF"/>
    <circle class="o-2" cx="205.6" cy="205.5" r="165" stroke="#FFFFFF" opacity=".6"/>
    <circle class="o-3" cx="205.6" cy="205.5" r="204.8" stroke="#FFFFFF" opacity=".3"/>
    <g class="inner">
      <g class="leg" transform="translate(114 220)">
        <path fill="url(#a)" fill-rule="nonzero" d="M91.6,72.6 C67.3,72.6 44.6,62.9 27.8,45.4 C26.7,44.3 26.2,42.7 26.3,41.1 C26.4,39.5 27.2,38.1 28.5,37.1 C32.2,34.4 34.3,30.2 34.3,25.6 C34.3,17.7 27.9,11.2 19.9,11.2 C17.9,11.2 16,11.6 14.2,12.4 C11.4,13.6 8.2,12.3 7,9.5 C5.8,6.7 7.1,3.5 9.9,2.3 C13.1,0.9 16.4,0.2 19.9,0.2 C33.9,0.2 45.3,11.6 45.3,25.6 C45.3,31.4 43.3,37 39.7,41.5 C54,54.5 72.2,61.6 91.7,61.6 C103,61.6 113.9,59.2 124.1,54.5 C126.9,53.2 130.1,54.4 131.4,57.2 C132.7,60 131.5,63.2 128.7,64.5 C117,69.9 104.5,72.6 91.6,72.6 Z"/>
        <path stroke="#FFFFFF" stroke-width="11" d="M12,7.4 C4.9,10.4 0,17.5 0,25.6 C0,36.6 8.9,45.5 19.9,45.5 C24.4,45.5 28.5,44 31.8,41.5" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <g class="leg" transform="translate(247 130)">
        <path fill="url(#b)" fill-rule="nonzero" d="M18.4,137.1 C17.3,137.1 16.1,136.7 15.1,136 C8.7,131.2 4.9,123.6 4.9,115.7 C4.9,101.7 16.3,90.3 30.3,90.3 C31.6,90.3 32.9,90.4 34.2,90.6 C35.4,85.2 35.9,79.8 35.9,74.3 C35.9,49 23.5,25.3 2.8,10.8 C0.3,9.1 -0.3,5.6 1.4,3.1 C3.1,0.6 6.6,-6.21724894e-15 9.1,1.7 C32.8,18.2 46.9,45.3 46.9,74.2 C46.9,82.6 45.7,90.9 43.4,98.9 C43,100.4 41.9,101.7 40.5,102.3 C39.1,103 37.4,103 36,102.4 C34.2,101.6 32.3,101.2 30.3,101.2 C22.4,101.2 15.9,107.6 15.9,115.6 C15.9,120.2 18,124.3 21.7,127.1 C24.1,128.9 24.6,132.4 22.8,134.8 C21.8,136.3 20.1,137.1 18.4,137.1 Z"/>
        <path stroke="#FFFFFF" stroke-width="11" d="M18.5,131.6 C21.8,134.1 25.9,135.6 30.4,135.6 C41.4,135.6 50.3,126.7 50.3,115.7 C50.3,107.5 45.3,100.5 38.3,97.5" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <g class="leg" transform="translate(117 101)">
        <path fill="url(#c)" fill-rule="nonzero" d="M5.8,108.8 C2.8,108.8 0.3,106.3 0.3,103.3 C0.3,100.8 0.4,98.3 0.6,95.8 C3.8,58 30.7,26.5 67.6,17.5 C69.1,17.1 70.7,17.4 72,18.3 C73.3,19.2 74.1,20.6 74.3,22.2 C75.2,29.4 81.3,34.8 88.5,34.8 C95.7,34.8 101.9,29.4 102.7,22.2 C103.1,19.2 105.8,17 108.8,17.4 C111.8,17.8 114,20.5 113.6,23.5 C112.1,36.2 101.3,45.8 88.4,45.8 C77.7,45.8 68.5,39.2 64.8,29.6 C35.2,39.1 14,65.4 11.4,96.7 C11.2,98.9 11.1,101.1 11.1,103.3 C11.3,106.3 8.8,108.8 5.8,108.8 Z"/>
        <path stroke="#FFFFFF" stroke-width="11" d="M108.3,22.8 C108.4,22 108.4,21.2 108.4,20.4 C108.4,9.4 99.5,0.5 88.5,0.5 C77.5,0.5 68.6,9.4 68.6,20.4 C68.6,21.2 68.7,22 68.7,22.8" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <circle cx="205.6" cy="205.5" r="106.8"/>
    </g>
  </g>
</svg>
</template>

<script>
export default {}
</script>
