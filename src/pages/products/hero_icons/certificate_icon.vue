<style lang="sass" scoped>
@import "../../../assets/animations"
.svg-box
  height: 438px
  +animate(fadeInUp, 1s, 1.6s)
  transform-origin: center
  .cls-2, .cls-1
    stroke-dasharray: 6px,4px
    +animate(pathCircle, 3s, 2s)
  .outside-circle
    +animate(rotateCircle, 3s, 5s)
  .inside-circle
    +animate(rotateCircle, 3s, 4s)
.cls-1, .cls-10, .cls-11, .cls-12, .cls-2, .cls-8, .cls-9
  stroke: #fff
  stroke-width: 1px

.cls-1, .cls-10, .cls-12, .cls-2, .cls-8
  fill: none

.cls-1, .cls-13
  opacity: 0.3

.cls-2
  opacity: 0.6

.cls-10, .cls-11, .cls-13, .cls-14, .cls-2, .cls-3, .cls-5
  fill-rule: evenodd

.cls-11, .cls-13, .cls-14, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-9
  fill: #fff

.cls-3, .cls-7
  opacity: 0.2

.cls-10, .cls-12, .cls-14, .cls-4
  opacity: 0.5

.cls-8
  stroke-linecap: round
  stroke-dasharray: 0.001,2

.cls-10, .cls-12
  stroke-dasharray: 4,2
</style>

<template>
<div class="svg-box">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="438" height="438" viewBox="0 0 438 424">
    <g>
      <circle cx="226.565" cy="210.985" r="133.875" class="cls-1"/>
      <circle cx="225.935" cy="210.344" r="172.405" class="cls-1"/>
      <path d="M225.949,0.500 C342.096,0.500 436.252,94.347 436.252,210.114 C436.252,325.881 342.096,419.728 225.949,419.728 C109.802,419.728 15.647,325.881 15.647,210.114 C15.647,94.347 109.802,0.500 225.949,0.500 Z" transform="translate(0.5 0.25)" class="cls-2"/>
      <g class="outside-circle">
        <path d="M90.932,16.368 C107.672,16.368 121.243,29.893 121.243,46.577 C121.243,63.261 107.672,76.786 90.932,76.786 C74.192,76.786 60.621,63.261 60.621,46.577 C60.621,29.893 74.192,16.368 90.932,16.368 Z" transform="translate(0.5 0.25)" class="cls-3"/>
        <circle cx="91.44" cy="47.344" r="21.47" class="cls-4"/>
        <path d="M90.949,35.262 C97.228,35.262 102.318,40.335 102.318,46.594 C102.318,52.853 97.228,57.927 90.949,57.927 C84.671,57.927 79.581,52.853 79.581,46.594 C79.581,40.335 84.671,35.262 90.949,35.262 Z" transform="translate(0.5 0.25)" class="cls-5"/>
      </g>
      <g class="outside-circle">
        <path d="M406.689,73.015 C423.429,73.015 437.000,86.540 437.000,103.224 C437.000,119.908 423.429,133.433 406.689,133.433 C389.949,133.433 376.379,119.908 376.379,103.224 C376.379,86.540 389.949,73.015 406.689,73.015 Z" transform="translate(0.5 0.25)" class="cls-3"/>
        <circle cx="407.19" cy="104" r="21.47" class="cls-4"/>
        <circle cx="407.185" cy="103.984" r="11.345" class="cls-6"/>
      </g>
      <g class="outside-circle">
        <path d="M23.361,245.481 C36.263,245.481 46.722,255.908 46.722,268.770 C46.722,281.632 36.263,292.058 23.361,292.058 C10.459,292.058 0.000,281.632 0.000,268.770 C0.000,255.908 10.459,245.481 23.361,245.481 Z" transform="translate(0.5 0.25)" class="cls-3"/>
        <circle cx="23.86" cy="269.531" r="16.58" class="cls-4"/>
        <path d="M23.361,260.049 C28.204,260.049 32.130,263.961 32.130,268.787 C32.130,273.613 28.204,277.525 23.361,277.525 C18.518,277.525 14.592,273.613 14.592,268.787 C14.592,263.961 18.518,260.049 23.361,260.049 Z" transform="translate(0.5 0.25)" class="cls-5"/>
      </g>
      <g class="outside-circle">
        <circle cx="342.155" cy="382.828" r="41.035" class="cls-7"/>
        <circle cx="342.14" cy="382.844" r="29.08" class="cls-4"/>
        <circle cx="342.14" cy="382.829" r="15.39" class="cls-6"/>
      </g>
      <g class="inside-circle">
        <circle cx="145.095" cy="361.438" r="8.215" class="cls-8"/>
        <circle cx="145.095" cy="361.421" r="3.155" class="cls-9"/>
      </g>
      <g class="inside-circle">
        <path d="M396.514,183.002 C403.166,183.002 408.558,188.362 408.558,194.975 C408.558,201.587 403.166,206.948 396.514,206.948 C389.862,206.948 384.469,201.587 384.469,194.975 C384.469,188.362 389.862,183.002 396.514,183.002 Z" transform="translate(0.5 0.25)" class="cls-10"/>
        <path d="M396.514,190.372 C399.069,190.372 401.141,192.433 401.141,194.975 C401.141,197.517 399.069,199.577 396.514,199.577 C393.958,199.577 391.887,197.517 391.887,194.975 C391.887,192.433 393.958,190.372 396.514,190.372 Z" transform="translate(0.5 0.25)" class="cls-11"/>
      </g>
      <g class="inside-circle">
        <circle cx="73.14" cy="131.047" r="9.48" class="cls-12"/>
        <path d="M73.114,127.151 C75.124,127.151 76.753,128.778 76.753,130.784 C76.753,132.791 75.124,134.418 73.114,134.418 C71.104,134.418 69.474,132.791 69.474,130.784 C69.474,128.778 71.104,127.151 73.114,127.151 Z" transform="translate(0.5 0.25)" class="cls-11"/>
      </g>
      <path d="M130.891,137.004 L224.601,99.676 L318.338,136.957 L311.811,256.778 L224.656,316.680 L137.473,256.826 L130.891,137.004 Z" transform="translate(0.5 0.25)" class="cls-3"/>
      <path d="M224.601,99.676 L318.338,136.957 L311.811,256.778 L224.656,316.680 L224.601,99.676 Z" transform="translate(0.5 0.25)" class="cls-3"/>
      <path d="M144.201,147.193 L224.603,115.209 L305.029,147.153 L299.428,249.821 L224.650,301.148 L149.849,249.862 L144.201,147.193 Z" transform="translate(0.5 0.25)" class="cls-13"/>
      <path d="M224.603,115.209 L305.029,147.153 L299.428,249.821 L224.650,301.148 L224.603,115.209 Z" transform="translate(0.5 0.25)" class="cls-14"/>
      <path d="M159.834,157.720 L224.182,132.660 L288.549,157.685 L283.730,241.625 L224.222,283.613 L164.694,241.661 L159.834,157.720 Z" transform="translate(0.5 0.25)" class="cls-14"/>
      <path d="M224.182,132.660 L288.549,157.685 L283.730,241.625 L224.222,283.613 L224.182,132.660 Z" transform="translate(0.5 0.25)" class="cls-5"/>
    </g>
  </svg>
</div>
</template>

<script>
export default {}
</script>
