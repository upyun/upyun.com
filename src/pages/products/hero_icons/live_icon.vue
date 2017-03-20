<style lang="sass" scoped>
@import "../../../assets/animations"
.cam
  +animate(zoomIn, 1.5s, 1.4s)
.wave-1
  +animate(fadeInRightSmall, .3s, 2s)
.wave-2
  +animate(fadeInRightSmall, .3s, 2.2s)
.wave-3
  +animate(fadeInRightSmall, .3s, 2.4s)
.wave-4
  +animate(fadeInRightSmall, .3s, 2.6s)
.wave-5
  +animate(fadeInRightSmall, .3s, 2.8s)
.o-1
  +animate(zoomIn, 1.5s, 1s)
.o-2
  +animate(zoomIn, 1.5s, 1.2s)
.o-3
  +animate(zoomIn, 1.5s, 1.4s)
</style>

<template>
<div class="svg-box">
  <svg viewBox="0 0 467 458" width="467" height="458" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
      <g>
        <g class="o-1">
          <circle stroke="#FFF" fill="#FFF" opacity=".4" cx="228.5" cy="228.1" r="80.8"/>
        </g>
        <g class="o-2">
          <path d="M228.5 74.4c-84.9 0-153.7 68.8-153.7 153.7 0 84.9 68.8 153.7 153.7 153.7 84.9 0 153.7-68.8 153.7-153.7 0-84.9-68.8-153.7-153.7-153.7zm0 271.1c-64.8 0-117.4-52.6-117.4-117.4 0-64.8 52.6-117.4 117.4-117.4 64.8 0 117.4 52.6 117.4 117.4 0 64.8-52.6 117.4-117.4 117.4z" stroke="#FFF" fill="#FFF" opacity=".2"/>
          <circle stroke="#FFF" opacity=".65" cx="228.5" cy="228.1" r="117.4"/>
        </g>
        <g class="o-3">
          <path d="M228.5.2C102.6.2.6 102.2.6 228.1S102.6 456 228.5 456s227.9-102 227.9-227.9S354.4.2 228.5.2zm0 418.1c-105.1 0-190.2-85.2-190.2-190.2 0-105.1 85.2-190.2 190.2-190.2 105.1 0 190.2 85.2 190.2 190.2 0 105-85.1 190.2-190.2 190.2z" stroke="#FFF" fill="#FFF" opacity=".02"/>
          <circle stroke="#FFF" opacity=".2" cx="228.5" cy="228.1" r="190.2"/>
        </g>
        <g fill="#FFF">
          <g class="wave-1">
            <path d="M299.6 228.1c0 19.5-7.9 37.2-20.8 50.1l14.1 14.1c16.4-16.4 26.6-39.2 26.6-64.2s-10.2-47.7-26.6-64.2L278.8 178c12.8 12.8 20.8 30.5 20.8 50.1z" opacity=".85"/>
          </g>
          <g class="wave-2">
            <path d="M336.2 228.1c0 29.6-12 56.5-31.5 75.9l14.1 14.1c23.1-23.1 37.4-54.9 37.4-90s-14.3-67-37.4-90l-14.1 14.1c19.4 19.4 31.5 46.3 31.5 75.9z" opacity=".65"/>
          </g>
          <g class="wave-3">
            <path d="M372.5 228.1c0 39.6-16.1 75.5-42.1 101.6l14.1 14.1c29.6-29.6 48-70.6 48-115.7 0-45.1-18.4-86.1-48-115.7l-14.1 14.1c25.9 26 42.1 62 42.1 101.6z" opacity=".45"/>
          </g>
          <g class="wave-4">
            <path d="M409 228.1c0 49.7-20.2 94.7-52.8 127.4l14.1 14.1c36.3-36.3 58.7-86.3 58.7-141.5s-22.5-105.3-58.7-141.5l-14.1 14.1c32.6 32.6 52.8 77.7 52.8 127.4z" opacity=".25"/>
          </g>
          <g class="wave-5">
            <path d="M382.9 74c41.2 41.2 63.8 95.9 63.8 154.1 0 58.2-22.7 112.9-63.8 154.1l14.1 14.1c44.9-44.9 69.7-104.7 69.7-168.2 0-63.5-24.7-123.3-69.7-168.2L382.9 74z" opacity=".05"/>
          </g>
        </g>
      </g>
      <g fill="#FFF" class="cam">
        <path d="M244.2 258.3l-47 3.1c-7 0-12.7-5.7-12.7-12.7v-39.4c0-7 5.7-12.7 12.7-12.7l44.5 2.7c7 0 17.3 1.9 17.3 10.1v36.9c-.3 8.6-7.9 12-14.8 12z"/>
        <path d="M277.6 250.1l-18.8-10.4v-21.1l18.7-10.6c2.3-1.3 5.2.4 5.2 3.1V247c.1 2.7-2.7 4.4-5.1 3.1z"/>
      </g>
    </g>
  </svg>
</div>
</template>

<script>
export default {}
</script>
